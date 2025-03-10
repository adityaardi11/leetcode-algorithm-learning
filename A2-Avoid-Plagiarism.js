const sentence_1 = "I have this book I like to read";
const sentence_2 = "She has this book I like to watch";

function findLongestCommonSubsequence(sentence_1, sentence_2, idxa = 0, idxb = 0) {

    let sentence_map = new Map;
    let sentence_1_split = sentence_1.split(" ");

    console.log(sentence_1_split[0])

    sentence_map.set("1 word sequence", sentence_1_split);

    let two_words_sequence = [];
    let three_words_sequence = [];
    let wordcount = 2;

    for (let i = 0; i < sentence_1_split.length; i++) {
        for (let j = 0; j < sentence_1_split.length; j++) {
            if (i + 1 == j) {
                console.log(i, j)
            }
        }
    }

    sentence_map.set("2 word sequence", two_words_sequence);



    console.log(sentence_map);

    return 0;
}

let max_longest = findLongestCommonSubsequence(sentence_1, sentence_2);

console.log(sentence_1);