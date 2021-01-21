const spinner = document.querySelector('.spinner')

fetch('https://api-pacientes.herokuapp.com/pacientes')
.then(response => { return response.json() })
.then(pacientes => {
    pacientes.forEach(paciente => {
        const trPaciente = criaTr(paciente)
        const tbody = document.querySelector('#tabela-pacientes')
        tbody.appendChild(trPaciente)
        spinner.setAttribute('hidden', 'hidden')
    })
})
.catch(() => { console.log('Ocorreu um erro ao carregar os pacientes') })