import express from 'express';
import prisma from './db';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// 1. Načtení VŠECH úkolů (GET)
app.get('/api/tasks', async (req: any, res: any) => {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Došlo k chybě při načítání úkolů.' });
  }
});

// 2. Vytvoření NOVÉHO úkolu (POST)
app.post('/api/tasks', async (req: any, res: any) => {
  try {
    const { title, content } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Název (title) je povinný.' });
    }
    const newTask = await prisma.task.create({
      data: {
        title,
        content,
      },
    });
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Došlo k chybě při vytváření úkolu.' });
  }
});

// 3. Aktualizace existujícího úkolu (PATCH)
app.patch('/api/tasks/:id', async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const { title, content, status } = req.body;
    const updatedTask = await prisma.task.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title,
        content,
        status,
      },
    });
    res.json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Došlo k chybě při aktualizaci úkolu.' });
  }
});

// 4. Smazání úkolu (DELETE)
app.delete('/api/tasks/:id', async (req: any, res: any) => {
  try {
    const { id } = req.params;
    await prisma.task.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Došlo k chybě při mazání úkolu.' });
  }
});

app.listen(port, () => {
  console.log(`Server běží na http://localhost:${port}`);
});