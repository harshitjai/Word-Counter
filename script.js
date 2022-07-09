let input = document.querySelector("textarea");

// updating the display after every keypress
input.addEventListener("keyup", function () {

    //get the value of the text using Regex to match valid words
    let words = input.value.match(/\b(\S+)\b/gi);

    // update and display the total number of words
    if (words) {
        document.querySelector("#wordCountUp").innerHTML = words.length;
    } else {
        document.querySelector("#wordCountUp").innerHTML = 0;
    }

    // count down and display the words left out of 100
    if (words) {
        document.querySelector("#wordCountDown").innerHTML = 100 - words.length;
    } else {
        document.querySelector("#wordCountDown").innerHTML = 100;
    }

    //test to check for null values
    if (!words) {
        return
    }

    // change color to red, if words are more than 100
    let countDown = 100 - words.length < 0

    if (countDown) {
        document.querySelector("#wordCountDown").style.color = "#db0a0a";
    } else {
        document.querySelector("#wordCountDown").style.color = "#111111";
    }
});