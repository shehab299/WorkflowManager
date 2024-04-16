import app from "./app.js";
import db from "./utils/db.js";
import createDummyUser from "./utils/devUtils.js";
import defineRelations from "./utils/relations.js";



const start = async () => {
  try {
    defineRelations()
    await db.sync({});
    await createDummyUser(); //dev
    const PORT = process.env.PORT || 3000;
    app.listen(PORT);
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.log("Error: " + err);
  }
};

start();
