function limitarInputCpf(obj) {
    obj.value = obj.value.substring(0,11);
}


function validateForm () {
    let name = document.forms["myForm"]["fnome"].value;
    if (name == "" || name == null) { 
        alert("Name must be filled out");
        return false;
    }
    let cpf = document.forms["myForm"]["fcpf"].value;
    if (cpf == null || cpf == '') {
        alert("CPF must be filled out");
        return false;
    }
    let endereco = document.forms["myForm"]["fendereco"].value;
    if (endereco == null || endereco == '') {
        alert("Address must be filled out");
        return false;
    }
    let cidade = document.forms["myForm"]["fcidade"].value;
    if (cidade == null || cidade == '') {
        alert("City must be filled out");
        return false;
    }
    let festado = (document.querySelectorAll(".estados")[0].value)
    if (festado == 0) {
        alert("State must be filled out");
        return false;
    }
}

let estadosDoBrasil = [" ","Acre (AC)",
    "Alagoas (AL)",
    "Amapá (AP)",
    "Amazonas (AM)",
    "Bahia (BA)",
    "Ceará (CE)",
    "Distrito Federal (DF)",
    "Espírito Santo (ES)",
    "Goiás (GO)",
    "Maranhão (MA)",
    "Mato Grosso (MT)",
    "Mato Grosso do Sul (MS)",
    "Minas Gerais (MG)",
    "Pará (PA)",
    "Paraíba (PB)",
    "Paraná (PR)",
    "Pernambuco (PE)",
    "Piauí (PI)",
    "Rio de Janeiro (RJ)",
    "Rio Grande do Norte (RN)",
    "Rio Grande do Sul (RS)",
    "Rondônia (RO)",
    "Roraima (RR)",
    "Santa Catarina (SC)",
    "São Paulo (SP)",
    "Sergipe (SE)",
    "Tocantins (TO)"];
    
function inserirEstados (estadosDoBrasil) {
    const selectEstado = document.querySelector("#estado");
    for (let i = 0; i < estadosDoBrasil.length; i++) {
        let opt = document.createElement('option');
        opt.value = i;
        opt.classList.add('estados');
        opt.nome = estadosDoBrasil[i];
        opt.text = estadosDoBrasil[i]
        selectEstado.appendChild(opt);
    }
}

window.onload = function () {
    inserirEstados (estadosDoBrasil);
}

/*var data = document.querySelector('#data');
data.addEventListener('keyup', function () {
var vdata;
var dia;
var mes;
var ano;
vdata = data.value.split('/',3);
dia = parseInt(vdata[0]+vdata[1]);
mes = parseInt(vdata[3]+vdata[4]);
ano = parseInt(vdata[6]+vdata[7]+vdata[8]+vdata[9]);
    if (dia < 0 || dia > 31) {
        alert('date Invalid');
        if (mes < 0 || mes > 12) {
            alert('month Invalid');
            if (ano <= 0) {
                alert('year Invalid');
            }
        }
    } else {
        return vdata = (`${dia}/${mes}/${ano}`)
    }
})
*/

/*const button = (document.querySelector('#button')); //submit enviar e apaga os valores
button.addEventListener('click', preventDefault);

function  preventDefault () {
    */
//nao deixar submeter dados
//create 1 div apenas, e colocar os valores de todos os campos do formulário 


//input tipo reset


//https://media.prod.mdn.mozit.cloud/samples/domref/dispatchEvent.html
