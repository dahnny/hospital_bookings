const app = express.Router();

app.get("/", (req, res) => {
    res.send("Hello World!");
})