const txtOp1 = document.getElementById("op1")
const txtoperacion = document.getElementById("operacion")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', calcular)

function calcular(){
    const operacion = txtoperacion.value 

    if(operacion == "+" || operacion == "-" ||  operacion == "*" || operacion == "/" ){
        pResultado.innerText = "Calculo Posible"
    }else{
        pResultado.innerText = "Calculo Imposible"
    }
}

// voy en el minuto 1:03:52 