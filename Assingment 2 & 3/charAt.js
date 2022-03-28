
function charAt(str, idx) {
    // one-line solution using a ternary operator (condensed if/else)
    return idx < str.length ? str[idx] : '';
}
console.log(charAt('awesome', 2))// 'e'
console.log(charAt('awesome', 12))// ''