const inputFiltro = document.querySelector('#filtrar-tabela')

inputFiltro.addEventListener('input', () => {
    const dadosPacientes = document.querySelectorAll('.paciente')
    dadosPacientes.forEach(paciente => {
        const nomePaciente = paciente.querySelector('.info-nome').textContent 
        const expressao = new RegExp(inputFiltro.value, 'i')

        if(expressao.test(nomePaciente)){
            paciente.classList.remove('hide')
        }else if(inputFiltro.value.length == 0){
            paciente.classList.remove('hide')
        }else{
            paciente.classList.add('hide')
        }
    })
})