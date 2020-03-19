var today = new Date();
var hourNow = today.getHours();
var sale;

if (hourNow > 17) {
    sale = 'Sale has esp!';
} else if (hourNow > 12) {
    sale = 'Sale ends soon!';
} else if (hourNow > 0) {
    sale = 'Sale ends this afternoon!';
} else {
    sale = 'Sale ends every afternoon!';
}

document.write('<h3>' + sale + '</h3>');