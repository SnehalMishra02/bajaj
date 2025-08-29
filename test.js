// Test file to demonstrate the API functionality
// Run this after starting the server

const testCases = [
    {
        name: "Example A",
        data: ["a", "1", "334", "4", "R", "$"],
        expected: {
            odd_numbers: ["1"],
            even_numbers: ["334", "4"],
            alphabets: ["A", "R"],
            special_characters: ["$"],
            sum: "339",
            concat_string: "Ra"
        }
    },
    {
        name: "Example B",
        data: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"],
        expected: {
            odd_numbers: ["5"],
            even_numbers: ["2", "4", "92"],
            alphabets: ["A", "Y", "B"],
            special_characters: ["&", "-", "*"],
            sum: "103",
            concat_string: "ByA"
        }
    },
    {
        name: "Example C",
        data: ["A", "ABcD", "DOE"],
        expected: {
            odd_numbers: [],
            even_numbers: [],
            alphabets: ["A", "ABCD", "DOE"],
            special_characters: [],
            sum: "0",
            concat_string: "EODCBA"
        }
    }
];

// Function to test the API
async function testAPI() {
    const baseURL = 'http://localhost:3000';
    
    console.log('🧪 Testing Bajaj Finserv API...\n');
    
    for (const testCase of testCases) {
        console.log(`📝 Testing: ${testCase.name}`);
        console.log(`Input: [${testCase.data.join(', ')}]`);
        
        try {
            const response = await fetch(`${baseURL}/bfhl`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: testCase.data })
            });
            
            const result = await response.json();
            
            if (response.ok && result.is_success) {
                console.log('✅ Success!');
                console.log(`Response:`, JSON.stringify(result, null, 2));
                
                // Validate key fields
                const isValid = 
                    result.odd_numbers.length === testCase.expected.odd_numbers.length &&
                    result.even_numbers.length === testCase.expected.even_numbers.length &&
                    result.alphabets.length === testCase.expected.alphabets.length &&
                    result.special_characters.length === testCase.expected.special_characters.length;
                
                console.log(`Validation: ${isValid ? '✅ PASSED' : '❌ FAILED'}\n`);
            } else {
                console.log('❌ Failed!');
                console.log(`Error:`, result.error || 'Unknown error');
                console.log(`Status: ${response.status}\n`);
            }
        } catch (error) {
            console.log('❌ Error:', error.message, '\n');
        }
    }
    
    // Test health endpoint
    try {
        const healthResponse = await fetch(`${baseURL}/health`);
        const healthResult = await healthResponse.json();
        console.log('🏥 Health Check:', healthResult.status === 'OK' ? '✅ PASSED' : '❌ FAILED');
    } catch (error) {
        console.log('🏥 Health Check: ❌ FAILED -', error.message);
    }
}

// Run tests if this file is executed directly
if (typeof window === 'undefined') {
    // Node.js environment
    const fetch = require('node-fetch');
    testAPI();
} else {
    // Browser environment
    console.log('🌐 Running in browser - use the test function manually');
    window.testAPI = testAPI;
}

console.log(`
🚀 To test the API:

1. Start the server: npm start
2. Run tests: node test.js
3. Or test manually with Postman/cURL

Example cURL command:
curl -X POST http://localhost:3000/bfhl \\
  -H "Content-Type: application/json" \\
  -d '{"data": ["a", "1", "334", "4", "R", "$"]}'
`); 