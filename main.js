/*TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).*/

const $agregar = document.querySelector('#agregar');
let numeroIntegrante = 1;

$agregar.onclick= function(){
    const nuevoInput = document.querySelector('form');
    const cuerpoNuevoInput = document.createElement('div');
    cuerpoNuevoInput.innerHTML= ('<input type="number" id="salario">');
    const nuevoParrafo = document.querySelector('form');
    const textoNuevoParrafo = document.createElement('p');
    textoNuevoParrafo.innerText = ('Integrante N°' + numeroIntegrante);
    nuevoParrafo.appendChild(textoNuevoParrafo);
    nuevoInput.appendChild(cuerpoNuevoInput);
    numeroIntegrante ++;
    

    const $calcular = document.querySelector('#calcular');

    $calcular.onclick = function (){
        const $salario = document.querySelectorAll('#salario');
        let mayorSalario = 0;
        for(let i = 0; i< $salario.length; i++){
            if( mayorSalario < $salario[i].value){
                mayorSalario = $salario[i].value;
            }
        }
        const $mayor = document.querySelector('#mayor');
        $mayor.innerText= ('El mayor salario es: ' + mayorSalario);

        let menorSalario = $salario[0].value;
        for(i=0; i<$salario.length; i++){
            if(menorSalario>$salario[i].value){
                menorSalario = $salario[i].value;
            }
        
        }
        const $menor = document.querySelector('#menor');
        $menor.innerText= ('El menor salario es: ' + menorSalario);

        let promedioAnual = 0;
        for(i=0; i<$salario.length; i++){
            promedioAnual += Number($salario[i].value);
        }
        promedioAnual= (promedioAnual/$salario.length);
        const $promedioAnual = document.querySelector('#promedio-anual');
        $promedioAnual.innerText= ('El promedio de salario anual es de: '+ promedioAnual);

        let promedioMensual = (promedioAnual/12);
        const $promedioMensual = document.querySelector('#promedio-mensual');
        $promedioMensual.innerText =('El promedio de salario mensual es de: '+ promedioMensual);

        return false
    }
    return false
}