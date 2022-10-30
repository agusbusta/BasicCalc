let result = document.getElementById("inputext");

//function to display entries.
let calculate=(number)=>{
    result.value+=number;
}

//funcion to invalidate no valid entries. 
let Result=()=>{
    try{
        result.value=eval(result.value);
    }
    catch(err){
        alert("Enter a valid entry");
    }
}
//funcion to clear display
function clr(){
    result.value = " "; 
}
//function to erase one entry
function del(){
    result.value=result.value.slice(0,-1);
}

//function to make a percentage operation. 
function perc(){
    result.value=result.value / 100;
}