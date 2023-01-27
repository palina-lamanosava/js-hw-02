// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// const findLongestWord = function (string) {
//     const byWords = string.split(" ");
//     let theBiggestWord = byWords[0];

//     for (const word of byWords) {
//         if (theBiggestWord.length < word.length) {
//             theBiggestWord = word;
//         }
//     }
//     console.log(theBiggestWord);
   
// }

const findLongestWord = function (string) {
   
    if ( string ===null || !string.length ) {
        console.log('there are no words');
        return;
    }
    const byWords = string.split(" ");
    let theBiggestWord = byWords[0];

    for (const word of byWords) {
        if (theBiggestWord.length < word.length) {
            theBiggestWord = word;
        }
    }
    console.log(theBiggestWord);
   
}


console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
console.log(findLongestWord(4646)); //there are no words
console.log(findLongestWord(null)); //there are no words
