//Ao acessar a página, a variavel calculation procurar o valor salvo no localStorage, se não houver ela entende q é vazia.
let calculation = localStorage.getItem('calculation') || '';

function addValue(val){
    if (val != '='){
        calculation += val;
        localStorage.setItem('calculation', calculation);
        console.log(calculation);
    } else {
        calculation = eval(calculation);
        localStorage.setItem('calculation', calculation.toString());
        console.log(calculation);
    }
}

function resetCalculation(){
    localStorage.removeItem('calculation');
    calculation = '';
}

