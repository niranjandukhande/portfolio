"use client"
import ArrowIcon from "@/icons/ArrowIcon"
import PlusIcon from "@/icons/PlusIcon"

export default function Navbar() {
  return (
    <div className="flex justify-between sm:pl-20 sm:pr-20 pt-5 pb-5 pl-5 pr-5 ">
      <Name />
      <Links />
    </div>
  )
}

function Name() {
  return (
    <div>
      <div className="text-sm font-bold font-mono sm:text-3xl text-white">
        Niranjan.
      </div>
      <div className="text-xs sm:text-sm font-mono flex items-center gap-1 text-white ">
        <PlusIcon />
        progsolos@gmail.com
      </div>
    </div>
  )
}
function Links() {
  return (
    <div className="flex gap-2 sm:gap-6">
      <div
        onClick={() => {
          window.open("https://www.github.com/niranjandukhande", "_blank")
        }}
        className="flex items-center sm:text-xl font-mono gap-1 hover:underline underline-offset-4 cursor-pointer text-xs text-white"
      >
        Github <ArrowIcon />
      </div>
      <div
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/1sCzNdGJnj3n_kfEJTbde2c03K5hmIgto/view?usp=sharing",
            "_blank"
          )
        }}
        className="flex items-center sm:text-xl font-mono gap-1 hover:underline underline-offset-4 cursor-pointer text-xs text-white"
      >
        Resume <ArrowIcon />
      </div>
    </div>
  )
}
