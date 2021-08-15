import express from "express";

const app = express();
app.get("/", (requet, response) => {
    return response.json({ message: "helllo!" });
});

app.post("/", (request, response) => {
    const { name } = request.body;
    return response.json(name);
});
app.listen(3333, () => console.log("Server is running!"));
