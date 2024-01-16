import { urlFor } from "@/lib/client";
import Image from "next/image";

const Category = ({ imgData }) => {
  return (
    <section className=" py-20">
      <main className=" grid place-items-center ">
        <h2 className=" font-bold text-base ">Browse The Range</h2>
        <div className=" w-20 h-[3px] rounded-lg mt-2 bg-amber-900" />
      </main>
      <article className=" flex flex-col md:flex-row gap-5 place-content-center md:items-stretch items-center pt-12">
        {imgData.slice(0, 3).map((item, index) => (
          <main key={index}>
            <figure className=" w-[300px] h-[500px]">
              <Image
                src={urlFor(item.image).url()}
                alt="banner img"
                priority
                width={300}
                height={300}
                className=" h-full w-full object-cover rounded-md"
              />
            </figure>
          </main>
        ))}
      </article>
    </section>
  );
};

export default Category;
