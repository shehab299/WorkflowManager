import app from "./app.js";
import db from "./utils/db.js";

// Connect to database

const start = async () => {
  try {
    await db.authenticate();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT);
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.log("Error: " + err);
  }
};

//LET THE FUN BEGIN
start();
