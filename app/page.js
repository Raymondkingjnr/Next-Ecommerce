import Banner from "@/components/Banner";
import NewProduct from "@/components/NewProduct";
import TopProduct from "@/components/TopProduct";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner />
      <NewProduct />
      <TopProduct />
    </main>
  );
}
