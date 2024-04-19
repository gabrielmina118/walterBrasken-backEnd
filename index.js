import express from "express";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors());

const produtos = [
    {
        id: 1,
        imagem: "https://m.media-amazon.com/images/I/51IhPik2ZcL._AC_.jpg",
        titulo: "Faça já seu orçamento!",
        tipo: "eletronico",
        descricao: "descriçao 1",
    },
    {
        id: 2,
        imagem: "https://m.media-amazon.com/images/I/51IhPik2ZcL._AC_.jpg",
        titulo: "Faça já seu orçamento!",
        tipo: "eletronico",
        descricao: "descriçao 1",
    }
];

// Endpoints - GET , POST , DELETE  , PUT
app.get("/buscar-produtos", (request, response) => {
    response.status(200).send(produtos);
});

app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000");
});
