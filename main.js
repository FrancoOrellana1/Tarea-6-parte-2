/*TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).*/

const $agregar = document.querySelector('#agregar');
let numeroIntegrante = 1;

$agregar.onclick= function(){
    
    agregarElementos();

    const $calcular = document.querySelector('#calcular');

    $calcular.onclick = function (){
        const $salario = document.querySelectorAll('.salario');
        const arraySalarios = [];

        for(let i=0; i<$salario.length; i++){
            if($salario[i].value !== ''){
                arraySalarios.push($salario[i].value)
            }
        
        }

        mayorSalario(arraySalarios);
        menorSalario(arraySalarios);
        promedios(arraySalarios);


        return false
    }
    return false
}


function agregarElementos(){
    const nuevoInput = document.querySelector('form');
    const cuerpoNuevoInput = document.createElement('div');
    cuerpoNuevoInput.innerHTML= ('<input type="number" class="salario">');
    const nuevoParrafo = document.querySelector('form');
    const textoNuevoParrafo = document.createElement('p');
    textoNuevoParrafo.innerText = ('Integrante N°' + numeroIntegrante);
    nuevoParrafo.appendChild(textoNuevoParrafo);
    nuevoInput.appendChild(cuerpoNuevoInput);
    numeroIntegrante ++;

    return false;
}

function mayorSalario (a){
    let mayorSalario = 0;
    for(i = 0; i< a.length; i++){
        if( mayorSalario < a[i]){
                mayorSalario = a[i];
        }
    }
    const $mayor = document.querySelector('#mayor');
    $mayor.innerText= ('El mayor salario es: ' + mayorSalario);
}

function menorSalario (a){
    let menorSalario = a[0];
    for(i=0; i<a.length; i++){
        if(menorSalario>a[i]){
                menorSalario = a[i];
        }
        
    }
    const $menor = document.querySelector('#menor');
    $menor.innerText= ('El menor salario es: ' + menorSalario);
}

function promedios (a){
    let promedioAnual = 0;
    for(i=0; i<a.length; i++){
        promedioAnual += Number(a[i]);
    }
    console.log(promedioAnual);
    promedioAnual= (promedioAnual/a.length);
    const $promedioAnual = document.querySelector('#promedio-anual');
    $promedioAnual.innerText= ('El promedio de salario anual es de: '+ promedioAnual);

    let promedioMensual = (promedioAnual/12);
    const $promedioMensual = document.querySelector('#promedio-mensual');
    $promedioMensual.innerText =('El promedio de salario mensual es de: '+ promedioMensual);
}