import React, { useState } from "react";

function ContactRight() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const FromSubmitHandler = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Fill up the all value");
    } else {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <div className="flex-1 min-w-[500px]">
      {/* TODO: i am the from top */}
      <div className="text-3xl font-sans font-semibold pb-4 ">
        <h1>Connect Our Via Socials</h1>
      </div>
      {/*  */}

      <form className="space-y-4 pb-12">
        {/* TODO: NAME AND EMAIL FUILD  */}

        <div className=" space-x-1 flex items-center justify-between">
          <div className="space-y-2 flex flex-col">
            <label className="uppercase font-semibold">name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent py-2 px-4 outline-none bg-[#000] rounded"
              type="text"
              required
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <label className="uppercase font-semibold">email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent py-2 px-4 outline-none bg-[#000] rounded"
              type="email"
              required
            />
          </div>
        </div>

        <div className="space-y-2 flex flex-col">
          <label className="uppercase font-semibold">subject</label>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="bg-transparent py-2 px-4 outline-none bg-[#000] rounded"
            type="text"
            required
          />
        </div>

        <div className="space-y-2 flex flex-col">
          <label className="uppercase font-semibold">message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-transparent py-2 px-4 outline-none resize-none h-[50px] bg-[#000] rounded w-full"
            type="text"
            required
          ></textarea>
        </div>

        <button
          className="px-4 text-black rounded border hover:bg-transparent hover:text-white transition-all ease-in border-[#857ee2] font-semibold bg-[#857ee2] py-1"
          type="submit"
          onClick={FromSubmitHandler}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default ContactRight;
