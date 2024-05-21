import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
const exampleSchema = new mongoose.Schema({
  name: String,
  image:String,
  description: String,
  price: Number
});
const Example = mongoose.model("example", exampleSchema);
mongoose
  .connect("mongodb+srv://Esmer:esmer123@cluster0.zbeu6hy.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch(() => console.log("not connected"));

app.get("/example", async (req, res) => {
  const getAllData = await Example.find();
  res.send(getAllData);
});

app.get("/example/:id", async (req, res) => {
  const { id } = req.params;
  const getData = await Example.findById(id);
  res.send(getData);
});

app.put("/example/:id", async (req, res) => {
  const { id } = req.params;
  const obj = req.body;
  const putData = await Example.findByIdAndUpdate(id, obj);
  res.send(putData);
});

app.delete("/example/:id", async (req, res) => {
  const { id } = req.params;

  const deleteData = await Example.findByIdAndDelete(id);
  res.send(deleteData);
});

app.post("/example/", async (req, res) => {
  const obj = req.body;
  const postData = new Example(obj);
  await postData.save();
  res.send(postData);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
