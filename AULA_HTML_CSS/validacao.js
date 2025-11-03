import ehMaiorDeIdade from "./valida_idade.js";

const campos = document.querySelectorAll("[required]");
const botao = document.querySelector("form");

campos.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
});

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
];

const mensagens = {
    txtNome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    txtSenha: {
        valueMissing: "O campo de senha não pode estar vazio.",
    },
    txtEmail: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    txtData: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    radSexo: {
        valueMissing: "O campo de sexo não pode estar vazio.",
    },
    radCor: {
        valueMissing: "O campo de raça não pode estar vazio.",
    },
    chkCursos: {
        valueMissing: "Você deve escolher pelo menos um curso.",
    }
};

function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');

    if (campo.name === "txtData" && campo.value !== "") {
        ehMaiorDeIdade(campo);
    }

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            if (mensagens[campo.name] && mensagens[campo.name][erro]) {
                mensagem = mensagens[campo.name][erro];
            } else {
                mensagem = "Campo inválido.";
            }
        }
    });

    let mensagemErro = null;
    let elementoAtual = campo.nextElementSibling;

    while (elementoAtual) {
        if (elementoAtual.classList && elementoAtual.classList.contains('mensagem_erro')) {
            mensagemErro = elementoAtual;
            break;
        }
        elementoAtual = elementoAtual.nextElementSibling;
    }

    const validadorDeInput = campo.checkValidity();

    if (!validadorDeInput) {
        if (mensagemErro) mensagemErro.textContent = mensagem;
    } else {
        if (mensagemErro) mensagemErro.textContent = "";
    }
}


botao.addEventListener("submit", (event) => {
    let valido = true;

    const radiosSexo = document.querySelectorAll("input[name='radSexo']");
    const algumSexoSelecionado = Array.from(radiosSexo).some(r => r.checked);
    if (!algumSexoSelecionado) {
        valido = false;
        const mensagemErro = radiosSexo[radiosSexo.length - 1].parentNode.querySelector('.mensagem_erro');
        if (mensagemErro) mensagemErro.textContent = mensagens.radSexo.valueMissing;
    }

    radiosSexo.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    });

    const radiosCor = document.querySelectorAll("input[name='radCor']");
    const algumaCorSelecionada = Array.from(radiosCor).some(r => r.checked);
    if (!algumaCorSelecionada) {
        valido = false;
        const mensagemErro = radiosCor[radiosCor.length - 1].parentNode.querySelector('.mensagem_erro');
        if (mensagemErro) mensagemErro.textContent = mensagens.radCor.valueMissing;
    }

    radiosCor.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    });

    const checksCursos = document.querySelectorAll("input[name='chkCursos']");
    const algumCursoSelecionado = Array.from(checksCursos).some(c => c.checked);
    if (!algumCursoSelecionado) {
        valido = false;
        const mensagemErro = checksCursos[checksCursos.length - 1].parentNode.querySelector('.mensagem_erro');
        if (mensagemErro) mensagemErro.textContent = mensagens.chkCursos.valueMissing;
    }

    checksCursos.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    });

    if (!valido) {
        event.preventDefault();
    }
});
