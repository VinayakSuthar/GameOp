"use client";
import {
  KeyboardDoubleArrowLeftRounded,
  KeyboardDoubleArrowRightRounded,
} from "@mui/icons-material";
import { useEffect, useRef } from "react";
import { cn } from "@/utils";

interface TopGamesCarousalProps {
  children: React.ReactNode;
  className?: string;
}

export default function Carousal({
  children,
  className,
}: TopGamesCarousalProps) {
  const carousalRef = useRef<HTMLDivElement>(null);

  function scrollLeft() {
    carousalRef.current?.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    carousalRef.current?.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if (!carousalRef.current) return;
    const { scrollWidth, clientWidth } = carousalRef.current;
    carousalRef.current?.scrollTo({
      left: (scrollWidth - clientWidth) / 2,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="flex items-center gap-3">
      <button
        className="text-blue-500 hidden sm:inline-flex p-1 hover:bg-white/5 rounded-full"
        onClick={scrollLeft}
      >
        <KeyboardDoubleArrowLeftRounded className="text-5xl" />
      </button>
      <div
        ref={carousalRef}
        className={cn(
          "flex overflow-x-auto gap-x-8 py-5 snap-x flex-1 *:basis-[180px] *:flex-shrink-0 *:flex-grow-0 *:snap-center no-scrollbar",
          className
        )}
      >
        {children}
      </div>
      <button
        className="text-blue-500 hidden sm:inline-flex p-1 hover:bg-white/5 rounded-full"
        onClick={scrollRight}
      >
        <KeyboardDoubleArrowRightRounded className="text-5xl" />
      </button>
    </div>
  );
}
