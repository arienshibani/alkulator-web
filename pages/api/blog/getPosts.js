import clientPromise from "../../../lib/MongoClient";

const getPosts = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("alkulatorBlog");

    const posts = await db.collection("posts").find({}).toArray();

    res.json(posts);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};

export default getPosts;
