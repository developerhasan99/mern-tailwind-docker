import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { PrismaClient } from '@prisma/client';

const app: Application = express();

const prisma = new PrismaClient();

app.get('/', async (req: Request, res: Response): Promise<void> => {

    const post = await prisma.user.create({
        data: {
            name: "Mehedi Hasan",
            email: "developerhasan99@gmail.com",
        }
    })

    res.json(post);
});

const PORT: number = parseInt(process.env.PORT || '9001', 10);

app.listen(PORT, () => {
    console.log(`The backend server is running on http://localhost:${PORT}`);
});

