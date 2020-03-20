var today = new Date();
var hourNow = today.getHours();
var sale;


function sale(){

    if (hourNow > 14) {
        sale = 'Sale has expired!';
    } else if (hourNow > 11) {
        sale = 'Sale ends soon!';
    } else if (hourNow > 0) {
        sale = 'Sale ends this afternoon!';
    } else {
        sale = 'Sale ends every afternoon!';
    }

    document.write('<h3>' + sale + '</h3>');
}

function warning(){
    alert('These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure or prevent any disease.');
}

function mailinglist(){
    var email = prompt('Please join our mailing list for exclusive deals!', 'valuedcustomer@mail.com')
    var reply;

    if (email === 'null') {
        reply = 'Maybe next time.'; 
    } 
    else if (email === '') {
        reply = 'Maybe next time.'; 
    }    
    else {
        reply = 'Thank you!';
    }

alert(reply);
}

// Create a prompt asking the purchase quantity and returning an alert if the reply doesn't meet the parameters

function purchase(){

    console.log(typeof(purchaseOrder));

    var purchaseOrder = prompt('How many would you like to purchase? 1-5');
    while (purchaseOrder === '0') {
            confirm('You haven\'t made a purchase yet.');
            purchaseOrder = prompt('How many would you like to purchase? 1-5');
    }
    while (purchaseOrder >5) {
        confirm('Due to high demand, we\'re only allowing up to 5 purchases.');
        purchaseOrder = prompt('How many would you like to purchase? 1-5');
}
    for (var i = 0; i <= purchaseOrder; i++) {
            document.write('<img src="https://i2.wp.com/hospitalnews.com/wp-content/uploads/2019/07/iStock-921950686.jpg?w=360&ssl=1">');
    }
    
}