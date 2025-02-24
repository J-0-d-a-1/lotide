const assertEqual = require("../assertEqual");
const tail = require("../tail");

const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
assertEqual(result.length, 2);
assertEqual(result[0], words[1]);
assertEqual(result[1], words[2]);
assertEqual(words.length, 3);

const word = ["Bootcamp"];
const result2 = tail(word);
assertEqual(result2.length, 0);
assertEqual(word.length, 1);
