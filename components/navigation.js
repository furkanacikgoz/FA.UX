import Link from "next/link";

function Navigation() {
    return (
        <nav>
            <div className="logo">
                <Link href="/">
                    <a>Furkan</a>
                </Link>
            </div>

            <div className="links">
                <Link href="/profile">
                    <a>About Me</a>
                </Link>
                <Link href="https://www.twitter.com/furkanacikgoz" target="_blank">
                    <a>Twitter</a>
                </Link>
            </div>

        </nav>

    );
}

export default Navigation;
