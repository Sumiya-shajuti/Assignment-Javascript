//  1 no part (kilometerToMeter)

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;

    return meter;
}
var result = kilometerToMeter(4);
console.log(result);


// 2 no part(budgetCalculator)
function budgetCalculator(watch, phone, laptop) {
    var result = watch + phone + laptop;
    return result;
}
var sum = budgetCalculator(50, 100, 500);
console.log(sum);



//  3 no part(hotelCost)

function hotelCost() {
    var days = 12;
    var hotelCost = 0;
    if (days <= 10) {
        hotelCost = days * 100;
    }
    else if (days <= 20) {
        var firstTenDays = 10 * 100;
        var remainingDays = days - 10;
        var secondTenDays = remainingDays * 80;
        hotelCost = firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = days - 20;
        var thirdTenDays = remainingDays * 50;
        hotelCost = firstTenDays + secondTenDays + thirdTenDays;
    }
    if (days <= 0) {
        hotelCost = "Don't want to stay here? ";
    }
    return hotelCost;
}


// 4 no part(megaFriend)
function megaFriend(largestWord) {
    var largest = largestWord[0];
    for (var i = 0; i < largestWord.length; i++) {
        var element = largestWord[i];
        if (element.length > largest.length) {
            largest = element;
        }
    }
    return largest;
}
var bigName = megaFriend(["Tweety", "Hedwig", "Peafowl", "Columbidae", "Zippy", "Scruffy"]);
console.log(bigName);




