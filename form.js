    document.getElementById('userForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Coleta os dados do formul�rio
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const email = document.getElementById('email').value;
        const location = document.getElementById('location').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const hobbies = document.getElementById('hobbies').value;

        // Cria um objeto com os dados do usu�rio
        const userData = {
            name: name,
            age: age,
            email: email,
            location: location,
            gender: gender,
            hobbies: hobbies
        };

        // Recupera a lista do localStorage ou cria uma nova lista
        let userDataList = JSON.parse(localStorage.getItem('userDataList')) || [];

        // Adiciona o novo dado � lista
        userDataList.push(userData);

        // Atualiza o localStorage com a lista completa
        localStorage.setItem('userDataList', JSON.stringify(userDataList));

        // Redireciona para a p�gina de exibi��o dos dados
        window.location.href = 'result1.html';
    });

