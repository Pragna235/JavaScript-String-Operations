const str3 = prompt("Enter the string of words to check Palindrome");
const fs = str3.replace(/\s+/g, '');
const rs = fs.split('').reverse().join('');
if (fs === rs) {
    console.log("The string is a palindrome");
} else {
    console.log("The string is not a palindrome");
    console.log("Should delete:", str3.length - rs.length, "characters to form a palindrome");
}
