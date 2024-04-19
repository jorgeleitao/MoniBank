export default function maisDezoito(campo){
    const dataNascimento = new Date(campo.value)
    validaIdade(dataNascimento);

    console.log(validaIdade(dataNascimento))

}

function validaIdade(data){
    const atual = new Date();
    const diMaior  = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return atual >= diMaior;
}
