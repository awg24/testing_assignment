/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a,b){
    "use strict";
    if(typeof a !== "number" || typeof b !== "number"){
        throw "Invalid Input";
    }
   return a > b ? a : b;
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
    "use strict";

    if(typeof a !== "number" || typeof b !== "number" || typeof c !== "number"){
        throw "Invalid Input";
    }
    var myArray = [a,b,c];
    var biggestInt = a;
    for(var i = 0; i < myArray.length; i++){
        if(myArray[i] > biggestInt){
            biggestInt = myArray[i];
        }
    }

    return biggestInt;
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    if(typeof char !== "string"){
        throw "Invalid Input";
    }
    var myVowels = "aeiou";
    return myVowels.indexOf(char) !== -1
}

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
     if(typeof phrase !== "string"){
        throw "Invalid Input";
    }
    var phraseArray = phrase.split("");
    var myVowels = ["a","e","i","o","u"];

    for(var i = 0; i < phraseArray.length; i++){
        if(myVowels.indexOf(phraseArray[i]) === -1 && phraseArray[i] !== " "){
            phraseArray.splice(i, 0, phraseArray[i]+"o")
            i++
        }
    }

    return phraseArray.join("")
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(a){
    "use strict";
    if(typeof a !== "object"){
        throw "Invalid Input";
    }
    var total = 0;

    for(var i = 0; i < a.length; i++){
        total += a[i];
    }

    return total;
}

function multiply(a){
    "use strict";
    if(typeof a !== "object"){
        throw "Invalid Input";
    }
    var total = 1;

    for(var i = 0; i < a.length; i++){
        total *= a[i];
    }

    return total;
}
// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(a){
    "use strict";
    if(typeof a !== "string"){
        throw "Invalid Input";
    }
    var myArray = a.split("");
    myArray.reverse();
    return myArray.join("");

}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    if(typeof words !== "object"){
        throw "Invalid Input";
    }

    var biggestWord = words[0];
    for(var i = 0; i < words.length; i++){
        if(words[i].length > biggestWord.length){
            biggestWord = words[i];
        }
    }

    return biggestWord;
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    if(typeof words !== "object" || typeof i !== "number"){
        throw "Invalid Input";
    }
    var myWords = [];
    for(var j = 0; j < words.length; j++){
        if(words[j].length > i){
            myWords.push(words[j]);
        }
    }

    return myWords;
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(word1){
    "use strict";
    var myObject = {};
    var myString = [];
    if(typeof word1 !== "string"){
        throw "Invalid Input";
    }
    
    for(var i = 0; i < word1.length; i++){
        if(!myObject.hasOwnProperty(word1.charAt(i))){
            myObject[word1[i]] = 1;
        } else {
            myObject[word1[i]]++;
        }
    }

    for(var letter in myObject){
        myString.push(letter+": "+myObject[letter]);
    }

    return myString.join(", ");
}
