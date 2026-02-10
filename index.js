const express = require("express");
const app = express();

app.use(express.json());

app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data;

    let numbers = [];
    let alphabets = [];

    data.forEach(item => {
      if (!isNaN(item)) numbers.push(item);
      else alphabets.push(item);
    });

    res.json({
      is_success: true,
      user_id: "kashish_0208",
      email: "kashishwad213@gmail.com",
      roll_number: "2310993857",
      numbers,
      alphabets
    });

  } catch {
    res.status(400).json({ is_success: false });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
