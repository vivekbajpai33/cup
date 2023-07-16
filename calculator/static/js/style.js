function clear(){
    document.getElementById("showdata").value = "";
}

function display(value){
    document.getElementById("showdata").value += value;
}

function calculat(){
    var c =  document.getElementById("showdata").value;
    var p = eval(c);
    document.getElementById("showdata").value = p
}