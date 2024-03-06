const app = require('./app.js');
const {sq} = require('./utils/db.js');



// Connect to database

const start = async () => {

    try {
        await sq.authenticate();
        console.log("Database connected...");
        const PORT = process.env.PORT || 3000;
        app.listen(PORT);
        console.log(`Server running on port ${PORT}`);
    } catch (err) {
        console.log("Error: " + err);
    }

}


//LET THE FUN BEGIN
start();
