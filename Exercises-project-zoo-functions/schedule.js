/*
10- Implemente a função schedule:
Sem parâmetros, retorna um cronograma legível para humanos
Se um único dia for passado, retorna somente este dia em um formato legível para humanos
*/

const hours = {
    'Tuesday': { open: 8, close: 18 },
    'Wednesday': { open: 8, close: 18 },
    'Thursday': { open: 10, close: 20 },
    'Friday': { open: 10, close: 20 },
    'Saturday': { open: 8, close: 22 },
    'Sunday': { open: 8, close: 20 },
    'Monday': { open: 0, close: 0 }
}

// TDD está pedindo {} de retorno

function schedule(dayName) {
    const workingDays = Object.assign({}, hours); //passei um clone para workingDays;
    //Arrow function, aqui eu precisei de ajuda. Porque o CC, reclamava que a função de seta, não poderia atribuir....
    const openingHours = (value => (workingDays[value] = `Open from ${hours[value].open}am until ${hours[value].close -12}pm`));
    //iterar sobre o objeto e atribuir valor 'Closed' para chave Monday
    Object.keys(WorkingDays).forEach(openingHours);
    WorkingDays.Monday = 'Closed';
    //atender os outros requisitos, relacionados param Dayname
    if (!dayName) return workingDays; //retorna lista completa de dias e horários
    return {
        [dayName]: workingDays[dayName] //somente o dia passado como param da função e seu value
    }
    return result;
}