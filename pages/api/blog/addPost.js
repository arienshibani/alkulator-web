import clientPromise from "../../../lib/MongoClient";

const addPost = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("alkulatorBlog");
    const { title, content } = req.body;

    const post = await db.collection("posts").insertOne({
      title,
      content,
    });

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};

export default addPost;
