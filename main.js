const frm = document.getElementById('form-id');
const atividades = [ ];

let linhas = '';

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()

})

function adicionaLinha() {
    const inputContatoNome = document.getElementById('contato-nome');
    const inputContatoNum = document.getElementById('contato-num');

    if (atividades.includes(inputContatoNome.value)) {
        alert(`O Contato ${inputContatoNome.value} já foi inserido (a)`);
    } else {
        atividades.push(inputContatoNome.value);
    
        let linha = '<tr>'
        linha += `<td> ${inputContatoNome.value} </td>`;
        linha += `<td> ${inputContatoNum.value} </td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputContatoNome.value = ' ';
    inputContatoNum.value = ' ';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}