let userName = prompt("Assalomu Aleykum Ismingizni Kiriting");
while (!isNaN(userName) || userName == "") {
    userName = prompt("Assalomu Aleykum Ismingizni Kiriting");
}
let currentYear = 2022;
let userYear = +prompt(userName + " Tug'ilgan Yilingizni Kiriting");
while (isNaN(userYear) || userYear == "" || userYear >= 2010) {
    userYear = +prompt(userName + " Tug'ilgan Yilingizi Kiriting")
}

function calcAge(a, b) {
    let age = a - b;
    return age;
}
alert(userName + " Siz " + calcAge(currentYear, userYear) + " Yoshda Da Ekansiz !!!");
