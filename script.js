let estadosDoBrasil = ["Acre (AC)",
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

function inserirEstados () {
const selectEstado = document.querySelector("#estado");
    for (let i = 0; i < estadosDoBrasil.length; i++) {
        let opt = document.createElement('option');
        opt.value = i;
        opt.text = estadosDoBrasil[i]
        selectEstado.appendChild(opt);
    }
    
}
inserirEstados ();

var dateControl = document.querySelector('#data');
console.log(dateControl);