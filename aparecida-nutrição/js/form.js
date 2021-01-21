const botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault()

    const form = document.querySelector('.form-adicionar')
    const paciente = obtemInformacoesDoForm(form)

    erros = validaPaciente(paciente)

    if(erros.length > 0){
        exibeMensagensDeErros(erros)
        return
    }

    const pacienteTr = criaTr(paciente)

    const tbody = document.querySelector('#tabela-pacientes')
    tbody.appendChild(pacienteTr)
    form.reset()

    const mensagensErro = document.querySelector('.mensagens-erro')
    mensagensErro.innerHTML = ""
})

function obtemInformacoesDoForm(form){
    paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}

function criaTr(paciente){
    const pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(criaTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(criaTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(criaTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(criaTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(criaTd(paciente.imc, 'info-imc'))

    return pacienteTr
}

function criaTd(dado, classe){
    const td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)
    return td
}

function validaPaciente(paciente){

    const erros = []

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco.");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco.");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco.");
    }else if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido!");
    }

    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco.");
    }else if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida!");
    }

    return erros
}

function exibeMensagensDeErros(erros){
    const ulErros = document.querySelector('.mensagens-erro')
    ulErros.innerHTML = ""
    erros.forEach(erro => {
        const li = document.createElement('li')
        li.textContent = erro
        ulErros.appendChild(li)
    });
}