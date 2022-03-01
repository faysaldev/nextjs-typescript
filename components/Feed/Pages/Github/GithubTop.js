import Image from "next/image";
import React from "react";

function GithubTop() {
  return (
    <div className="bg-[#1F2428] px-8 py-6 rounded-md flex items-center justify-center">
      <div className="flex items-start">
        {/* image and name */}
        <div className="flex items-center space-x-3 pr-4">
          <Image
            src="https://i.ibb.co/x5YK6pG/IMG-20220117-000415-656.jpg"
            width={70}
            height={50}
            className="object-contain"
          />
          <p>faysaldev</p>
        </div>

        {/* Count repos */}
        <div className="pl-4 relative BorderLineWidth pr-4 flex">
          <p className="pt-3 text-gray-400 font-semibold">47 Repositories</p>
        </div>
        {/*  */}
        <div className="pl-4 flex">
          <p className="pt-3 text-gray-400 font-semibold">2 followers</p>
        </div>
      </div>
    </div>
  );
}

export default GithubTop;
