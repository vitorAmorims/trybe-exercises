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

var data = document.querySelector('#data');

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


