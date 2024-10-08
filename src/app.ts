import dotenv from 'dotenv'
import express, { Request, Response } from "express"

dotenv.config()

const app = express()

const PORT = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  res.send('hello world')
})

app.listen(PORT, () => {
  console.log(`server on ${PORT}`)  
})