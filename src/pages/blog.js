import Layout from "../components/Layout";
import Link from "next/link";

const PostCard = ({ post }) => (
    <div className="col-md-4">
        <Link href={`/blogarticles/${post.id}`} style={{"text-decoration": "none"}}>
            <div className="card text-light">
                <div className="overflow">
                    <img src={post.img_url} alt="" className="card-img-top" />
                </div>
                <div className="card-body text-center h-25">
                    <h1>{post.title}</h1>
                    <p className="overflow-text">{post.body}</p>
                </div>
            </div>
        </Link >
    </div>
)
const Blog = ({ articles }) => {
    return (
        <Layout>
            <div className="row text-center">
                <h2 className="m-3">This is mostly my blog about Japan and my travels</h2>
                <h3 className="m-3">(mostly of it's contents will be in spanish)</h3>
                {
                    articles.map(post => (
                        <PostCard post={post} />
                    ))
                }
            </div>
        </Layout>
    )
}
export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api/blogarticles/");
    const articles = await res.json();
    console.log(articles);
    return {
        props: {
            articles: articles,
        }
    }
}
export default Blog;