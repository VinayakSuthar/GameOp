import React from "react";

export default function Loading() {
  const tenItems = Array.from({ length: 18 });

  return (
    <div className="w-full">
      <div className="all-games">
        {tenItems.map((_, index) => (
          <div
            key={index}
            className="rounded-md aspect-[4/5] bg-white/10 animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}
