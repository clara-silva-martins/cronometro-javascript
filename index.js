var segundos= 0
var minutos= 0
var horas= 0
var intervalo


function doisDigitos(digito){
    if(digito <10){
        return ('0'+digito)
    }else{
        return(digito)
    }
}

function start(){
    relogioContador()
    intervalo= setInterval(relogioContador, 1000)
    
}

function pause(){
    clearInterval(intervalo)

}

function stoper (){
    clearInterval(intervalo)
    segundos= 0
    minutos= 0
    horas=0
    document.getElementById('relogio').innerText = '00:00:00'


}

function relogioContador(){
    segundos++
    if(segundos==60){
        minutos++
        segundos=0
    } if(minutos==60){
        horas++
        minutos=0
        segundos=0
    }
    document.getElementById('relogio').innerText = doisDigitos(horas) + ':' + doisDigitos(minutos)+ ':' + doisDigitos(segundos)
}