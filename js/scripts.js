document.addEventListener('DOMContentLoaded', (event) => {

  /************Código de Vestimenta************/
  var elementos = document.querySelectorAll(".panel__item-img");
  var deactivated = document.querySelectorAll(".section .deactivated");

  /*Array.from(elementos).forEach((div, index) => {
    div.addEventListener('click', () => {
        alert(`You clicked on div number ${index}`);
    });
  });

  Array.from(deactivated).forEach((div, index) => {
    div.addEventListener('click', () => {
        alert(`You clicked on div number ${index}`);
    });
  });*/

  Array.from(elementos).forEach((div, index) => {
    div.addEventListener("click", () => {
      /************Código de Vestimenta************/
      if(index == 0) { // 0 = CV left side
        elementos[index + 1].style.opacity = '0';
        elementos[index + 1].style.width = "0vw";
        deactivated[index].style.width = "40vw";
        deactivated[index + 1].style.width = "40vw";
        deactivated[index].style.opacity = '1';
        deactivated[index + 1].style.opacity = '1';
        document.getElementsByClassName("panel")[index].style.height = "auto";
        setTimeout(function() {elementos[index + 1].style.display = 'none';}, 2000); 
      }
      if (index == 1) { // 1 = CV right side
        elementos[index - 1].style.opacity = '0';
        elementos[index - 1].style.width = "0vw";
        deactivated[index + 1].style.width = "40vw";
        deactivated[index + 2].style.width = "40vw";
        deactivated[index + 1].style.opacity = '1';
        deactivated[index + 2].style.opacity = '1';
        document.getElementsByClassName("panel")[index - 1].style.height = "auto";
        setTimeout(function() {elementos[index - 1].style.display = 'none';}, 2000);
      }
      
      /************Asistencia************/
      if (index == 2) { // 1 = A left side
        deactivated[index + 2].style.width = "40vw";
        deactivated[index + 3].style.width = "40vw";
        deactivated[index + 2].style.opacity = '1';
        deactivated[index + 3].style.opacity = '1';
        document.getElementsByClassName("panel")[index].style.height = "auto";
      }
    })
  })
});

/************Código de Vestimenta************/
var elementos = document.querySelectorAll(".panel__item-img");
var deactivated = document.querySelectorAll(".section .deactivated");

function resetStylesCVL() {
    console.log("Hola mundo");
    elementos[1].style.opacity = '1';
    elementos[1].style.width = "30vw";
    deactivated[0].style.width = "0vw";
    deactivated[1].style.width = "0vw";
    deactivated[0].style.opacity = '0';
    deactivated[1].style.opacity = '0';
    document.getElementsByClassName("panel")[0].style.height = "40vh";
    setTimeout(function() {elementos[1].style.display = 'block';}, 2000);   
}

function resetStylesCVR() {
  elementos[0].style.opacity = '1';
  elementos[0].style.width = "30vw";
  deactivated[2].style.width = "0vw";
  deactivated[3].style.width = "0vw";
  deactivated[2].style.opacity = '0';
  deactivated[3].style.opacity = '0';
  document.getElementsByClassName("panel")[0].style.height = "40vh";
  setTimeout(function() {elementos[0].style.display = 'block';}, 2000);
}

/************Asistencia************/
function resetStylesA() {
  deactivated[4].style.width = "0vw";
  deactivated[5].style.width = "0vw";
  deactivated[4].style.opacity = '0';
  deactivated[5].style.opacity = '0';
  document.getElementsByClassName("panel")[0].style.height = "40vh"; 
}