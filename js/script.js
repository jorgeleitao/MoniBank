import ehUmCPF from "./cpf.js"
import maisDezoito from "./idade.js"


const field = document.querySelectorAll("[required]")
// console.log(field)

field.forEach((campo) =>{
    campo.addEventListener("blur",() => verificaCampo(campo))
})

function verificaCampo(campo){
    if(campo.name == "cpf" && campo.value.length >= 11){
        ehUmCPF(campo)
    }
    if(campo.name == "aniversario" && campo.value  != ""){
        maisDezoito(campo)
    }

}