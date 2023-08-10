// script.js

window.addEventListener("DOMContentLoaded", function () {
    const notaInput = document.getElementById("nota-input");
    const agregarBtn = document.getElementById("agregar-btn");
    const notasLista = document.getElementById("notas-lista");
  
    agregarBtn.addEventListener("click", function () {
      const notaTexto = notaInput.value.trim();
      if (notaTexto !== "") {
        const notaItem = document.createElement("li");
        notaItem.classList.add("nota-item");
  
        const notaSpan = document.createElement("span");
        notaSpan.textContent = notaTexto;
  
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("eliminar-btn");
  
        notaItem.appendChild(notaSpan);
        notaItem.appendChild(botonEliminar);
        notasLista.appendChild(notaItem);
  
        botonEliminar.addEventListener("click", function () {
          notaItem.remove();
        });
  
        notaInput.value = "";
      }
    });
  });
  