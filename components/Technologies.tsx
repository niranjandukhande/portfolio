import CircleIcon from "@/icons/CircleIcon"
import React from "react"

const LANGUAGES = ["C", "C++", "TypeScript", "JavaScript", "Python", "SQL"]
const TECHNOLOGIES = [
    "MongoDB",
    "Express",
    "NextJs",
    "JWT",
    "Drizzle",
    "Prisma",
    "PostgreSQL",
    "Websockets",
    "Supabase",
    "Firebase",
]

export default function Technologies() {
    return (
        <div className="sm:w-full w-80 font-mono">
            <div className=" font-mono flex justify-center items-center pb-4 sm:text-2xl font-bold border-b-2 mb-4 text-lg border-b-white text-white">
                Technologies
            </div>
            <h1 className="font-mono sm:text-xl text-lg flex items-center m-4 text-white">
                <div className="pr-2">
                    <CircleIcon />
                </div>
                Languages
            </h1>
            <div className="flex flex-col sm:flex-row gap-2">
                {LANGUAGES.map((lang, index) => (
                    <div
                        key={index}
                        className="px-3 py-1 bg-gray-900 text-white rounded text-sm transition-colors duration-300 hover:bg-amber-50 hover:text-black cursor-pointer"
                    >
                        {lang}
                    </div>
                ))}
            </div>
            <h1 className="font-mono sm:text-xl text-lg flex items-center m-4 text-white">
                <div className="pr-2">
                    <CircleIcon />
                </div>
                Technologies
            </h1>
            <div className="flex flex-col sm:flex-row gap-2">
                {TECHNOLOGIES.map((lang, index) => (
                    <div
                        key={index}
                        className="px-3 py-1 bg-gray-900 text-white rounded text-sm transition-colors duration-300 hover:bg-amber-50 hover:text-black cursor-pointer"
                    >
                        {lang}
                    </div>
                ))}
            </div>
        </div>
    )
}
