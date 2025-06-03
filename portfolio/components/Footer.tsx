import Link from"next/link";


export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-auto">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Patrick Kabanda. <br></br>All rights reserved.</p>
                <div className="mt-2 space-x-4">
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
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
}
    