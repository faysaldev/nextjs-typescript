import React from "react";

function ContactLeft() {
  const social = {};
  return (
    <div className="text-lg">
      <p className="text-[#857ee2] font-semibold text-xl pb-2">
        const <span className="text-red-600 font-semibold">social</span> = {"{"}{" "}
      </p>
      <ul className="pl-8 space-y-3">
        <li className="flex items-center text-gray-100 font-semibold">
          <p className="text-white pr-2 font-semibold">1 :</p> wesite :{" "}
          <a
            className="text-[#857ee2] font-semibold hover:underline cursor-pointer pl-1"
            href="https://fm-devbooks.netlify.app/"
            target="blank"
          >
            https://fm-devbooks.netlify.app
          </a>
        </li>

        <li className="flex items-center text-gray-100 font-semibold">
          <p className="text-white pr-2 font-semibold">2 :</p> email :{" "}
          <a
            href="mailto:fmridha166@gmail.com"
            target="blank"
            className="text-[#857ee2] font-semibold hover:underline cursor-pointer pl-1"
          >
            {" "}
            fmridha!66@gmail.com
          </a>
        </li>
        <li className="flex items-center text-gray-100 font-semibold">
          <p className="text-white pr-2 font-semibold">3 :</p> linkedin :{" "}
          <a
            href="https://www.linkedin.com/in/faysaldev/"
            target="blank"
            className="text-[#857ee2] font-semibold hover:underline cursor-pointer pl-1"
          >
            Faysal Mridha
          </a>
        </li>
        <li className="flex items-center text-gray-100 font-semibold">
          <p className="text-white pr-2 font-semibold">4 :</p> github :{" "}
          <a
            href="https://github.com/faysaldev"
            target="blank"
            className="text-[#857ee2] font-semibold hover:underline cursor-pointer pl-1"
          >
            faysaldev
          </a>
        </li>
        <li className="flex items-center text-gray-100 font-semibold">
          <p className="text-white pr-2 font-semibold">5 :</p> instagram :{" "}
          <a
            href="https://instagram.com/faysaldev"
            target="blank"
            className="text-[#857ee2] font-semibold hover:underline cursor-pointer pl-1"
          >
            faysaldev
          </a>
        </li>
        <li className="flex items-center text-gray-100 font-semibold">
          <p className="text-white pr-2 font-semibold">6 :</p> twitter :{" "}
          <a
            href="https://twitter.com/faysaldev"
            target="blank"
            className="text-[#857ee2] font-semibold hover:underline cursor-pointer pl-1"
          >
            @faysaldev
          </a>
        </li>
      </ul>

      <p className="text-[#857ee2] font-semibold text-xl pt-2">{"} ;"}</p>
    </div>
  );
}

export default ContactLeft;
