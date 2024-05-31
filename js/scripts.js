document.addEventListener('DOMContentLoaded', (event) => {

  var elementos = document.querySelectorAll(".panel__item-img");
  var deactivated = document.querySelectorAll(".section .deactivated");

  Array.from(elementos).forEach((div, index) => {
    div.addEventListener("click", () => {
      /************Código de Vestimenta************/
      if(index == 0) { // 0 = CV left side
        elementos[index + 1].style.opacity = '0'; //CV right side
        elementos[index + 1].style.width = "0vw"; //CV right side
        deactivated[index].style.width = "55vw"; //Title
        deactivated[index].style.opacity = '1'; //Title
        setTimeout(function() {elementos[index + 1].style.display = 'none';}, 1000); 
      }
      if (index == 1) { // 1 = CV right side
        elementos[index - 1].style.opacity = '0';
        elementos[index - 1].style.width = "0vw";
        deactivated[index].style.width = "55vw";
        deactivated[index].style.opacity = '1';
        setTimeout(function() {elementos[index - 1].style.display = 'none';}, 1000);
      }
      
      /************Asistencia************/
      if (index == 2) { 
        deactivated[index].style.width = "55vw";
        deactivated[index].style.opacity = '1';
      }
      /************Lugar************/
      if (index == 3) {
        elementos[index + 1].style.opacity = '0';
        elementos[index + 1].style.width = "0vw";
        deactivated[index].style.width = "55vw";
        deactivated[index].style.opacity = '1';
        setTimeout(function() {elementos[index + 1].style.display = 'none';}, 1000); 
      }
    })
  })
});

/************Código de Vestimenta************/
var elementos = document.querySelectorAll(".panel__item-img");
var deactivated = document.querySelectorAll(".section .deactivated");

function resetStylesCVL() {
    elementos[1].style.display = 'block';
    elementos[1].style.opacity = '1';
    elementos[1].style.width = "30vw";
    deactivated[0].style.width = "0vw";
    deactivated[0].style.opacity = '0';
}

function resetStylesCVR() {
  elementos[0].style.display = 'block';
  elementos[0].style.opacity = '1';
  elementos[0].style.width = "30vw";
  deactivated[1].style.width = "0vw";
  deactivated[1].style.opacity = '0';
}

/************Asistencia************/
function resetStylesA() {
  deactivated[2].style.width = "0vw";
  deactivated[2].style.opacity = '0';
}

/************Lugar************/
function resetStylesL() {
  elementos[4].style.display = 'block';
  elementos[4].style.opacity = '1';
  elementos[4].style.width = "30vw";
  deactivated[3].style.width = "0vw";
  deactivated[3].style.opacity = '0';
}