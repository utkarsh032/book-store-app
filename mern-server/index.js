import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;
const _dirname = path.resolve();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files
app.use(express.static(path.join(_dirname, "mern-client/dist")));

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(_dirname, "mern-client/dist", "index.html"));
});

// MongoDB configuration
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();

    // Create a collection of documents
    const bookCollections = client.db("BookInventory").collection("books");

    // Insert a book into the database
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);
    });

    // Update a book data
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };

      const updateDoc = {
        $set: {
          ...updateBookData,
        },
      };

      const options = { upsert: true };

      const result = await bookCollections.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    // Delete a book data
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.deleteOne(filter);
      res.send(result);
    });

    // Find books by category
    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }
      const result = await bookCollections.find(query).toArray();
      res.send(result);
    });

    // Get a single book data
    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.findOne(filter);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // Close the client when finished
    await client.close();
  }
}

// Run the server
run().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}).catch(console.error);
