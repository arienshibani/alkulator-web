import clientPromise from "../../../lib/MongoClient";
import { ObjectId } from "mongodb";

const deletePost = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("alkulatorBlog");
    const { id } = req.query;

    const post = await db.collection("posts").deleteOne({
      _id: ObjectId(id),
    });

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};

export default deletePost;
