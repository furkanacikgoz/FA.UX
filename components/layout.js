import Navigation from "./navigation";
import Head from 'next/head'


function Layout({ children }) {
    return (
        <div className="layout">
            <Head>
                <title>Furkan Açıkgöz</title>
            </Head>
            <Navigation />
            <main>{children}</main>
            <footer>FA</footer>
        </div>
    );
}

export default Layout;
