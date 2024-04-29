export default function maisDezoito(campo){
    const dataNascimento = new Date(campo.value)
    if(!validaIdade(dataNascimento)){
        campo.setCustomValidity('O usuário não é maior de idade');
    }

}

function validaIdade(data){
    const atual = new Date();
    const diMaior  = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return atual >= diMaior;
}
