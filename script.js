let input = document.querySelector("textarea");

input.addEventListener("keyup", function () {

    //get the value of text using Regex to match valid words
    let words = input.value.match(/\b(\S+)\b/gi);

    if (words) {
        document.querySelector("#wordCountUp").innerHTML = words.length;
    } else {
        document.querySelector("#wordCountUp").innerHTML = 0;
    }

    if (words) {
        document.querySelector("#wordCountDown").innerHTML = 100 - words.length;
    } else {
        document.querySelector("#wordCountDown").innerHTML = 100;
    }

    if (!words) {
        return
    }
    let countDown = 100 - words.length < 0

    if (countDown) {
        document.querySelector("#wordCountDown").style.color = "#db0a0a";
    } else {
        document.querySelector("#wordCountDown").style.color = "#111111";
    }
});
