export default function Footer() {
    return (
        <footer className=" text-white py-6">
            <div className="max-w-screen-lg mx-auto text-center text-xs sm:text-lg">
                <div className="mt-4">
                    <p className="mt-2">
                        <span className="mr-2">Phone:</span>
                        <span className="text-white hover:underline underline-offset-4 cursor-pointer">
                            +91 70454 18934
                        </span>
                    </p>
                </div>
                <p>
                    &copy; {new Date().getFullYear()} Niranjan Dukhande. All
                    rights reserved.
                </p>
            </div>
        </footer>
    )
}
