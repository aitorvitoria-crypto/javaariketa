// 1. Testu-Aldatzailea
function aldatuTestua() {  
    const parrafo = document.getElementById("testu_aldagarria");
    parrafo.textContent = "Textua aldatuta";

}

// 2. Kolore Txandakatzailea (Estiloak JS-tik aplikatuz)
function aldatuKolorea() {
    const parrafo = document.getElementById("kolore_aldagarria");
    parrafo.style.color = "red";
}



// 3. Elementuen Ezkutagailua (display propietatea aldatuz)
function txandakatuEzkutatzea() {
 const parrafo = document.getElementById("ezkutatu_hau");
    
    // Si está visible, lo ocultamos; si está oculto, lo mostramos
    if (parrafo.style.display === "none") {
        parrafo.style.display = "block"; // o "inline" si es texto corto
    } else {
        parrafo.style.display = "none";
    }
}

// 4. Batuketa Kalkulagailua
function batuketaEgin() {
 const numero1 = parseFloat(document.getElementById("zenbaki1").value);
    const numero2 = parseFloat(document.getElementById("zenbaki2").value);
    
    // Calculamos la suma
    const suma = numero1 + numero2;
    
    // Mostramos el resultado
    document.getElementById("emaitza4").textContent = suma;
}

// 5. Testu-Gehitzailea (Elementu berriak sortzea)
function gehituElementua() {
  const valor = document.getElementById("elementu_berria").value;

    // Validamos que no esté vacío
    if (valor.trim() !== "") {
        // Creamos un nuevo elemento <li>
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = valor;

        // Lo agregamos a la lista
        document.getElementById("zerrenda_dinamikoa").appendChild(nuevoElemento);

        // Limpiamos el input
        document.getElementById("elementu_berria").value = "";
    } else {
        alert("Escribe algo antes de agregar.");
    }
}

// 6. Kontagailua (aldagai globalak erabiliz)
function kontatuKlik() {
    klikKopurua = klikKopurua + 1; // Edo klikKopurua ++
    document.getElementById("kontagailu_emaitza").textContent = klikKopurua;

}

// 7. Zenbaki Asmatzearen Jokoa
// Oharra: zenbakiSekretua HTML amaierako <script> blokean hasieratuta dago
function konprobatuZenbakia() {
 // Número aleatorio entre 1 y 5
    const zenbakiaSecreto = Math.floor(Math.random() * 5) + 1;

    // Número que puso el usuario
    const usuario = parseInt(document.getElementById("asmatutako_zenbakia").value);

    // Validar input
    if (isNaN(usuario) || usuario < 1 || usuario > 5) {
        document.getElementById("joko_emaitza").textContent = "Mesedez, idatzi 1 eta 5 arteko zenbaki bat.";
        return;
    }

    // Comprobar si acierta
    if (usuario === zenbakiaSecreto) {
        document.getElementById("joko_emaitza").textContent = `Oso ondo! Asmatze zenuen: ${zenbakiaSecreto}.`;
    } else {
        document.getElementById("joko_emaitza").textContent = `Ez da zuzena. Zenbakia zen: ${zenbakiaSecreto}. Saiatu berriro!`;
    }

    // Limpiar input
    document.getElementById("asmatutako_zenbakia").value = "";
}


// 8. Atzeko Planoaren Kolore-Aldatzailea (Random)
function aldatuAtzekoPlanoarenKolorea() {
    // Array con algunos colores
    const koloreak = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F6"];
    
    // Elegir un color aleatorio
    const koloreBerria = koloreak[Math.floor(Math.random() * koloreak.length)];
    
    // Cambiar el color de fondo del body
    document.body.style.backgroundColor = koloreBerria;
}