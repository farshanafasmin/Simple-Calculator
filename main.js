
// display

function display(num){
    input.value +=num; //id.value=to get value
}

// clear-C

function clearAll(){
    input.value=''
}

// evaluation

function evaluateExp(){
    input.value=eval(input.value) //eval is a predefined method
}

// remove last number

function removeLast(){
    currentExp=input.value
    input.value=currentExp.slice(0,-1)

}