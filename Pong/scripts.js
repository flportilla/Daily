function FirstReverse(str) {
    const reversedWord = str.split('').reverse().join('');
    return reversedWord;

}

console.log(FirstReverse("hello"));
