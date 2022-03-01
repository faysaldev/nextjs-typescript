import React from "react";
import Image from "next/image";
function HomeRightContent() {
  return (
    <div className="w-fit mx-auto h-full md:pr-24">
      <Image
        src="https://i.ibb.co/x5YK6pG/IMG-20220117-000415-656.jpg"
        width={400}
        height={600}
        className="object-contain"
        alt="hello"
      />
    </div>
  );
}

export default HomeRightContent;
