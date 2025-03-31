import React from "react"
import CircleIcon from "@/icons/CircleIcon"
import Link from "next/link"

const EDUCATION = [
    {
        degreeName: "Bachelor of Engineering in Computer Engineering",
        collegeName: "Terna Engineering College",
        location: "Mumbai",
        year: 2024,
    },
    {
        degreeName: "Diploma in Computer Engineering",
        collegeName: "Vivekananda Education Society's Polytechnic",
        location: "Mumbai",
        year: 2021,
    },
]

export default function Education() {
    return (
        <div className="">
            <div className=" font-mono flex justify-center items-center pb-4 sm:text-2xl font-bold border-b-2 mb-4 border-b-white text-lg text-white">
                Education
            </div>
            <div>
                {EDUCATION.map((item, index) => (
                    <div key={index} className="sm:w-full w-80">
                        <div className="font-mono mb-4">
                            <h1 className="sm:text-xl flex items-center cursor-pointer text-sm text-white">
                                <div className="pr-2">
                                    <CircleIcon />
                                </div>
                                {item.degreeName}
                            </h1>
                            <p className="cursor-pointer sm:text-lg text-xs text-white">
                                <span className="underline underline-offset-4 text-white">
                                    {item.collegeName}
                                </span>
                                , {item.location}, {item.year}.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
