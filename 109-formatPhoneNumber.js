function formatPhoneNumber(phoneNumberString) {
    // Remove all non-digit characters
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    
    // Check if the cleaned number has 10 digits
    if (cleaned.length !== 10) {
        return null; // or throw an error, or return the original string
    }
    
    // Format the number as (XXX) XXX-XXXX
    const areaCode = cleaned.slice(0, 3);
    const centralOfficeCode = cleaned.slice(3, 6);
    const lineNumber = cleaned.slice(6);
    
    return `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;
}

// Example usage:
console.log(formatPhoneNumber("123-456-7890")); // Output: (123) 456-7890
console.log(formatPhoneNumber("(123) 456 7890")); // Output: (123) 456-7890
console.log(formatPhoneNumber("1234567890")); // Output: (123) 456-7890
console.log(formatPhoneNumber("123.456.7890")); // Output: (123) 456-7890
console.log(formatPhoneNumber("1234567")); // Output: null