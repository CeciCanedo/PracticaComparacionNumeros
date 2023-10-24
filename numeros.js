document.getElementById('btnAnalizar').addEventListener('click', function() {

    const num1= parseInt(document.getElementById('num1').value);
    const num2= parseInt(document.getElementById('num2').value);
    const num3= parseInt(document.getElementById('num3').value);

    const resultadoElement=document.getElementById('resultadoMayorMenor');
    const menorMayorElement=document.getElementById('resultadoMenorMayor')

    if(num1> num2 && num2>num3){
        resultadoElement.textContent=(num1+ ", " + num2+ ", " +num3);
        menorMayorElement.textContent=(num3+ ", " + num2+ ", " +num1);
    } if(num2>num1 && num1>num3 ){
        resultadoElement.textContent=(num2 + ", "+ num1 + ", " + num3);
        menorMayorElement.textContent=(num3 + ", "+ num2 + ", " + num1);
    } if (num3>num2 && num2>num1) {
        resultadoElement.textContent=(num3 + ", " + num2 + ", " + num1);
        menorMayorElement.textContent=(num1 + ", " + num2 + ", " + num3);
    } if (num1>num3 && num3>num2) {
        resultadoElement.textContent=(num1 + ", " + num3 + ", " + num2);
        menorMayorElement.textContent=(num2 + ", " + num3 + ", " + num1);
    } if (num2>num3 && num3>num1) {
        resultadoElement.textContent=(num2 + ", " + num3 + ", " + num1);
        menorMayorElement.textContent=(num1 + ", " + num3 + ", " + num2);
    } if (num3>num1 && num1>num2){
        resultadoElement.textContent=(num3 + ", " + num1 + ", " + num2);
        menorMayorElement.textContent=(num2 + ", " + num1 + ", " + num3);
    } if (num1==num2 && num1>num3){
        resultadoElement.textContent= (num1+ ", " + num2+ ", " + num3)
        menorMayorElement.textContent=(num3+ ", " + num2+ ", " + num1)
    } if (num1==num2 && num3>num1){
        resultadoElement.textContent= (num1+ ", " + num2+ ", " + num3)
        menorMayorElement.textContent=(num3+ ", " + num2+ ", " + num1)
    } if (num1==num3 && num1>num2) {
        resultadoElement.textContent= (num1+ ", " + num3+ ", " + num2)
        menorMayorElement.textContent= (num2+ ", " + num3+ ", " + num1)
    } if (num1==num3 && num2>num1) {
        resultadoElement.textContent= (num1+ ", " + num3+ ", " + num2)
        menorMayorElement.textContent= (num2+ ", " + num3+ ", " + num1)
    } if (num2==num3 && num2>num1) {
        resultadoElement.textContent= (num2+ ", " + num3+ ", " + num1)
        menorMayorElement.textContent= (num1+ ", " + num3+ ", " + num2)
    } if (num2==num3 && num1>num2) {
        resultadoElement.textContent= (num2+ ", " + num3+ ", " + num1)
        menorMayorElement.textContent= (num1+ ", " + num3+ ", " + num2)
    } if (num1==num2 && num2==num3){
        resultadoElement.textContent=(num1 +"," +num2 + "," + num3)
        menorMayorElement.textContent=(num3 +"," +num2 + "," + num1)
    }
});
