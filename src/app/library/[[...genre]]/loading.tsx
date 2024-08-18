import { Skeleton } from "@mui/material";
import React from "react";

export default function Loading() {
  const tenItems = Array.from({ length: 18 });

  return (
    <div className="w-full">
      <div className="all-games">
        {tenItems.map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            className="rounded-md"
            width={180}
            height={200}
          />
        ))}
      </div>
    </div>
  );
}
