// Error handling with try-catch
console.log('=== Error Handling ===');

// Basic try-catch
try {
    let result = 10 / 0;
    console.log('Result:', result); // Infinity (not an error in JS)
    
    // This will cause an error
    let obj = null;
    console.log(obj.property); // TypeError
} catch (error) {
    console.log('Caught error:', error.message);
    console.log('Error type:', error.name);
} finally {
    console.log('This always runs');
}

// Throwing custom errors
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

try {
    console.log(divide(10, 2)); // 5
    console.log(divide(10, 0)); // Throws error
} catch (error) {
    console.log('Custom error:', error.message);
}

// Different error types
function demonstrateErrors() {
    try {
        // ReferenceError
        console.log(nonExistentVariable);
    } catch (error) {
        console.log('ReferenceError:', error.message);
    }
    
    try {
        // TypeError
        let num = 42;
        num.toUpperCase();
    } catch (error) {
        console.log('TypeError:', error.message);
    }
    
    try {
        // SyntaxError (this would be caught at parse time)
        eval('let x = ;');
    } catch (error) {
        console.log('SyntaxError:', error.message);
    }
}

demonstrateErrors();

// Async error handling
async function asyncErrorExample() {
    try {
        // Simulate async operation that fails
        await new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error('Async operation failed')), 100);
        });
    } catch (error) {
        console.log('Async error:', error.message);
    }
}

asyncErrorExample();

// Error handling with promises
Promise.reject(new Error('Promise rejected'))
    .catch(error => console.log('Promise error:', error.message));