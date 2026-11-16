import About from "@/components/home/About";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <CTA/>
    </div>
  );
};

export default page;
