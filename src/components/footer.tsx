import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black/30 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 xl:px-10 py-5">
        <div className="flex items-center gap-x-3">
          <span className="logo text-lg">Gamezop</span>
          <span className="flex-1 text-slate-200 text-sm">
            Terms & Condition
          </span>
          <span className="rounded-full px-4 py-2 border text-sm">English</span>
        </div>
      </div>
    </footer>
  );
}
