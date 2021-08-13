function myfunc(x){
    x.classList.toggle("change");
    opennav();
}

function opennav(){
    document.getElementById("mySidenav").style.width="250px";
    document.getElementById("main").style.marginLeft="250px";
}

function closenav(){
    document.getElementById("mySidenav").style.width="0px";
    document.getElementById("main").style.marginLeft="0px";
}