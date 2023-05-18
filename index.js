var segundos= 0
var minutos= 0
var horas= 0
var intervalo

function start(){
    intervalo= setInterval(relogioContador, 1)
    
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
    document.getElementById('relogio').innerText = horas + ':' +minutos + ':' + segundos
}