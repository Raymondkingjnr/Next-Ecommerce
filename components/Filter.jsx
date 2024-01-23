"use client";
import { updateSearchParams } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const sortOptions = [
  {
    name: "Newest",
    value: "/?date=desc",
  },
  {
    name: "Price, low to high",
    value: "/?price=asc",
  },
  {
    name: "Price, high to low",
    value: "/?price=desc",
  },
];

const Filter = () => {
  const router = useRouter();
  const [selected, setSelected] = useState(sortOptions[0]);

  const handleParams = (e) => {
    const { value, title } = e.target;
    const newPathName = updateSearchParams(title, value.toLowerCase());
    router.push(newPathName, { scroll: false });
  };

  return (
    <div className=" px-8 bg-slate-400 py-9 max-w-6xl rounded-md mx-auto">
      <div className=" grid md:grid-cols-3 gap-2">
        <input
          type="search"
          placeholder="search product"
          className="input input-bordered  w-full max-w-xs"
        />
        <select
          className="select w-full max-w-xs font-bold text-xs text-gray-400"
          value={selected.value}
          onChange={(e) => {
            setSelected(
              sortOptions.find((option) => option.value === e.target.value)
            );
            handleParams(e);
          }}
        >
          {sortOptions.map((option, index) => (
            <option
              key={index}
              value={option.value}
              className=" font-bold text-xs text-gray-400 pb-2"
            >
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
