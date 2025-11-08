function validate() {

    
    let num1 = document.getElementById("num1").value.trim();
    let num2 = document.getElementById("num2").value.trim();

   
    document.getElementById("num1Error").innerHTML = "";
    document.getElementById("num2Error").innerHTML = "";
    document.getElementById("result").innerHTML = "";

    let isValid = true;

    if(num1 === ""){
        document.getElementById("num1Error").innerHTML = "Please enter first number";
        isValid = false;
    }
    if(num2 === ""){
        document.getElementById("num2Error").innerHTML = "Please enter second number";
        isValid = false;
    }

    if(isValid){
        return {a: parseFloat(num1), b: parseFloat(num2)};
    }
    return null;
}

function add(){
    let val = validate();
    if(val){
        document.getElementById("result").innerHTML = "Result: " + (val.a + val.b);
    }
}

function subtract(){
    let val = validate();
    if(val){
        document.getElementById("result").innerHTML = "Result: " + (val.a - val.b);
    }
}

function multiply(){
    let val = validate();
    if(val){
        document.getElementById("result").innerHTML = "Result: " + (val.a * val.b);
    }
}

function divide(){
    let val = validate();
    if(val){
        if(val.b == 0){
            document.getElementById("result").innerHTML = "Cannot divide by Zero!";
        } else {
            document.getElementById("result").innerHTML = "Result: " + (val.a / val.b);
        }
    }
}