let cadastro = document.getElementById('cadastroform')
cadastro.addEventListener('submit', clicouCadastro)

function clicouCadastro(e) {
    e.preventDefault();

    let empresa = document.getElementById('empresa').value;
    let cnpj = document.getElementById('cnpj').value;
    let responsavel = document.getElementById('responsavel').value;
    let email = document.getElementById('e-mail').value;
    let telefone = document.getElementById('telefone').value;
    let senha = document.getElementById('senha').value;
    let senhaC = document.getElementById('senhaC').value;


    console.log('Empresa:', empresa);
    console.log('CNPJ:', cnpj);
    console.log('Responsavel:', responsavel);
    console.log('Email:', email);
    console.log('Telefone:', telefone);
    console.log('Senha:', senha);
    console.log('Confirmar Senha:', senhaC);


};