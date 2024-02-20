import express from 'express'
import cors from 'cors'
const app = express();


//app.use
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    // Permite conexiones de cualquier url
      // origin: "*",
      // methods: "GET,HEAD,PUT,PATCH,POST,DELETE"

    // Permite conexiones de la url especifica
      origin: "http://localhost:4200",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
      preflightContinue: false,
      optionsSuccessStatus: 204,
  })
);

//Routers
import authRouter from "./router/auth.js"
import publicationRouter from './schema/Publicacion.js';

app.use('/api/auth', authRouter);
app.use("/api/publication", publicationRouter)

export default app;
