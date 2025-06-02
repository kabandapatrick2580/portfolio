import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
        <header className="bg-gray-800 text-white p-4 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Image
                        src="public/images/Profile.jpg"
                        alt="Profile Picture"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                <h1 className="ml-4 text-xl font-bold">Patrick Kabanda</h1>
                </div>
                {                /* Navigation Links */}
                <nav className="space-x-4">
                    <Link href="/" className="hover:text-gray-300">
                        Home
                    </Link>
                    <Link href="/projects" className="hover:text-gray-300">
                        Projects
                    </Link>
                    <Link href="https://github.com/your-username" target="_blank" className="hover:text-gray-300">
                        GitHub
                    </Link>
                    <Link href="/contact" className="hover:text-gray-300">
                        Contact Us
                    </Link>
                </nav>
            </div>
        </header>
    );
}