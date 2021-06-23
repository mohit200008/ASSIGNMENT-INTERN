import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar />
            <Head>
                <title>ML-app</title>
                <meta name="keywords" content="ml-app"></meta>
            </Head>
            {children}

            <Footer />

        </div>
    );
}

export default Layout;