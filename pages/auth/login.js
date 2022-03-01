import { getProviders, signIn } from "next-auth/react";
import React from "react";
import { useRouter } from "next/router";

function Login({ providers }) {
  const router = useRouter();
  return (
    <div className="w-full h-screen bg-[#F7F7F7] ">
      <div
        className="flex items-center justify-center h-screen"
        style={{
          backgroundImage: 'url("https://i.ibb.co/PGGqDMv/download-3.png")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="flex space-y-3 flex-col">
          {Object.values(providers).map((provider) => {
            return (
              <>
                <button
                  className={`px-8 py-2 rounded text-white ${
                    provider.id == "google"
                      ? "bg-blue-300 text-black hover:bg-red-500 transition-all ease-in hover:text-white "
                      : "bg-gray-600 hover:bg-pink-600 transition-all ease-in"
                  }`}
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  {provider?.name}
                </button>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const provider = await getProviders();
  return {
    props: {
      providers: provider,
    },
  };
}

export default Login;
