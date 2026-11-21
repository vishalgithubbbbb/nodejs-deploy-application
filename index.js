import express from "express";

const app = express();
const PORT = process.env.PORT ?? 5858;

app.get("/" , (req, res) => {
  return res.json({ message: "Hello from the server to vishalbhai " });
}); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});  

