var today = new Date();
var hourNow = today.getHours();
var sale;


function sale(){

    if (hourNow > 17) {
        sale = 'Sale has expired!';
    } else if (hourNow > 12) {
        sale = 'Sale ends soon!';
    } else if (hourNow > 0) {
        sale = 'Sale ends this afternoon!';
    } else {
        sale = 'Sale ends every afternoon!';
    }

    document.write('<h3>' + sale + '</h3>');
}

alert('These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure or prevent any disease.');

var email = prompt('Please join our mailing list for exclusive deals!', 'valuedcustomer@mail.com')
var reply;

if (email === null) {
    reply = 'Maybe next time.'; 
} else if (email === '') {
    reply = 'Maybe next time.'; 
} else {
    reply = 'Thank you!';
}

alert(reply)
