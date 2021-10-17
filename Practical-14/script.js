function add(){
    var value=document.getElementById('count');
    value.innerHTML=value.innerHTML*1+1;
    document.getElementById('subtract').disabled = false;
}
function subtract(){
    var value=document.getElementById('count');
    if(value.innerHTML<=0){
        document.getElementById('subtract').disabled = true;
        return;
    }
    value.innerHTML=value.innerHTML-1;
}