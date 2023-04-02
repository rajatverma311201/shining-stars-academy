const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = require("./app");

const DB = process.env.DB_URI.replace("<PASSWORD>", process.env.DB_PASSWORD);

mongoose.set("strictQuery", true);
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
