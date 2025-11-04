const faqButtons = document.querySelectorAll('.faq-question')
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling
            const open = answer.style.display === 'block'
            document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none')
            if(!open) answer.style.display = 'block'
        })
    })


document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu')
    const menu = document.getElementById('menu-principal')

    
    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('ativo')
        const menuEstaAberto = menu.classList.contains('ativo')
    
        btnMenu.setAttribute('aria-expanded', menuEstaAberto)

        if (menuEstaAberto) {
            btnMenu.setAttribute('aria-label', 'Fechar Menu')
            btnMenu.innerHTML = '&times;'
        } else {
            btnMenu.setAttribute('aria-label', 'Abrir Menu')
            btnMenu.innerHTML = '&#9776;'
        }
    })
})

const inputNome = document.querySelector('#nome')
const inputAssunto = document.querySelector('#assunto')
const inputMensagem = document.querySelector('#mensagem') 
const inputEmail = document.querySelector("#email")
const errorEmail = document.querySelector("#error-email")
const form = document.querySelector("#contactForm")
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const btnEnviar = document.querySelector('.btn-enviar')

function validateNome() {
    const isValid = inputNome.value
    return isValid
}

function validateEmail() {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValid = regexEmail.test(inputEmail.value.trim())
    return isValid
}

function validateAssunto() {
    const isValid = inputAssunto.value
    return isValid
}

function validateMensagem() {
    const isValid = inputMensagem.value
    return isValid
}

inputNome.addEventListener("blur", validateNome)
inputAssunto.addEventListener("blur", validateAssunto)
inputEmail.addEventListener("blur", validateEmail)
inputMensagem.addEventListener("blur", validateMensagem)

function validateForm() {
    const isNomeValid = validateNome()
    const isEmailValid = validateEmail()
    const isAssuntoValid = validateAssunto()
    const isMensagemValid = validateMensagem()

    btnEnviar.disabled = !(isNomeValid && isAssuntoValid && isEmailValid && isMensagemValid)
}


// Mostra/oculta o erro enquanto digita
inputEmail.addEventListener("input", (event) => {
    const isValid = regexEmail.test(event.target.value.trim())
    if (isValid) {
      errorEmail.classList.remove("show")
    } else {
      errorEmail.classList.add("show")
    }
})

// Remove mensagem ao sair do campo (blur)
inputEmail.addEventListener("blur", () => {
    const value = inputEmail.value.trim()
    if (value === "" || regexEmail.test(value)) {
      errorEmail.classList.remove("show")
    }
})


form.addEventListener("submit", (event) => {
    event.preventDefault() 

    
    const isNomeValid = validateNome()
    const isEmailValid = validateEmail()
    const isAssuntoValid = validateAssunto()
    const isMensagemValid = validateMensagem()

    
    if (isNomeValid && isEmailValid && isAssuntoValid && isMensagemValid) {
        alert("Formulário enviado com sucesso!")
        const objForm = {
            name: inputNome.value.trim(),
            email: inputEmail.value.trim(),
            assunto: inputAssunto.value.trim(),
            mensagem: inputMensagem.value.trim()
        }
        console.log("Formulário enviado", objForm)
        form.reset();
        validateForm()

    } else {
        alert("Por favor, preencha todos os campos corretamente antes de enviar.");
    }
})



