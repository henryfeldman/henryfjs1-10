//Problem #1: Sleep in

function sleep_in(weekday,vacation){
    if(!weekday || vacation){
        return (true);
    }else{
        return (false);
    }

}

// Problem #2: Monkey Trouble

function monkey_trouble(a_smile,b_smile){
    if(a_smile && b_smile || !a_smile && !b_smile){
        return (true);
    }else{
        return (false);
    }

}

//Problem #3: String Times

function string_times(string,num){
    if(num >= 0){
    var newString = "";
        for(var i = 0; i < num; i++) {
            newString = newString + string;


        }return(newString);

    }
}

// Problem #4: Front Times

function front_times(string,num){
    if (num >= 0) {
        var newString = "";
        var front = string.substring(0,3);
        for (var i = 0; i < num; i++) {
            newString = newString + front;

        }return newString;
    }

}

// Problem #5: String bits

function string_bits(str){
       var newString = "";

  for (i = 0; i < str.length; i += 2){
      newString = newString + str[i];

  }return newString;
}

// Problem #6: Caught Speeding

function caughtSpeeding (speed, birthday){

    if (birthday == false){
        if (speed <= 60){
            return 0;
        }
        if (80 >= speed && speed > 60){

            return 1;
        }
        if (speed >= 81){

            return 2;
        }
    }else{
        if (speed <= 65){
            return 0;
        }
        if (85 >= speed && speed >= 66){

            return 1;
        }
        if (speed >= 86){

            return 2;
        }
    }


}


// Problem #7: Fizz Buzz

function fizz_buzz(num){

    if (num % 3 == 0 && num % 5 == 0){
        return "FizzBuzz";
    }
    if (num % 3 == 0){
        return "Fizz";
    }
    if (num % 5 == 0){
        return "Buzz";
    }
    if (num % 3 !== 0 && num % 5 !== 0){
        return num + "!"
    }
}


// Problem #8: Tea Party

function teaParty(numTea,numCandy){


    if (numTea < 5 || numCandy < 5){
         return 0;
    }
    if ((numTea >= 5 && numCandy >= 5) && (numTea < 2 * numCandy && numCandy < 2 * numTea)){
        return 1;
    }
    if (numTea >= 2 * numCandy || numCandy >= 2 * numTea){
        return 2;
    }
}

//Problem #9: Black Jack

function blackjack(num1,num2){
    var dif1 = 21 - num1;
    var dif2 = 21 - num2;

    if (num1 <=21 && dif1 < dif2){
        return num1;
    }
    if (num2 <= 21 && dif2 < dif1){
        return num2;
    }
    if (num1 > 21 && num2 <= 21){
        return num2;
    }
    if(num2 > 21 && num1 <= 21){
        return num1;
    }
    if (num1 > 21 && num2 > 21){
        return 0;
    }


}


// Problem #10: Lone Sum

function loneSum (a,b,c){


    var sum = a + b + c;


    if (a == b && c != a){
        var sum = c;
    }
    if (b == c && a != b){
        var sum = a;
    }
    if (a == c && b != a){
        var sum = b;
    }
    if (a == b && b== c){
        var sum = 0;
    }
    return sum;
}



//write second method
function nextOne(param1, param2) {
    return param1;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}

