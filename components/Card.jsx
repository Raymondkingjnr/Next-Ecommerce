import { urlFor } from "@/lib/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";

const Card = ({ data }) => {
  return (
    <Link
      href={`/shop/${data.slug}`}
      className=" bg-gray-100 rounded shadow-xl hover:shadow-2xl transition duration-300"
    >
      <figure className="w-[300px] h-[200px]">
        <Image
          src={urlFor(data.image).url()}
          alt="product image"
          priority
          width={300}
          height={300}
          className="object-cover w-full h-full rounded-t-sm"
        />
      </figure>
      <main className=" py-2 px-1">
        <div className=" flex justify-between items-center">
          <h1 className=" font-bold text-sm capitalize text-gray-700">
            {data.name}
          </h1>
          <div className=" flex items-center ">
            <h1 className=" font-bold text-sm capitalize text-gray-700">
              <TbCurrencyNaira />
            </h1>
            <h1 className="font-bold text-sm capitalize text-gray-700">
              {data.price}
            </h1>
          </div>
        </div>
        <h4 className=" font-bold text-sm capitalize text-gray-700 pt-3">
          {data.category}
        </h4>
      </main>
    </Link>
  );
};

export default Card;
