import Link from "next/link";

function Navigation() {
    return (
        <nav>
            <Link href="/">
                <a>Furkan</a>
            </Link>
            <Link href="/profile">
                <a>About Me</a>
            </Link>
        </nav>
    );
}

export default Navigation;
