const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Utility function to check if a string is a number
function isNumber(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
}

// Utility function to check if a string is an alphabet
function isAlphabet(str) {
    return /^[a-zA-Z]+$/.test(str);
}

// Utility function to check if a string is a special character
function isSpecialCharacter(str) {
    return /^[^a-zA-Z0-9\s]+$/.test(str);
}

// Main endpoint
app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        
        // Validate input
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                error: "Invalid input. 'data' must be an array."
            });
        }

        // Initialize arrays and variables
        const evenNumbers = [];
        const oddNumbers = [];
        const alphabets = [];
        const specialCharacters = [];
        let sum = 0;
        let alphabetChars = [];

        // Process each element in the data array
        data.forEach(item => {
            const str = String(item);
            
            if (isNumber(str)) {
                const num = parseInt(str);
                if (num % 2 === 0) {
                    evenNumbers.push(str);
                } else {
                    oddNumbers.push(str);
                }
                sum += num;
            } else if (isAlphabet(str)) {
                alphabets.push(str.toUpperCase());
                // Extract individual characters for concatenation
                str.split('').forEach(char => {
                    alphabetChars.push(char.toLowerCase());
                });
            } else if (isSpecialCharacter(str)) {
                specialCharacters.push(str);
            }
        });

        // Create concatenated string with alternating caps in reverse order
        let concatString = '';
        for (let i = alphabetChars.length - 1; i >= 0; i--) {
            const char = alphabetChars[i];
            if (concatString.length % 2 === 0) {
                concatString += char.toUpperCase();
            } else {
                concatString += char.toLowerCase();
            }
        }

        // Create response object
        const response = {
            is_success: true,
            user_id: "snehal_patil_17091999", // Replace with actual name and date
            email: "snehal.patil@vit.ac.in", // Replace with actual email
            roll_number: "21BCE1234", // Replace with actual roll number
            odd_numbers: oddNumbers,
            even_numbers: evenNumbers,
            alphabets: alphabets,
            special_characters: specialCharacters,
            sum: String(sum),
            concat_string: concatString
        };

        res.status(200).json(response);

    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({
            is_success: false,
            error: "Internal server error occurred while processing the request."
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Bajaj Finserv API is running successfully',
        timestamp: new Date().toISOString()
    });
});

// Root endpoint
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Bajaj Finserv API',
        version: '1.0.0',
        endpoints: {
            'POST /bfhl': 'Main endpoint for processing data arrays',
            'GET /health': 'Health check endpoint',
            'GET /': 'API information'
        }
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        is_success: false,
        error: "Endpoint not found. Use POST /bfhl for the main functionality."
    });
});

// Error handling middleware
app.use((error, req, res, next) => {
    console.error('Unhandled error:', error);
    res.status(500).json({
        is_success: false,
        error: "An unexpected error occurred."
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`📡 API endpoint: http://localhost:${PORT}/bfhl`);
    console.log(`🔍 Health check: http://localhost:${PORT}/health`);
}); 