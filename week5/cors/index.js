const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post("/sum", (req, res) => {
    let a = parseFloat(req.body.a);  // Ensure values are numbers
    let b = parseFloat(req.body.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Both 'a' and 'b' must be numbers." });
    }

    res.json({ "Ans": a + b });
});

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});
