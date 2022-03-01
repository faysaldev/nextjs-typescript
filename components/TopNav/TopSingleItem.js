import React, { useState } from "react";
import Image from "next/image";

function TopSingleItem({ name, image, dropdown }) {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <>
      {image && (
        <Image
          src={image}
          height={25}
          width={25}
          className="object-contain"
          alt="hellow"
        />
      )}
      {name && (
        <div className={`relative text-sm group hidden md:inline-flex`}>
          <p
            className="transition-all ease-in-out duration-700 cursor-context-menu font-semibold text-gray-300"
            onClick={() => setShowDropDown(true)}
          >
            {name}
          </p>
          {showDropDown && (
            <div
              className={`absolute z-100 space-y-1 hidden w-[250px] bg-[#1b1b1c] top-4 left-0 text-white font-semibold rounded-md max-w-[300px] ${
                showDropDown ? "hidden group-hover:block" : "hidden"
              }`}
            >
              <>
                {dropdown?.map((item) => (
                  <>
                    <li
                      key={item.id}
                      className="list-none cursor-context-menu flex items-center justify-between px-3 py-2  hover:bg-gray-700 transition-all ease-in-out z-100"
                    >
                      <p>{item.dropname}</p> <span>{item.shorcut}</span>
                    </li>
                  </>
                ))}
              </>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default TopSingleItem;
