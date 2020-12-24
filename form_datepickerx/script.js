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
    let estado = document.forms["myForm"]["festado"].value;
    if (estado == 0) {
        alert("State must be filled out");
        return false;
    }

    let resumoCurriculum = document.forms["myForm"]["fresumoCurriculum"].value;
    if (resumoCurriculum == null || resumoCurriculum == '') {
        alert("Resume curriculum must be filled");
        return false;
    }
    let cargo = document.forms["myForm"]["fcargo"].value;
    if (cargo == null || cargo == '') {
        alert("Job must be filled");
        return false;
    }
    let descricaoCargo = document.forms["myForm"]["fdescricaoCargo"].value;
    if (descricaoCargo == null || descricaoCargo == '') {
        alert("Job description must be filled");
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

function  preventDefault () {
    let formulario = document.forms["myForm"];
    let div = document.createElement('div');
    div.classList.add(form-group);
    let form = document.getElementsByName("form");
    for (let index = 0; index < formulario.length; index++) {
        div.innerHTML += formulario[index].value
    }
    form.appendChild(div);
} 


$('.datepicker').datepicker({
    language: "pt-BR"
});

var datepicker = $.fn.datepicker.noConflict(); // return $.fn.datepicker to previously assigned value
$.fn.bootstrapDP = datepicker;  

window.onload = function () {
    inserirEstados (estadosDoBrasil);
}


