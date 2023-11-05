const jsonTableElement = document.getElementById('json-table');

const getCars = async () => {
    const response = await fetch('http://localhost:5000/api/v1/veiculos', {
        method: "GET"
    })
    const data = await response.json()

    const thead = document.querySelector("table > thead > tr");
    const tbody = document.querySelector("table > tbody");
    
    while (thead.firstChild) {
        thead.removeChild(thead.firstChild);
    }
    
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    Object.keys(data['cars'][0]).forEach(attr => {
      thead.innerHTML +=
      `<th>${attr}</th>`;
    });
    data['cars'].forEach(ele =>{
      let append = "";
      append += "<tr>";
      Object.values(ele).forEach(entry =>{
        append += `<td>${entry}</td>`;
      });
      append += "</tr>";
      tbody.innerHTML += append;
    });
    

    /*const tabelaDiv = document.querySelector('.table');

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const colunas = ["Locadora", "Modelo", "Marca", "Ano", "Motor", "Portas", "Câmbio", "Ar Condicionado"];
    colunas.forEach(coluna => {
        const th = document.createElement('th');
        th.textContent = coluna;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    data['cars'].forEach(carro => {
        const row = document.createElement('tr');
        colunas.forEach(coluna => {
            console.log(carro['locadora'])
            const td = document.createElement('td');
            td.textContent = carro[coluna];
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tabelaDiv.appendChild(table);*/
}

const form = document.getElementById('form_crud');

let button_flag = 0

form.addEventListener('click', async event => {
    console.log("Entrou click")
    if (event.target.name === "create") {
        button_flag = 1
    }
    else if (event.target.name === "update") {
        button_flag  = 2
    }
    else if (event.target.name === "delete") {
        button_flag = 3
    }
    else if (event.target.name == "update_list") {
        getCars()
    }

})

form.addEventListener('submit', async event => {
    event.preventDefault();
    console.log("Entrou submit")
    const data = {
        locadora: form.elements["locadora"].value,
        modelo: form.elements["modelo"].value,
        marca: form.elements["marca"].value,
        ano: form.elements["ano"].value,
        motor: form.elements["motor"].value,
        portas: form.elements["portas"].value,
        cambio: form.elements["cambio"].value,
        ar_condicionado: form.elements["ar_condicionado"].checked,
    }
    id = form.elements["id"].value
    teste = form.elements["ano"].value


    if (button_flag === 1) {
        console.log("Botão 1 clicado");
        console.log("Requistion: ",data)
        try {
            const res = await fetch(
                'http://localhost:5000/api/v1/veiculos',
                {
                    method: 'POST',
                    body: JSON.stringify(data), // Converte o objeto para uma string JSON
                    headers: {
                        'Content-Type': 'application/json' // Especifique o tipo de conteúdo
                    }
                }
            );
        
            const resData = await res.json();
        
            console.log("Response: ", resData);
        } catch (err) {
            console.log(err.message);
        }
        
    } 
    if (button_flag === 2) {
        console.log("Botão 2 clicado");

        try {
            const res = await fetch(
                `http://localhost:5000/api/v1/veiculos/${id}`,
                {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
        
            const resData = await res.json();
        
            console.log("Response: ", resData);
        } catch (err) {
            console.log(err.message);
        }
    } 
    else if (button_flag === 3) {
        console.log("Botão 3 clicado");

        try {
            const res = await fetch(
                `http://localhost:5000/api/v1/veiculos/${id}`,
                {
                    method: 'DELETE'
                });
        
            const resData = await res.json();
        
            console.log(resData);
        } catch (err) {
            console.log(err.message);
        }
    } 
    button_flag = 0
    //getCars()
});
