import { dbConnect } from "../../../utils/db";

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    const errors = {};
    if (name.trim() === "" || name.length < 3)
      errors.name = "Name must not be empty and atleast have 3 characters.";

    if (email.trim() === "" || !email.includes("@"))
      errors.email = "Email must not be empty and should be a valid email.";

    if (message.trim() === "" || message.length < 10)
      errors.message =
        "Message must not be empty and atleast have 10 characters.";

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    const newMessage = {
      email: email,
      name: name,
      message: message,
    };

    try {
      const client = await dbConnect();
      const db = client.db();
      await db.collection("messages").insertOne(newMessage);
      client.close();
      return res.status(201).json({
        message: "Successfully Sent.",
        data: newMessage,
      });
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong!" });
    }
  }

  if (req.method == "GET") {
    try {
      const client = await dbConnect();
      const collection = client.db().collection("messages");

      const messages = await collection.find().toArray();
      console.log(messages);
      if (!messages) return;
      res.status(200).json({ messages: messages });
      return;
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong!" });
    }
  }
  return res.status(200).json({ message: "Hello! welcome to code Zake." });
};
