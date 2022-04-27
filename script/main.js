function inserir(num){
    var saida = document.getElementById("saida").innerHTML;
    document.getElementById("saida").innerHTML = saida + num

   
}
function clean(){
    document.getElementById("saida").innerHTML = "";
}
function back(){
    var saida = document.getElementById("saida").innerHTML;
    document.getElementById("saida").innerHTML = saida.substring(0, saida.length -1);
}
function calcular(){
    var saida = document.getElementById("saida").innerHTML;
    if(saida){
        document.getElementById("saida").innerHTML = eval(saida)
    }
}