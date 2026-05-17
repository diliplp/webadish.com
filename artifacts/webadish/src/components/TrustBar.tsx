import React from "react";

const clients = [
  { name: "Verofax", logo: "/images/verofax-logo.webp" },
  { name: "Crystal Group", logo: "/images/crystal-logo-black.webp" },
  { name: "Shivam Nexa", logo: "/images/nexa_logo-black.png" },
];

export function TrustBar() {
  return (
    <div className="py-8 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 mb-6 uppercase tracking-wider">
          Trusted by growing Indian businesses
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client) => (
            <div key={client.name} className="h-8 md:h-10 flex items-center">
              <span className="font-bold text-lg text-gray-800">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
