import express, { Request, Response } from 'express';

const app = express();
const PORT:number = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log('Server is running on port 3001');
});