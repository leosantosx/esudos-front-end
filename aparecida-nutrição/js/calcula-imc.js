
function calculaImc(peso, altura){
    const imc = peso / (altura* altura)
    return imc.toFixed(2)
}

function validaPeso(peso){
    if(peso > 0 && peso <= 500){
        return true
    }
    return false
}

function validaAltura(altura){
    if(altura > 0 && altura <= 3.00){
        return true
    }
    return false
}

const pacientes = document.querySelectorAll('.paciente')

pacientes.forEach(paciente => {
    const peso = paciente.querySelector('.info-peso').textContent
    const altura = paciente.querySelector('.info-altura').textContent

    const tdImc = paciente.querySelector('.info-imc')

    let pesoEhValido = validaPeso(peso)
    let alturaEhValida = validaAltura(altura)

    if(!pesoEhValido){
        tdImc.textContent = 'Peso inválido!'
        paciente.classList.add('paciente-invalido')
    }

    if(!alturaEhValida){
        tdImc.textContent = 'Altura inválida!'
        paciente.classList.add('paciente-invalido')
    }

    if(pesoEhValido && alturaEhValida){
        tdImc.textContent = calculaImc(peso, altura)
    }

});  
