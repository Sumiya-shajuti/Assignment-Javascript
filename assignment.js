//  1 no part (kilometerToMeter)

function kilometerToMeter(Distance) {
    var meter = Distance * 1000;//To convert kilometer to meter.
    if (Distance <= 0) {
        meter = "Distance Never Negative";
    }
    return meter;
}
var result = kilometerToMeter(9); //input any number and get the result in meter
console.log(result);




// 2 no part(budgetCalculator)

function budgetCalculator(watch, phone, laptop) {
    var result = (watch * 50) + (phone * 100) + (laptop * 500);
    return result;
}
var total = budgetCalculator(1, 1, 1);//get the total amount of your budget
console.log(total);




//  3 no part(hotelCost)

function hotelCost(days) {
    var days = 50;
    var hotelCost = 0;
    if (days <= 10) {
        hotelCost = days * 100;// Renting cost of 1st ten days
    }

    else if (days <= 20) {
        var firstTenDays = 10 * 100;
        var remainingDays = days - 10;
        var secondTenDays = remainingDays * 80;
        hotelCost = firstTenDays + secondTenDays;//Renting cost of 2nd ten days
    }
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = days - 20;
        var thirdTenDays = remainingDays * 50;
        hotelCost = firstTenDays + secondTenDays + thirdTenDays;//Renting cost of 3rd ten days
    }
    if (days <= 0) {
        hotelCost = "Don't want to stay here? ";
    }
    return hotelCost;
}
var total = hotelCost(12);
console.log(total);





// 4 no part(megaFriend)
function megaFriend(largestWord) {
    var largest = largestWord[0];
    for (var i = 0; i < largestWord.length; i++) {
        var element = largestWord[i];
        if (element.length > largest.length) {
            largest = element;
        }
    }
    return largest;//Get the largest name
}
var nameSet = megaFriend(["Tweety", "Hedwig", "Peafowl", "Columbidae", "Zippy", "Scruffy"]);
console.log(nameSet)
