import clientPromise from "../../lib/MongoClient";

const drinks = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("vinmonopolet");

    const { category } = req.query;

    const drinks = await db.collection("records")
      .find({ category: category })
      .limit(10)
      .toArray();
    res.json(drinks);
  } catch (error) {
    console.error(error);
    throw new Error(error).message;
  }
};

export default drinks;
