"use client";

import { Category } from "@/Components/Category";
import { Competations } from "@/Components/Competations";
import { Footer } from "@/Components/Footer";
import { Header } from "@/Components/Header";
import { Hiring } from "@/Components/Hiring";
import { SchoolSlider } from "@/Components/SchoolSlider";

export default function Home() {
  return (
    <>
      <Header />
      <SchoolSlider />
      <Category />
      <Competations />
      <Hiring />
      <Footer/>
    </>
  );
}
