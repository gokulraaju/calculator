let outputScreen = document.getElementById("input");

function display(num){
    outputScreen.value+=num;
}
function equal(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid");
    }
}
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}