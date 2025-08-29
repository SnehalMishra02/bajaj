# Bajaj Finserv REST API - VIT Full Stack Question Paper

A REST API built with Node.js that processes arrays and returns categorized data according to the VIT Full Stack Question Paper requirements.

**Latest Update**: Fixed Vercel deployment issues - Updated package.json and vercel.json for better compatibility.

## 🚀 Features

- **POST /bfhl** endpoint that processes input arrays
- Categorizes data into even numbers, odd numbers, alphabets, and special characters
- Calculates sum of numbers
- Creates concatenated string with alternating caps in reverse order
- Comprehensive error handling and validation
- Security middleware (Helmet, CORS)

## 📋 Requirements Met

✅ Status (`is_success`)  
✅ User ID (`user_id`)  
✅ Email ID (`email`)  
✅ College Roll Number (`roll_number`)  
✅ Array for even numbers (`even_numbers`)  
✅ Array for odd numbers (`odd_numbers`)  
✅ Array for alphabets, converted to uppercase (`alphabets`)  
✅ Array for special characters (`special_characters`)  
✅ Sum of numbers (`sum`)  
✅ Concatenation of alphabetical characters in reverse order with alternating caps (`concat_string`)  

## 🛠️ Tech Stack

- **Backend**: Node.js with Express.js
- **Security**: Helmet, CORS
- **Hosting**: Ready for Vercel/Railway/Render deployment

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd bajaj-finserv
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

The server will start on port 3000 (or the port specified in the PORT environment variable).

## 🌐 API Endpoints

### POST /bfhl
Main endpoint for processing data arrays.

**Request Body:**
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "snehal_patil_17091999",
  "email": "snehal.patil@vit.ac.in",
  "roll_number": "21BCE1234",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

### GET /health
Health check endpoint to verify API status.

### GET /
API information and available endpoints.

## 📝 Examples

### Example A
**Input:** `["a", "1", "334", "4", "R", "$"]`  
**Output:** Numbers categorized, sum calculated, alphabets converted to uppercase, special characters identified, concatenated string created.

### Example B
**Input:** `["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]`  
**Output:** Even/odd numbers separated, alphabets processed, special characters identified, sum calculated.

### Example C
**Input:** `["A", "ABcD", "DOE"]`  
**Output:** Only alphabets processed, no numbers or special characters.

## 🚀 Deployment

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Railway
1. Connect your GitHub repository
2. Railway will automatically deploy

### Render
1. Create a new Web Service
2. Connect your GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`

## 🔧 Configuration

Update the following fields in `server.js` with your actual information:
- `user_id`: Your full name in lowercase + current date (e.g., "john_doe_17091999")
- `email`: Your actual email address
- `roll_number`: Your actual college roll number

## 🧪 Testing

Test the API using tools like:
- **Postman**
- **cURL**
- **Thunder Client (VS Code extension)**

**cURL Example:**
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a", "1", "334", "4", "R", "$"]}'
```

## 📁 Project Structure

```
bajaj-finserv/
├── server.js          # Main server file
├── package.json       # Dependencies and scripts
├── README.md          # This file
└── .gitignore         # Git ignore file
```

## 🚨 Error Handling

The API includes comprehensive error handling:
- Input validation
- Try-catch blocks
- Proper HTTP status codes
- Descriptive error messages

## 🔒 Security Features

- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing
- Input validation and sanitization
- Error message sanitization

## 📊 Status Codes

- `200`: Success
- `400`: Bad Request (invalid input)
- `404`: Endpoint not found
- `500`: Internal Server Error

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For any questions or issues, please create an issue in the GitHub repository.

---

**Note**: Remember to update the personal information (user_id, email, roll_number) in the `server.js` file before deployment! 