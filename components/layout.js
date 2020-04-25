import Navigation from "./navigation";
import Head from 'next/head'


function Layout({ children }) {
    return (
        <div className="layout">
            <Head>
                <title>Furkan Açıkgöz</title>
            </Head>

            <main>{children}</main>
        </div>
    );
}

export default Layout;
