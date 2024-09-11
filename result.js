    // Recuperando os dados do Local Storage como uma lista
    let userDataList = JSON.parse(localStorage.getItem('userDataList')) || [];

    // Função para exibir os dados na tabela
    function displayUserData(dataList) {
        const tableBody = document.getElementById('userDataTable');
        tableBody.innerHTML = '';  // Limpa a tabela

        // Popula a tabela com os dados armazenados
        dataList.forEach((data, index) => {
            const tableRow = `
                <tr>
                    <td>${data.name}</td>
                    <td>${data.age}</td>
                    <td>${data.email}</td>
                    <td>${data.location}</td>
                    <td>${data.gender}</td>
                    <td>${data.hobbies}</td>
                    <td>
                        <button onclick="editData(${index})">Editar</button> 
                        <button onclick="deleteData(${index})">Excluir</button>
                    </td>
                </tr>
            `;
            tableBody.innerHTML += tableRow;
        });
    }

    // Exibe os dados ao carregar a página
    displayUserData(userDataList);

    // Barra de busca
    document.getElementById('searchBar').addEventListener('input', function (event) {
        const searchTerm = event.target.value.toLowerCase();
        const filteredData = userDataList.filter(data => 
            data.name.toLowerCase().includes(searchTerm) ||
            data.email.toLowerCase().includes(searchTerm) ||
            data.location.toLowerCase().includes(searchTerm)
        );

        displayUserData(filteredData);
    });

    // Função para editar os dados
    function editData(index) {
        const userData = userDataList[index];

        const newName = prompt("Digite o novo nome:", userData.name);
        const newAge = prompt("Digite a nova idade:", userData.age);
        const newEmail = prompt("Digite o novo email:", userData.email);
        const newLocation = prompt("Digite o novo local de residência:", userData.location);
        const newGender = prompt("Digite o novo sexo (Masculino/Feminino):", userData.gender);
        const newHobbies = prompt("Digite os novos hobbies:", userData.hobbies);

        if (newName && newAge && newEmail && newLocation && newGender && newHobbies) {
            // Atualiza os dados na lista
            userDataList[index] = {
                name: newName,
                age: newAge,
                email: newEmail,
                location: newLocation,
                gender: newGender,
                hobbies: newHobbies
            };
            localStorage.setItem('userDataList', JSON.stringify(userDataList));

            // Reexibe os dados atualizados
            displayUserData(userDataList);
            alert("Dados atualizados com sucesso!");
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    }

    // Função para excluir os dados
    function deleteData(index) {
        if (confirm("Tem certeza de que deseja excluir os dados?")) {
            // Remove o dado da lista
            userDataList.splice(index, 1);
            localStorage.setItem('userDataList', JSON.stringify(userDataList));

            // Atualiza a exibição
            displayUserData(userDataList);
            alert("Dados excluídos com sucesso!");
        }
    }
