const puntsInicials = {
  europa: 41,
  uesa: 40,
  espanyol: 40,
  terrassa: 38,
  torrent: 37,
  valencia: 36,
  sabadell: 35,
  elche: 35,
  baleares: 35,
  lleida: 34,
  alzira: 29,
  olot: 27,
  ibiza: 27,
  peña: 26,
  cornella: 24,
  andratx: 21,
  badalona: 16,
  mallorca: 11,
};

const equipToId = {
  "CE Europa": "europa",
  "UE Sant Andreu": "uesa",
  'RCD Espanyol "B"': "espanyol",
  "Terrassa FC": "terrassa",
  "Torrent CF": "torrent",
  "Valencia-Mestalla": "valencia",
  "CE Sabadell FC": "sabadell",
  'Elche CF "B"': "elche",
  "CD Atlético Baleares": "baleares",
  "Lleida FC": "lleida",
  "UD Alzira": "alzira",
  "UE Olot": "olot",
  "CD Ibiza Islas Pitiusas": "ibiza",
  "SCR Peña Deportiva": "peña",
  "UE Cornellà": "cornella",
  "CE Andratx": "andratx",
  "CF Badalona Futur": "badalona",
  'RCD Mallorca "B"': "mallorca",
};

const jornades = {
  24: [
    ["RCD Mallorca B", "CE Andratx"],
    ["Elche CF B", "CD Ibiza Islas Pitiusas"],
    ["SCR Peña Deportiva", "Torrent CF"],
    ["Terrassa FC", "Valencia-Mestalla"],
    ["CF Badalona Futur", "CD Atlético Baleares"],
    ["CE Europa", "RCD Espanyol B"],
    ["UE Olot", "UE Cornellà"],
    ["UD Alzira", "Lleida FC"],
    ["CE Sabadell FC", "UE Sant Andreu"],
  ],
  25: [
    ["CE Andratx", "CE Europa"],
    ["Valencia-Mestalla", "CF Badalona Futur"],
    ["RCD Espanyol B", "SCR Peña Deportiva"],
    ["CD Atlético Baleares", "CE Sabadell FC"],
    ["CD Ibiza Islas Pitiusas", "RCD Mallorca B"],
    ["Torrent CF", "Terrassa FC"],
    ["UE Cornellà", "UD Alzira"],
    ["Lleida FC", "Elche CF B"],
    ["UE Sant Andreu", "UE Olot"],
  ],
  26: [
    ["Valencia-Mestalla", "CD Atlético Baleares"],
    ["UD Alzira", "UE Sant Andreu"],
    ["Elche CF B", "UE Cornellà"],
    ["RCD Mallorca B", "Lleida FC"],
    ["CE Europa", "CD Ibiza Islas Pitiusas"],
    ["SCR Peña Deportiva", "CE Andratx"],
    ["Terrassa FC", "RCD Espanyol B"],
    ["CF Badalona Futur", "Torrent CF"],
    ["UE Olot", "CE Sabadell FC"],
  ],
  27: [
    ["UE Cornellà", "RCD Mallorca B"],
    ["Lleida FC", "CE Europa"],
    ["RCD Espanyol B", "CF Badalona Futur"],
    ["CD Atlético Baleares", "UE Olot"],
    ["CD Ibiza Islas Pitiusas", "SCR Peña Deportiva"],
    ["CE Andratx", "Terrassa FC"],
    ["Torrent CF", "Valencia-Mestalla"],
    ["CE Sabadell FC", "UD Alzira"],
    ["UE Sant Andreu", "Elche CF B"],
  ],
  28: [
    ["UD Alzira", "UE Olot"],
    ["Elche CF B", "CE Sabadell FC"],
    ["RCD Mallorca B", "UE Sant Andreu"],
    ["CE Europa", "UE Cornellà"],
    ["CF Badalona Futur", "CE Andratx"],
    ["Valencia-Mestalla", "RCD Espanyol B"],
    ["SCR Peña Deportiva", "Lleida FC"],
    ["Terrassa FC", "CD Ibiza Islas Pitiusas"],
    ["Torrent CF", "CD Atlético Baleares"],
  ],
  29: [
    ["UE Olot", "Elche CF B"],
    ["CE Sabadell FC", "RCD Mallorca B"],
    ["UE Cornellà", "SCR Peña Deportiva"],
    ["Lleida FC", "Terrassa FC"],
    ["RCD Espanyol B", "Torrent CF"],
    ["CD Atlético Baleares", "UD Alzira"],
    ["CD Ibiza Islas Pitiusas", "CF Badalona Futur"],
    ["CE Andratx", "Valencia-Mestalla"],
    ["UE Sant Andreu", "CE Europa"],
  ],
  30: [
    ["Elche CF B", "UD Alzira"],
    ["CE Europa", "CE Sabadell FC"],
    ["CF Badalona Futur", "Lleida FC"],
    ["Valencia-Mestalla", "CD Ibiza Islas Pitiusas"],
    ["RCD Espanyol B", "CD Atlético Baleares"],
    ["RCD Mallorca B", "UE Olot"],
    ["SCR Peña Deportiva", "UE Sant Andreu"],
    ["Terrassa FC", "UE Cornellà"],
    ["Torrent CF", "CE Andratx"],
  ],
  31: [
    ["UE Olot", "CE Europa"],
    ["UE Cornellà", "CF Badalona Futur"],
    ["CE Sabadell FC", "SCR Peña Deportiva"],
    ["Lleida FC", "Valencia-Mestalla"],
    ["CE Andratx", "RCD Espanyol B"],
    ["CD Atlético Baleares", "Elche CF B"],
    ["CD Ibiza Islas Pitiusas", "Torrent CF"],
    ["UE Sant Andreu", "Terrassa FC"],
    ["UD Alzira", "RCD Mallorca B"],
  ],
  32: [
    ["RCD Mallorca B", "Elche CF B"],
    ["CE Europa", "UD Alzira"],
    ["CF Badalona Futur", "UE Sant Andreu"],
    ["Valencia-Mestalla", "UE Cornellà"],
    ["RCD Espanyol B", "CD Ibiza Islas Pitiusas"],
    ["CE Andratx", "CD Atlético Baleares"],
    ["SCR Peña Deportiva", "UE Olot"],
    ["Torrent CF", "Lleida FC"],
    ["Terrassa FC", "CE Sabadell FC"],
  ],
  33: [
    ["RCD Mallorca B", "CD Atlético Baleares"],
    ["Elche CF B", "CE Europa"],
    ["UD Alzira", "SCR Peña Deportiva"],
    ["UE Olot", "Terrassa FC"],
    ["CE Sabadell FC", "CF Badalona Futur"],
    ["UE Cornellà", "Torrent CF"],
    ["CD Ibiza Islas Pitiusas", "CE Andratx"],
    ["Lleida FC", "RCD Espanyol B"],
    ["UE Sant Andreu", "Valencia-Mestalla"],
  ],
  34: [
    ["CE Europa", "RCD Mallorca B"],
    ["Terrassa FC", "UD Alzira"],
    ["CF Badalona Futur", "UE Olot"],
    ["Valencia-Mestalla", "CE Sabadell FC"],
    ["RCD Espanyol B", "UE Cornellà"],
    ["CE Andratx", "Lleida FC"],
    ["CD Atlético Baleares", "CD Ibiza Islas Pitiusas"],
    ["SCR Peña Deportiva", "Elche CF B"],
    ["Torrent CF", "UE Sant Andreu"],
  ],
};

let jornadaActual = localStorage.getItem("jornadaActual")
  ? parseInt(localStorage.getItem("jornadaActual"))
  : 25; // 🔹 Ara és global i no es reiniciarà incorrectament

const totalJornades = 34; // Nombre total de jornades

function mostraJornada(jornada) {
  document.querySelectorAll(".jornada").forEach((div) => {
    div.style.display = "none"; // Amaguem totes les jornades
  });

  document.getElementById(`jornada-${jornada}`).style.display = "block"; // Mostrem la correcta
  document.getElementById("num-jornada").textContent = jornada; // Actualitzem el número a la interfície

  // Guardar la jornada actual en localStorage
  localStorage.setItem("jornadaActual", jornada);

  // Desactivar botons si estem al límit
  document.getElementById("boto-anterior").disabled = jornada === 24;
  document.getElementById("boto-seguent").disabled = jornada === totalJornades;
}

document.addEventListener("DOMContentLoaded", function () {
  // Event listeners per als botons de canvi de jornada
  document
    .getElementById("boto-anterior")
    .addEventListener("click", function () {
      if (jornadaActual > 24) {
        jornadaActual--;
        mostraJornada(jornadaActual);
      }
    });

  document
    .getElementById("boto-seguent")
    .addEventListener("click", function () {
      if (jornadaActual < totalJornades) {
        jornadaActual++;
        mostraJornada(jornadaActual);
      }
    });

  // Mostrem la jornada guardada o la 25 per defecte
  mostraJornada(jornadaActual);

  const selects = document.querySelectorAll("select");

  function guardaResultats() {
    let resultats = {};
    selects.forEach((select) => {
      resultats[select.id] = select.value;
    });
    localStorage.setItem("resultats", JSON.stringify(resultats));
  }

  function carregaResultats() {
    const resultatsGuardats = JSON.parse(localStorage.getItem("resultats"));
    if (resultatsGuardats) {
      selects.forEach((select) => {
        if (resultatsGuardats[select.id]) {
          select.value = resultatsGuardats[select.id];
        }
      });
    }
  }

  function actualitzaClassificacio() {
    const punts = { ...puntsInicials };

    selects.forEach((select) => {
      const resultat = select.value;
      if (!resultat) return;

      const fila = select.closest("tr");
      const local = fila.children[0].textContent.trim();
      const visitant = fila.children[1].textContent.trim();

      const idLocal = equipToId[local] || null;
      const idVisitant = equipToId[visitant] || null;

      if (idLocal && idVisitant) {
        if (resultat === "1") {
          punts[idLocal] += 3;
        } else if (resultat === "2") {
          punts[idVisitant] += 3;
        } else if (resultat === "X") {
          punts[idLocal] += 1;
          punts[idVisitant] += 1;
        }
      }
    });

    let classificacio = Object.keys(punts)
      .map((id) => ({
        id,
        nom: Object.keys(equipToId).find((key) => equipToId[key] === id),
        punts: punts[id],
      }))
      .sort((a, b) => b.punts - a.punts);

    const tbody = document.querySelector(".classification tbody");
    tbody.innerHTML = "";

    classificacio.forEach((equip, index) => {
      let fila = document.createElement("tr");
      let posicio = document.createElement("td");
      let nomEquip = document.createElement("td");
      let puntsEquip = document.createElement("td");

      posicio.textContent = index + 1;
      nomEquip.textContent = equip.nom;
      puntsEquip.textContent = equip.punts;
      puntsEquip.id = `punts-${equip.id}`;

      fila.appendChild(posicio);
      fila.appendChild(nomEquip);
      fila.appendChild(puntsEquip);

      // Assignació de colors segons la posició
      if (index === 0) {
        fila.style.backgroundColor = "#28a745"; // Verd fort per al 1r lloc
        fila.style.color = "#fff";
      } else if (index >= 1 && index <= 4) {
        fila.style.backgroundColor = "#90ee90"; // Verd clar per al 2n-5è lloc
      } else if (index === 12) {
        fila.style.backgroundColor = "#ff9999"; // Vermell suau per al 13è lloc
      } else if (index >= 13 && index <= 17) {
        fila.style.backgroundColor = "#dc3545"; // Vermell fort per al 14è-18è lloc
        fila.style.color = "#fff";
      }

      tbody.appendChild(fila);
    });

    // Guarda els resultats després d'actualitzar la classificació
    guardaResultats();
  }

  selects.forEach((select) => {
    select.addEventListener("change", actualitzaClassificacio);
  });

  let resultatsGuardats = JSON.parse(localStorage.getItem("resultats")) || {};

  // 🔹 Objecte amb els resultats fixos per als partits de la jornada 24
  const resultatsFixos = {
    "resultat-mallorca-andratx": "2",
    "resultat-elche-ibiza": "2",
    "resultat-peña-torrent": "X",
    "resultat-terrassa-valencia": "2",
    "resultat-badalona-baleares": "2",
    "resultat-europa-espanyol": "1",
    "resultat-olot-cornella": "1",
    "resultat-alzira-lleida": "2",
    "resultat-sabadell-uesa": "2",
  };

  // 🔹 Apliquem els resultats fixos als selects de la jornada 24
  document.querySelectorAll("#jornada-24 select").forEach((select) => {
    if (resultatsFixos.hasOwnProperty(select.id)) {
      select.value = resultatsFixos[select.id]; // 🔹 Assignem el valor fix
      select.disabled = true; // 🔹 Bloquegem perquè l'usuari no pugui modificar-lo

      // 🔹 Guardem aquest resultat a localStorage
      resultatsGuardats[select.id] = resultatsFixos[select.id];
    }
  });

  // 🔹 Guardem tots els canvis a localStorage
  localStorage.setItem("resultats", JSON.stringify(resultatsGuardats));

  carregaResultats();
  actualitzaClassificacio();
});

// 🔹 El botó "Restablir resultats" ara porta a la jornada 25 correctament
document
  .getElementById("boto-restablir")
  .addEventListener("click", function () {
    if (
      confirm(
        "Segur que vols restablir tots els resultats? Aquesta acció no es pot desfer."
      )
    ) {
      // 🔹 Recuperem els resultats guardats
      let resultatsGuardats =
        JSON.parse(localStorage.getItem("resultats")) || {};

      // 🔹 Objecte amb els resultats fixos per als partits de la jornada 24
      const resultatsFixos = {
        "resultat-mallorca-andratx": "2",
        "resultat-elche-ibiza": "2",
        "resultat-peña-torrent": "X",
        "resultat-terrassa-valencia": "2",
        "resultat-badalona-baleares": "2",
        "resultat-europa-espanyol": "1",
        "resultat-olot-cornella": "1",
        "resultat-alzira-lleida": "2",
        "resultat-sabadell-uesa": "2",
      };

      // 🔹 Reiniciem la classificació manualment als punts inicials
      let punts = { ...puntsInicials };

      // 🔹 Esborrem només els resultats editables (no els fixos)
      document.querySelectorAll("select").forEach((select) => {
        if (!select.disabled) {
          select.value = ""; // 🔹 Reiniciem només els selects editables
          delete resultatsGuardats[select.id]; // 🔹 Eliminem del localStorage
        }
      });

      // 🔹 Tornem a guardar només els resultats fixos
      Object.keys(resultatsFixos).forEach((id) => {
        resultatsGuardats[id] = resultatsFixos[id];
      });

      localStorage.setItem("resultats", JSON.stringify(resultatsGuardats));

      // 🔹 Tornem a la jornada 25 i ho guardem
      jornadaActual = 25;
      mostraJornada(jornadaActual);
      localStorage.setItem("jornadaActual", jornadaActual);

      // 🔹 Aplicar els resultats fixos a la jornada 24 (per si s'han eliminat)
      document.querySelectorAll("#jornada-24 select").forEach((select) => {
        if (resultatsFixos.hasOwnProperty(select.id)) {
          select.value = resultatsFixos[select.id]; // 🔹 Assignem el valor fix
          select.disabled = true; // 🔹 Bloquegem perquè l'usuari no el pugui modificar
        }
      });

      // 🔹 Aplicar els punts de la jornada fixa manualment abans de recalcular la classificació
      Object.keys(resultatsFixos).forEach((id) => {
        let select = document.getElementById(id);
        if (select) {
          let fila = select.closest("tr");
          let local = fila.children[0].textContent.trim();
          let visitant = fila.children[1].textContent.trim();
          let idLocal = equipToId[local] || null;
          let idVisitant = equipToId[visitant] || null;
          let resultat = resultatsFixos[id];

          if (idLocal && idVisitant) {
            if (resultat === "1") {
              punts[idLocal] += 3;
            } else if (resultat === "2") {
              punts[idVisitant] += 3;
            } else if (resultat === "X") {
              punts[idLocal] += 1;
              punts[idVisitant] += 1;
            }
          }
        }
      });

      // 🔹 Reescrivim la classificació amb els punts actualitzats i la reordenem correctament
      let classificacio = Object.keys(punts)
        .map((id) => ({
          id,
          nom: Object.keys(equipToId).find((key) => equipToId[key] === id),
          punts: punts[id],
        }))
        .sort((a, b) => b.punts - a.punts);

      const tbody = document.querySelector(".classification tbody");
      tbody.innerHTML = "";

      classificacio.forEach((equip, index) => {
        let fila = document.createElement("tr");
        let posicio = document.createElement("td");
        let nomEquip = document.createElement("td");
        let puntsEquip = document.createElement("td");

        posicio.textContent = index + 1;
        nomEquip.textContent = equip.nom;
        puntsEquip.textContent = equip.punts;
        puntsEquip.id = `punts-${equip.id}`;

        fila.appendChild(posicio);
        fila.appendChild(nomEquip);
        fila.appendChild(puntsEquip);

        // Assignació de colors segons la posició
        if (index === 0) {
          fila.style.backgroundColor = "#28a745"; // Verd fort per al 1r lloc
          fila.style.color = "#fff";
        } else if (index >= 1 && index <= 4) {
          fila.style.backgroundColor = "#90ee90"; // Verd clar per al 2n-5è lloc
        } else if (index === 12) {
          fila.style.backgroundColor = "#ff9999"; // Vermell suau per al 13è lloc
        } else if (index >= 13 && index <= 17) {
          fila.style.backgroundColor = "#dc3545"; // Vermell fort per al 14è-18è lloc
          fila.style.color = "#fff";
        }

        tbody.appendChild(fila);
      });

      console.log("Classificació actualitzada després de restablir.");
    }
  });