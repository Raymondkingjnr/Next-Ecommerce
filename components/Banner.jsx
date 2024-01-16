import { client, urlFor } from "@/lib/client";
import Image from "next/image";
import Category from "@/components/Category";

async function getData() {
  const query = "*[_type == 'banner'][0]";
  const bannerText = await client.fetch(query);

  const imgQuery = "*[_type == 'bannerImg']";
  const imgData = await client.fetch(imgQuery);
  return { bannerText, imgData };
}

export default async function Banner() {
  const data = await getData();
  const imgData = data.imgData;
  const bannerText = data.bannerText;
  return (
    <div>
      <section className=" flex flex-col gap-y-16 place-items-center md:place-items-start  md:flex-row justify-between pt-10 pb-20">
        <div className=" max-w-lg md:pt-20">
          <h4 className=" font-bold text-xl text-amber-600 ">
            {bannerText.smallText}
          </h4>
          <p className=" text-sm font-bold leading-7 tracking-wide text-gray-600 py-2">
            {bannerText.desc}
          </p>
          <button className=" btn w-[150px] font-bold text-sm bg-amber-800 text-white">
            {bannerText.buttonText}
          </button>
        </div>
        <div className=" carousel carousel-center max-w-lg p-4 space-x-4 bg-neutral rounded-box">
          {imgData.map((item, index) => (
            <main key={index} className="carousel-item">
              <Image
                src={urlFor(item.image).url()}
                alt="banner img"
                priority
                width={200}
                height={300}
                className="object-cover rounded-md"
              />
            </main>
          ))}
        </div>
      </section>
      <Category imgData={imgData} />
    </div>
  );
}
