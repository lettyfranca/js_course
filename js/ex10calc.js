//Ao acessar a página, a variavel calculation procurar o valor salvo no localStorage, se não houver ela entende q é vazia.
let calculation = localStorage.getItem('calculation') || '';
document.querySelector('.resultCalc').innerHTML = calculation;

function addValue(val){
    if (val != '='){
        calculation += val;
        localStorage.setItem('calculation', calculation);
        document.querySelector('.resultCalc').innerHTML = calculation;
    } else {
        calculation = eval(calculation);
        localStorage.setItem('calculation', calculation.toString());
        document.querySelector('.resultCalc').innerHTML = calculation;
    }
}

function resetCalculation(){
    localStorage.removeItem('calculation');
    calculation = '';
    document.querySelector('.resultCalc').innerHTML = calculation;
}

