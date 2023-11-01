const entrada1=document.querySelector("#entrada1")
const entrada2=document.querySelector("#entrada2")
const somar=document.querySelector("#soma")
const subtrair=document.querySelector("#subtracao")
const multiplicar=document.querySelector("#multiplicar")
const dividir=document.querySelector("#divisao")
const resultado=document.querySelector("#res")

const operacao=[
    (n1,n2)=>{
        const res=n1+n2
        return res
    },
    (n1,n2)=>{
        return n1-n2
    },
    (n1,n2)=>{
        return n1*n2
    },
    (n1,n2)=>{
        return n1/n2
    }
]

somar.addEventListener("click",()=>{
    const valores=(operacao[0](Number(entrada1.value),Number(entrada2.value)))
    resultado.value=valores

})

subtrair.addEventListener("click",()=>{
    const valores=(operacao[1](Number(entrada1.value),Number(entrada2.value)))
    resultado.value=valores
})

multiplicar.addEventListener("click",()=>{
    const valores=(operacao[2](Number(entrada1.value),Number(entrada2.value)))
    resultado.value=valores
})

dividir.addEventListener("click",()=>{
    const valores=(operacao[3](Number(entrada1.value),Number(entrada2.value)))
    resultado.value=valores
})













