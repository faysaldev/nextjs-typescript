import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addNav } from "../../../../slice/appSlice";

function File({ Icon, text, iconColor, image, page, allFuilds }) {
  const shortname = text.length > 10 ? text.substring(0, 10) : text;

  const dispatch = useDispatch();

  const SelectPageHandler = () => {
    dispatch(addNav(allFuilds));
  };

  return (
    <div
      className="flex items-center pt-1 group py-1 px-1 hover:bg-gray-900 rounded"
      onClick={page && SelectPageHandler}
    >
      {Icon && <Icon className={`h-4 ${iconColor}`} />}
      {image && (
        <Image
          src={image}
          width={15}
          height={15}
          className="object-contain rounded"
          alt="hellow"
        />
      )}
      <p className="text-yellow-100 group-hover:text-blue-400 transition-colors ease-in-out pl-1">
        {shortname}
      </p>
    </div>
  );
}

export default File;
