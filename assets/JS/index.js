let login = document.getElementById('blocoform')
login.addEventListener('submit', clicou)


function clicou(login) {
    login.preventDefault();


    let email = document.getElementById('e-mail').value;
    let senha = document.getElementById('senha').value;


    console.log('E-mail:', email);
    console.log('Senha', senha);
};


