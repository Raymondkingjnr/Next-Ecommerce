import ProductList from "@/components/ProductList";
import { siteConfig } from "@/config/site";
import { client } from "@/lib/client";
import Filter from "@/components/Filter";

export default async function page() {
  const productQuery = `*[_type == "product"] | { _id, price,category, name,"slug":slug.current, "image":image[0].asset->url}`;

  const data = await client.fetch(productQuery);

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
          <Filter />
        </div>
        <ProductList data={data} />
      </article>
    </section>
  );
}
