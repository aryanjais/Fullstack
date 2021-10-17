function add(){
    var value=document.getElementById('count');
    value.innerHTML=value.innerHTML*1+1;
}
function subtract(){
    var value=document.getElementById('count');
    if(value.innerHTML<=0){
    value.innerHTML=0;
    return;
    }
    value.innerHTML=value.innerHTML-1;
}