const tabelaPacientes = document.querySelector('#tabela-pacientes')
tabelaPacientes.addEventListener('dblclick', event => {
    event.target.parentNode.classList.add('fade-out')
    setTimeout(() => {
        event.target.parentNode.remove()
    }, 500)
})

