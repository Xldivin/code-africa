import React from "react";

export default function MainPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center space-y-8 p-4">
      <div className="text-2xl sm:text-3xl font-semibold">Wallet</div>
      <div className="text-4xl sm:text-6xl md:text-8xl text-gray-600 font-bold text-center leading-snug sm:leading-normal">
        Carry one thing. <span className="block">Everything.</span>
      </div>
    </main>
  );
}
