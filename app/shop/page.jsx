import Card from "@/components/Card";
import Filter from "@/components/Filter";
import { siteConfig } from "@/config/site";
import { client } from "@/lib/client";

async function getProduct() {
  const productQuery =
    '*[_type == "product"] | order(_createdAt asc) { _id, price,category, name,"slug":slug.current, "image":image[0].asset->url}';

  const productData = await client.fetch(productQuery);

  return productData;
}

export default async function page() {
  const data = await getProduct();

  return (
    <section>
      <main className=" grid place-items-center">
        <h1 className=" font-bold text-amber-600 text-xl pb-4">
          {siteConfig.name}
        </h1>
        <p className=" font-semibold text-gray-500 text-sm">
          {siteConfig.description}
        </p>
      </main>
      <article className=" ">
        <main>
          <h1 className=" font-bold text-gray-500 text-lg my-8">
            {data.length} result{data.length === 1 ? "" : "s"}
          </h1>
        </main>
        <div>
          <div>
            <Filter />
          </div>
          <main className=" grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5 place-items-center place-content-center pt-10">
            {data.map((item, index) => (
              <Card data={item} key={index} />
            ))}
          </main>
        </div>
      </article>
    </section>
  );
}
