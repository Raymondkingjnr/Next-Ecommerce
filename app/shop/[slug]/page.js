import { client, urlFor } from "@/lib/client";
import { generateAmountOptions } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { TbCurrencyNaira } from "react-icons/tb";

async function getSingleData(slug) {
  const query = `*[_type == 'product' && slug.current == "${slug}"][0]{ _id,name, price,quantity,  category,details , name, 'slug':slug.current,'image':image[0].asset->url}`;

  const data = await client.fetch(query);
  return data;
}

export default async function ProductPage({ params }) {
  const { slug } = params;
  const data = await getSingleData(slug);

  return (
    <main>
      <div className="text-md breadcrumbs">
        <ul>
          <li className=" font-bold text-sm text-gray-500">
            <Link href={"/"}>home</Link>
          </li>
          <li className=" font-bold text-sm text-gray-500">
            <Link href={"/shop"}>products</Link>
          </li>
        </ul>
      </div>
      <section className=" grid gap-y-7 gap-x-8 md:grid-cols-2 pt-20 ">
        <figure className=" w-full h-[350px] md:h-[500px]">
          <Image
            src={urlFor(data.image).url()}
            priority
            alt={data.name}
            width={500}
            height={500}
            className="w-full h-full object-cover rounded"
          />
        </figure>
        <main className="">
          <h1 className=" font-bold capitalize text-2xl text-amber-600 ">
            {data.name}
          </h1>
          <p className="text-sm font-bold leading-7 tracking-wide text-gray-600 pt-10">
            {data.details}
          </p>
          <div className=" flex items-center pt-12 ">
            <h1 className=" font-bold text-xl capitalize text-gray-700">
              <TbCurrencyNaira />
            </h1>
            <h1 className="font-bold text-xl capitalize text-gray-700">
              {data.price}
            </h1>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <h4 className="text-sm  font-bold tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select className="select select-bordered select-md" id="amount">
              {generateAmountOptions(data.quantity)}
            </select>
          </div>
          <div className=" mt-12 flex gap-16">
            <button className=" btn bg-transparent border-amber-700">
              Add To Cart
            </button>
            <Link
              href={"/shop"}
              className=" btn bg-amber-700 text-sm text-gray-100 font-bold"
            >
              Back to store
            </Link>
          </div>
        </main>
      </section>
    </main>
  );
}
