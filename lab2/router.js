const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    res.send("The lab 2 router file")
})

router.get("/name", (req,res) => {
    res.send("Ovuvuevuevue Enyetuenwuevue Ugbemugbem Osas")
})

router.get("/greeting", (req,res) => {
    res.send("My name is uh Ovuvuevuevue Enyetuenwuevue Ugbemugbem Osas")
})

router.get("/add/:a/:b", (req,res) => {
    console.log(req.params);
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
    res.send(JSON.stringify(a +b));
})

router.get("/calculate/:x/:y/:op", (req,res) => {
    console.log(req.params);
    let x = parseFloat(req.params.x);
    let y = parseFloat(req.params.y);
    let op = req.params.op;

    switch (op) {
        case "+":
            res.send(JSON.stringify(x + y));
            break;
        case "-":
            res.send(JSON.stringify(x - y));
            break;
        case "*":
            res.send(JSON.stringify(x * y));
            break;
        case "/":
            res.send(JSON.stringify(x / y));
            break;
        case "**":
            res.send(JSON.stringify(x ** y));
            break;
    }
})

module.exports = router;