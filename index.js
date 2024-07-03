document.addEventListener('DOMContentLoaded', function () {
    const calcularBtn = document.getElementById('calcular');
    const limparBtn = document.getElementById('limpar');
    const resultadoDiv = document.getElementById('resultado');
    const inputN1 = document.getElementById('n1');
    const inputN2 = document.getElementById('n2');
    const operacaoSelect = document.getElementById('operacao');

    function calcularTabela() {
        const n1 = parseInt(inputN1.value);
        const n2 = parseInt(inputN2.value);
        const operacao = operacaoSelect.value;

        resultadoDiv.innerHTML = "";

        if (!operacao) {
            resultadoDiv.innerHTML = "Opção inválida, por favor escolha uma tabuada.";
            return;
        }

        for (let i = 1; i <= n2; i++) {
            let linha;
            switch (operacao) {
                case "soma":
                    linha = `${n1} + ${i} = ${n1 + i}`;
                    break;
                case "subtracao":
                    linha = `${n1} - ${i} = ${n1 - i}`;
                    break;
                case "multiplicacao":
                    linha = `${n1} x ${i} = ${n1 * i}`;
                    break;
                case "divisao":
                    linha = `${n1} ÷ ${i} = ${(n1 / i).toFixed(2)}`;
                    break;
                default:
                    linha = "Opção inválida, escolha uma tabuada.";
            }
            resultadoDiv.innerHTML += linha + "<br>";
        }
    }

    function limparCampos() {
        inputN1.value = "";
        inputN2.value = "";
        operacaoSelect.value = "";
        resultadoDiv.innerHTML = "";
        calcularBtn.disabled = true;
    }

    function verificarInputs() {
        const n1 = inputN1.value.trim();
        const n2 = inputN2.value.trim();

        calcularBtn.disabled = !(n1 !== "" && n2 !== "");
    }

    calcularBtn.addEventListener('click', calcularTabela);
    limparBtn.addEventListener('click', limparCampos);
    inputN1.addEventListener('input', verificarInputs);
    inputN2.addEventListener('input', verificarInputs);

    // Desativar o botão de calcular inicialmente
    calcularBtn.disabled = true;
});