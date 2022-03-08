var temp = 0;
var operator = "";

var input = document.getElementById('input');

function add(num){
    if (num == 0) {
        if (input.value[input.value.length - 1] != '0' || input.value.length > 1) {
        input.value = input.value + num;
        }
    } else if (num == '.') {
        if (input.value[input.value.length - 1] != '.' && input.value != '') {
        input.value = input.value + num;
        }
    }else if(input.value == temp){
        input.value = '';
        input.value = input.value += num;
    }else{
        input.value = input.value += num;
    }
}

function inputNotNull(){
    if(input.value != ''){
        return true
    }else{
        return false;
    }
}

function operatorFunction(operatorp){
    if(operator == ""){
        temp = input.value;
        operator = operatorp;
        input.value = "";
    }else{
        temp = eval(temp + operator + input.value)
        input.value = temp
        operator = operatorp;
    }
}

function clearInput(){
    input.value = "";
    temp = 0;
    operator = "";
}

function reverse(){
    input.value = input.value*-1;
}

function percent(){
    input.value = input.value/100;
}

function equals(){
    if(inputNotNull()){
        input.value = eval(temp + operator + input.value);
        temp = 0;
        operator = "";
    }
}