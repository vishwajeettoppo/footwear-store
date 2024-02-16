import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/sections/Footer";
import Subscribe from "@/sections/Subscribe";
import CustomerReviews from "@/sections/CustomerReviews";
import SpecialOffer from "@/sections/SpecialOffer";
import Services from "@/sections/Services";
import SuperQuality from "@/sections/SuperQuality";
import PopularProducts from "@/sections/PopularProducts";
import Nav from "@/components/Nav";
import Head from "next/head";
import Hero from "@/sections/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b"><Hero/></section>
      <section className="padding"><PopularProducts/></section>
      <section className="padding"><SuperQuality/></section>
      <section className="padding padding-x py-10"><Services/></section>
      <section className="padding"><SpecialOffer/></section>
      <section className="padding bg-pale-blue"><CustomerReviews/></section>
      <section className="padding-x sm:py-32 py-16 w-full"><Subscribe/></section>
      <section className="padding bg-black padding-x padding-t pb-8"><Footer/></section>
    </main>
  );
}
