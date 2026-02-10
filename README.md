# BFHL API Assignment

This project is a REST API built using Node.js and Express.js for the BFHL API assignment.

## API Endpoints

### GET /bfhl
Returns operation code.

Response:
{
  "operation_code": 1
}

### POST /bfhl
Accepts an array of alphabets and numbers and separates them.

Request:
{
  "data": ["A", "B", "1", "2"]
}

Response:
{
  "is_success": true,
  "user_id": "kashish_0208",
  "email": "kashishwad213@gmail.com",
  "roll_number": "2310993857",
  "numbers": ["1", "2"],
  "alphabets": ["A", "B"]
}

## How to Run
1. npm install
2. node index.js
3. Server runs on http://localhost:3000
