const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
    console.log("connected to port");
});

app.get("/tasks", async (req, res) => {
    try {
        const tasks = await prisma.todos.findMany();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Error fetching tasks" });
    }
});

app.get("/tasks/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const task = await prisma.todos.findUnique({
            where: { id: id }
        });
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: "Error fetching task" });
    }
});

app.put("/tasks/:id", async (req, res) => {
    const { id } = req.params;
    const { title, description, status, due_date } = req.body;
    try {
        const task = await prisma.todos.update({
            where: { id: id },
            data: { title, description, status, due_date }
        });
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: "Error updating task" });
    }
});

app.post("/tasks", async (req, res) => {
    const { title, description, status, due_date } = req.body;

    try {
        const newTask = await prisma.todos.create({
            data: {
                title: title,
                description: description,
                status: status,
                due_date: due_date,
            },
        });
        res.json({
            msg: "Task created successfully",
            task: newTask,
        });
    } catch (error) {
        res.status(500).json({ error: "Error creating task" });
    }
});

app.delete("/tasks/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.todos.delete({
            where: { id: id }
        });
        res.json({ msg: "Task deleted" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting task" });
    }
});
