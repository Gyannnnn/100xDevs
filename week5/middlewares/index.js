const express = require('express');
const app = express();

let logCounter = 0; // Corrected variable name

function log(req, res, next) {
    logCounter = logCounter + 1; // Use the correct variable name
    console.log(`Total Number Of Logs: ${logCounter}`);
    next(); // Call the next middleware or route handler
}

function sum(req, res) {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.json({
        "Sum": a + b 
    });
}

app.get("/sum/:a/:b", log, sum);

app.listen(3000, () => {
    console.log("The Server Is running at port 3000");
});
