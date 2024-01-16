import { client } from "@/lib/client";
import Link from "next/link";
import Card from "./Card";

async function getProduct() {
  const productQuery =
    '*[_type == "product"][0...9] | order(_createdAt asc) { _id, price,category, name,"slug":slug.current, "image":image[0].asset->url}';

  const productData = await client.fetch(productQuery);

  return productData;
}

export default async function Featured() {
  const data = await getProduct();

  return (
    <section>
      <main className=" grid place-items-center ">
        <h2 className=" font-bold text-base">Featured Products</h2>
        <div className=" w-20 h-[3px] rounded-lg mt-2 bg-amber-900" />
      </main>
      <main className=" grid  place-items-center">
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5 place-items-center pt-10">
          {data.map((item, index) => (
            <Card data={item} key={index} />
          ))}
        </div>
        <div className=" my-10 ">
          <Link
            href={"/shop"}
            className=" btn bg-amber-800 text-white text-sm font-bold w-[150px]"
          >
            Shop More
          </Link>
        </div>
      </main>
    </section>
  );
}
