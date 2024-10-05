const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");
const path = require('path');

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB)
    .then(() => console.log('DB connection was successful!'));

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Mongoose schema and model
const expenseSchema = new mongoose.Schema({
    budget_name: String,
    amount: String,
    reason: String,
});

const Expense = mongoose.model('budget', expenseSchema);

// Serve the HTML file
app.get('/', async (req, res) => {
    const expenses = await Expense.find({}); // Fetch expenses from DB
    res.render('index', { expenses }); // Render the HTML page with expenses
});

// Serve the expenses data
app.get('/home', async (req, res) => {
    const expenses = await Expense.find({});
    res.json(expenses);
});

// Add a new expense
app.post('/addNewExpenditure', async (req, res) => {
    const { budget_name, amount, reason } = req.body;
    const newExpense = new Expense({ budget_name, amount, reason });
    await newExpense.save();
    res.json({ message: 'Expense added', newExpense });
});

// Start the server
app.listen(port, () => {
    console.log('Server is running on port 3000');
});
