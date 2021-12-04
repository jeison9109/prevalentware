import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Card({ href = "/", title, icon, description }) {
  return (
    <Link href={href}>
      <a
        className="relative w-96 h-52 bg-white rounded-lg shadow-xl px-4 flex flex-col justify-center items-left hover:cursor-pointer"
        rel="noopener noreferrer"
      >
        <div className=" text-white flex items-center absolute rounded py-4 px-4 shadow-xl bg-secondary left-4 -top-6">
          <img src="/images/industry.svg" className="h-8 w-8" />
        </div>
        <h1 className="font-sans lg:Roboto text-3xl my-8 text-tertiary">
          {title}
        </h1>
        <div className="-my-5 border-t-2 flex gap-1 items-center">
          <Image src={icon} height={12} width={12} />
          <p className="font-sans lg:Roboto text-xs text-gray-400">
            {description}
          </p>
        </div>
      </a>
    </Link>
  );
}
