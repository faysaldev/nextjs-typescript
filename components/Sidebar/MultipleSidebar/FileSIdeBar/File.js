import React from "react";
import Image from "next/image";

function File({ Icon, text, iconColor, image }) {
  const shortname = text.length > 10 ? text.substring(0, 10) : text;

  return (
    <div className="flex items-center pt-1 group">
      {Icon && <Icon className={`h-4 ${iconColor}`} />}
      {image && (
        <Image
          src={image}
          width={15}
          height={15}
          className="object-contain rounded"
        />
      )}
      <p className="text-yellow-100 group-hover:text-blue-400 transition-colors ease-in-out pl-1">
        {shortname}
      </p>
    </div>
  );
}

export default File;
