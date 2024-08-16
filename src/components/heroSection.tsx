import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="relative sm:static sm:flex sm:flex-row-reverse items-center justify-between mt-5 mb-10">
      <div className="hero-image">
        <Image
          src="/images/hero.jpg"
          alt="hero"
          fill
          className="h-[unset] object-cover"
        />
      </div>
      <div className="basis-1/2">
        <h3 className="text-lg sm:text-xl lg:text-3xl mb-1 sm:mb-4 font-bold">
          New Launch
        </h3>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-7 font-extrabold text-sky-500">
          Aquatic Rescue
        </h2>
        <p className="text-sm sm:text-base font-medium sm:mb-5 line-clamp-3 lg:line-clamp-none">
          Tickle your brains as your find the best way to rescue these little
          water creatures from their bubbles! Tickle your brains as your find
          the best way to rescue these little water creatures from their
          bubbles! Tickle your brains as your find the best way to rescue these
          little water creatures from their bubbles!
        </p>
        <Button
          variant="contained"
          className="mt-5 uppercase bg-gradient-to-r from-violet-700 to-blue-700 text-lg rounded-lg px-5"
        >
          Pre-Order Now
        </Button>
      </div>
    </div>
  );
}
