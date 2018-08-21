/*
    write a conditional statement to find the sign of the product of three numbers
    Ex: 5, -7, -2
    output should be -

    Ex: -8,4,8
    output should be +
 */
    var x = 5;
    var y = -7;
    var z = -2;
    //product(x,y,z);
    function product(x,y,z){
        if((x * y * z) > 0)
        {
            console.log("+");
        } else {
            console.log("-");
        }
    }


    var nums = [0,-1,4,.6,-.5,];
    //console.log(sorting(nums));
    function sorting(arr){
        return arr.sort().reverse();
    }


    var eighty1 = [-30,90];
    var eighty2 = [40,40];
    var eighty3 = [80, 43];
    // console.log(isEighty(eighty1));
    // console.log(isEighty(eighty2));
    // console.log(isEighty(eighty3));
    function isEighty (arr) {
        if (arr[0] + arr[1] == 80 || (arr[0] == 80 || arr[1] == 80)){
            return true;
        } else {
            return false;
        }
    }


    var str1 = "Romania";
    var str2 = "Pyre";
    // console.log(py(str1));
    // console.log(py(str2));
    function py(str){
        str = str.toLowerCase();
        if(str.substring(0,2) == "py"){
            return str;
        } else {
            return "py" + str;
        }
    }


    console.log(repeat("banana"));
    console.log(repeat("ultimate"));
    console.log(repeat("more"));
    function repeat(str){
        var champion = 0;

        for(var i = 0; i<str.length; i++){
            var repeat = 0;
            for(var j =0; j<str.length; j++){
                if(i!=j && (str[i] === str[j])){
                    repeat++;
                }
            }
            if(repeat> champion){
                champion = repeat;
            }
        }
        return champion;
    }




console.log(factorial(10));
function factorial(num){
    if(num <= 1){
        return num;
    } else {
        return num * factorial(num-1);
    }
}

console.log(summation(10));
function summation(num){
    if(num === 0){
        return 0;
    } else {
        return num + factorial(num-1);
    }
}