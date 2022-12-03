/* eslint-disable import/no-anonymous-default-export */
import clientPromise from "../../lib/MongoClient";
export default async (req, res) => {
  const client = await clientPromise;
  const database = client.db("vinmonopolet");
  const userdb = await database.collection("records")
    .find({ category: "Øl" })
    .limit(50)
    .toArray();
  res.json(userdb);
};
