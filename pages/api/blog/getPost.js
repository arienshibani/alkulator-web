import clientPromise from "../../../lib/MongoClient";
import { ObjectId } from "mongodb";

const getPost = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("alkulatorBlog");
    const { url } = req.query;

    const post = await db.collection("posts").findOne({ url: url });

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};

export default getPost;
