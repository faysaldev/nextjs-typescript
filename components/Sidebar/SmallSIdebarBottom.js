import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Avatar } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

function SmallSIdebarBottom() {
  const [BoomtShow, setBottomShow] = useState("");
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="px-3 flex flex-col space-y-3 text-gray-700 mb-[47px]">
      {/* TODO: avatar Icon */}
      <div className="hover:text-gray-200 cursor-pointer relative group transition-all ease-in">
        {session?.user ? (
          <Avatar
            className="h-8 w-8"
            src={session?.user?.image}
            onClick={
              BoomtShow == "account"
                ? () => setBottomShow("")
                : () => setBottomShow("account")
            }
          />
        ) : (
          <AccountCircleIcon onClick={() => router.push("/auth/login")} />
        )}

        {BoomtShow == "account" && (
          <>
            <div className="absolute text-white left-12 min-w-[250px] max-w-[270] bg-[#252526] top-1/2 transform -translate-y-1/2 rounded text-xs transition-all ease-in-out duration-1000">
              <li className="list-none cursor-context-menu flex items-center justify-between px-3 py-2  hover:bg-gray-700 transition-all ease-in-out">
                <h1>{session?.user?.name} (Github)</h1>
              </li>
              <li className="list-none cursor-context-menu flex items-center justify-between px-3 py-2  hover:bg-gray-700 transition-all ease-in-out">
                <p>Settings Sync is On</p>
              </li>
            </div>
          </>
        )}
      </div>

      {/* FIXME: Avater Icon */}
      <div className="hover:text-gray-200 cursor-pointer relative group transition-all ease-in">
        <SettingsIcon
          onClick={
            BoomtShow == "setting"
              ? () => setBottomShow("")
              : () => setBottomShow("setting")
          }
        />
        {BoomtShow == "setting" && (
          <>
            <div className="absolute text-white left-12 min-w-[250px] max-w-[270] bg-[#252526] -bottom-[5rem] transform -translate-y-1/2 rounded text-xs transition-all ease-in-out duration-1000">
              <li className="list-none cursor-context-menu flex items-center justify-between px-3 py-2  hover:bg-gray-700 transition-all ease-in-out">
                <p>Command Palette</p> <span>Ctrl + Shift + P</span>
              </li>
              <li className="list-none cursor-context-menu flex items-center justify-between px-3 py-2  hover:bg-gray-700 transition-all ease-in-out">
                <p>Settings</p> <span>Ctrl + ,</span>
              </li>
              <li className="list-none cursor-context-menu flex items-center justify-between px-3 py-2  hover:bg-gray-700 transition-all ease-in-out">
                <p>Command Palette</p> <span>Ctrl + Shift + P</span>
              </li>
              <li className="list-none cursor-context-menu flex items-center justify-between px-3 py-2  hover:bg-gray-700 transition-all ease-in-out">
                <p>Command Palette</p> <span>Ctrl + Shift + P</span>
              </li>
              <li className="list-none cursor-context-menu flex items-center justify-between px-3 py-2  hover:bg-gray-700 transition-all ease-in-out">
                <p>Command Palette</p> <span>Ctrl + Shift + P</span>
              </li>
              <li className="list-none cursor-context-menu flex items-center justify-between px-3 py-2  hover:bg-gray-700 transition-all ease-in-out">
                <p>Command Palette</p> <span>Ctrl + Shift + P</span>
              </li>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SmallSIdebarBottom;
