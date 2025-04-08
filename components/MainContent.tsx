"use client"
import ArrowIcon from "@/icons/ArrowIcon"
import { useRef, useState } from "react"
import Projects from "./Projects"
import Footer from "./Footer"
import Technologies from "./Technologies"
import Education from "./Education"

export default function MainContent() {
  const [selected, setSelected] = useState("projects")
  return (
    <>
      <div className="sm:flex flex-grow hidden">
        <Sidebar setSelected={setSelected} />
        <Content selected={selected} />
      </div>
      <div className="sm:hidden flex flex-col justify-center items-center">
        <Projects />
        <Education />
        <Technologies />
      </div>
    </>
  )
}

function Sidebar({ selected, setSelected }: any) {
  function handleButtonClick(value: String) {
    setSelected(value)
  }

  return (
    <div className=" sm:w-60 p-8 h-full sm:flex hidden flex-col gap-2.5 items-start border-r-1 text-white border-dashed border-amber-50 font-mono sm:text-lg">
      <button
        className="cursor-pointer hover:underline underline-offset-8"
        onClick={() => handleButtonClick("projects")}
      >
        __projects
      </button>

      <button
        className="cursor-pointer hover:underline underline-offset-8"
        onClick={() => handleButtonClick("education")}
      >
        __education
      </button>

      <button
        className="cursor-pointer hover:underline underline-offset-8"
        onClick={() => handleButtonClick("technologies")}
      >
        __technologies
      </button>
    </div>
  )
}

function Content({ selected }: any) {
  return (
    <div className="w-full p-4 flex flex-col justify-between">
      {selected == "projects" && <Projects />}
      {selected == "education" && <Education />}
      {selected == "technologies" && <Technologies />}
      {/* <Footer /> */}
    </div>
  )
}
