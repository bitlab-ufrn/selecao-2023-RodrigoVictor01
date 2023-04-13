// Array com alguns paravalras e expressões ofensivas.
const badWords = ['pqp', 'vsf', 'fdp', 'merda', 'mongol', 'macaco', 'matar', 'lixo humano', 'se mata', 'lixo', 'gayzinho'];


// Função que permite adicionar uma palavra ou expressão para aprimorar o filtro de comentário.
function addBadWords() {

    const input = document.querySelector('#input').value;

    badWords.push(input);

    alert(`A palavra/expresão "${input}" foi adicionada à blacklist`);

    document.querySelector('#input').value = '';

}





// Função que vai verificar se o comentário possui algumas das palavras pré-definidas ou adicionadas ao array badWord.
function submit() {
    const comment = document.querySelector("#comment").value;
    const isSafe = badWords.every(word => !comment.includes(word));
    const state = isSafe ? 'aprovado' : 'não aprovado';
    const result = document.querySelector('.result').innerHTML = `Comentário ${state}!`

    console.log(`Comentário ${state}`);
}

