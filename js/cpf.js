export default function ehUmCPF(campo){
    const cpf = campo.value.replace(/\.|-/g, "");
    if(validaNuemrosRepetidos(cpf)|| valFirstNumber(cpf) || valSecondNumber(cpf)){
        campo.setCustomValidity('Esse CPF não é valido')
    }
    console.log(validaNuemrosRepetidos(cpf));
}

function validaNuemrosRepetidos(cpf){
    const numeroRepetidos = [
        '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
    ]

    return numeroRepetidos.includes(cpf);
}

function valFirstNumber(cpf){
    let soma = 0  
    let  multiplicador = 10;

    for (let tamanho = 0; tamanho<9; tamanho++){
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if( soma == 10 || soma == 11){
        soma = 0;
    }

    return soma != cpf[9]
}

function valSecondNumber(cpf){
    let soma = 0  
    let  multiplicador = 11;

    for (let tamanho = 0; tamanho<10; tamanho++){
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if( soma == 10 || soma == 11){
        soma = 0;
    }

    return soma != cpf[10]
}