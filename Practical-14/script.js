function add(){
    var value=document.getElementById('count');
    value.innerHTML=value.innerHTML*1+1;
    document.getElementById('subtract').disabled = false;
    var x=document.getElementById('subtract');
    x.style.backgroundColor="rgb(68, 68, 68)"
    x.style.cursor="pointer"
}
function subtract(){
    var value=document.getElementById('count');
    if(value.innerHTML<=0){
        var x=document.getElementById('subtract')
        x.disabled = true;
        x.style.backgroundColor="rgb(68, 68, 68,0.6)"
        x.style.cursor="not-allowed"
        return;
    }
    value.innerHTML=value.innerHTML-1;
}