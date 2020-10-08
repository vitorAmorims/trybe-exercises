/* freeCodeCamp
Substitua as duas atribuições por uma atribuição de desestruturação equivalente. Ele ainda deve atribuir as variáveis highTodaye highTomorrowos valores de todaye tomorrowdo HIGH_TEMPERATURESobjeto.
*/
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
    
  const {today:highToday} = HIGH_TEMPERATURES;
  const {tomorrow:highTomorrow} = HIGH_TEMPERATURES; 
  
  // Only change code above this line
