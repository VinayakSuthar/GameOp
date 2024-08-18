import { Skeleton } from "@mui/material";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full">
      <Skeleton height={300} className="bg-white/10 rounded-lg" />
      <Skeleton height={300} className="bg-white/10 rounded-lg" />
    </div>
  );
}
