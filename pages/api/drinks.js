import clientPromise from "../../lib/MongoClient";

const drinks = async (req, res) => {
  const client = await clientPromise;
  const database = client.db("vinmonopolet");
  const drinks = await database.collection("records")
    .find({ category: "Øl" })
    .limit(50)
    .toArray();
  res.json(drinks);
};

export default drinks;
