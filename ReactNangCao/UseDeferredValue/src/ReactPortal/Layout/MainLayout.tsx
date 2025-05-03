import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-4 min-w-screen gap-4 h-screen">
      <div className="col-span-1 bg-green-400">
        <a href="">Home</a>
      </div>
      <div className="col-span-3 bg-gray-300">{children}</div>
    </div>
  );
}
