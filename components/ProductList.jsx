import React from "react";
import Card from "./Card";

const ProductList = ({ data }) => {
  return (
    <div>
      <div>
        <main className=" grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5 place-items-center place-content-center pt-10">
          {data.map((item, index) => (
            <Card data={item} key={index} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default ProductList;
