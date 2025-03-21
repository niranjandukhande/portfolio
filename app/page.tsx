"use client"
import Image from "next/image"
import ArrowIcon from "@/icons/ArrowIcon"
import Navbar from "@/components/Navbar"
import MainContent from "@/components/MainContent"
import Footer from "@/components/Footer"

export default function Home() {
    return (
        <div className="bg-black flex flex-col h-screen justify-between">
            <Navbar />
            <MainContent />
            <Footer />
        </div>
    )
}
