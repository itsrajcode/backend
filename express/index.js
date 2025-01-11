import express from "express";

const app = express();
const port = 3002;
app.use(express.json());


let teaList = [
    {
        name: "chai",
        price: 10
    },
    {
        name: "tea",
        price: 20
    },
    {
        name: "coffee",
        price: 30
    }
];
let nextId = 1;

app.post("/teas", (req, res) => {
    res.body = teaList;
})



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});


