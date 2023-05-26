import Layout from "../components/Layout";

const Error = ({ statusCode }) => {
    return (
        <Layout>
            {
                statusCode ? (
                    <p className="text-center">Could not load component ErrorCode : {statusCode}</p>
                ) :
                    <p className="text-center">Could not load component</p>
            }
        </Layout>
    )
}

export default Error;