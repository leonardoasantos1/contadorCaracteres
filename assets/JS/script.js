const textoContador = document.getElementById('texto');
const resultado = document.getElementById('res');

    textoContador.addEventListener("input", function(){
    resultado.innerHTML =  `<span id="res"><strong>${textoContador.value.length}</strong></span>`;
    });

    function limpar(){
        const textoContador = document.getElementById('texto');
        textoContador.value = '';

        const resultado = document.querySelector('#res');
        resultado.innerHTML = '<span id="res"><strong>0</strong></span>';
    }