const CEP = document.getElementById('CEP');

CEP.addEventListener('blur', (e)=>{
    let Cep = document.getElementById('CEP').value;
    let search = CEP.value.replace("-", "")
    fetch(`https://viacep.com.br/ws/${search}/json/`).then((response)=>{
        response.json().then(data =>{
            console.log(data)

            document.getElementById("logradouro").value = data.logradouro;
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("localidade").value = data.localidade;
            document.getElementById("uf").value = data.uf;
            document.getElementById("DDD").value = data.ddd;

        })
    })
})