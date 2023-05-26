import Layout from "../components/Layout";
import Link from "next/link";

const custom404 = () => (
    <Layout footer={false}>
        <div className="container text-center">
            <h1>404</h1>
            <p>This page doesn't exist. Let's go <Link href="/">back</Link></p>
        </div>
    </Layout>
);
export default custom404;