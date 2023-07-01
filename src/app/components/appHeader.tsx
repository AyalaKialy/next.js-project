import Link from "next/link";

const MENU_ITEMS = [
    { title: 'Home', path: '/' },
    { title: 'Posts', path: '/posts' },
    { title: 'About', path: '/about' },
];
export default function AppHeader() {
    return (
        <header className="bg-gray-800">
            <div className="container mx-auto">
                <nav className="flex items-center justify-between py-4">
                    <div className="flex items-center">
                        <ul className="flex space-x-4">
                            {MENU_ITEMS.map((item) => (
                                <li key={item.path}>
                                    <Link href={item.path} className="text-white hover:text-gray-300">{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

    )
}