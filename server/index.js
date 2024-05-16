import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017", 
{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
}).catch(err => {
  console.error("Error connecting to MongoDB:", err);
});

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
