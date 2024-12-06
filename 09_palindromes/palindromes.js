const palindromes = function([...word]) {
    const alphanu = [...'abcdefghijklmnopqrstuvwxyz1234567890'];   
    let onlyAlpha = word.filter(letter => alphanu.includes(letter.toLowerCase())).join('').toLowerCase();
    let reversed = onlyAlpha.split('').reverse().join('');
    return onlyAlpha === reversed;
}



// Do not edit below this line
module.exports = palindromes;
