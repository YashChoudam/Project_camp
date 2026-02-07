// Imports of packages
import dotenv from "dotenv";

// Import from another files in the project
import app from "./app.js";
import connectDB from "./database/database.js";

dotenv.config();  

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, (error) => {
      if (error) {
        console.log("error listening the server");
      } else {
        console.log(`Server running on : http://localhost:${port}`);
      }
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error ", error);
    process.exit();
  });
