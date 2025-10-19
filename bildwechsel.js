// Hilfsfunktion zum Erstellen eines Datums in deutscher Zeit (UTC+2 im Oktober 2025)
function createDateInGermany(year, month, day, hour, minute = 0) {
  // Monat: 0 = Januar, 9 = Oktober
  const date = new Date(Date.UTC(year, month, day, hour - 2, minute)); // UTC+2 für MESZ
  return date;
}

// Zeiträume mit Bildern
const bilder = [
    {
    start: createDateInGermany(2025, 9, 1, 17), // 19.10.2025, 15:00
    end:   createDateInGermany(2025, 9, 20, 17), // 21.10.2025, 15:00
    src:   "bilder/10_2025_td_website.png"
  },
  {
    start: createDateInGermany(2025, 9, 20, 17), // 19.10.2025, 15:00
    end:   createDateInGermany(2025, 9, 22, 17), // 21.10.2025, 15:00
    src:   "bilder/charm.jpeg"
  },
  {
    start: createDateInGermany(2025, 9, 22, 17), // 21.10.2025, 15:00
    end:   createDateInGermany(2025, 9, 24, 17), // 23.10.2025, 15:00
    src:   "bilder/rndm item.jpeg"
  },
    {
    start: createDateInGermany(2025, 9, 24, 17), // 21.10.2025, 15:00
    end:   createDateInGermany(2025, 9, 27, 16), // 23.10.2025, 15:00
    src:   "bilder/w1-p3 24-27.10. ferro romero.jpeg"
  },
    {
    start: createDateInGermany(2025, 9, 27, 16), // 21.10.2025, 15:00
    end:   createDateInGermany(2025, 9, 29, 16), // 23.10.2025, 15:00
    src:   "bilder/charm.jpeg"
  },
    {
    start: createDateInGermany(2025, 9, 29, 16), // 21.10.2025, 15:00
    end:   createDateInGermany(2025, 9, 31, 16), // 23.10.2025, 15:00
    src:   "bilder/rndm item.jpeg"
  },
    {
    start: createDateInGermany(2025, 9, 31, 16), // 21.10.2025, 15:00
    end:   createDateInGermany(2025, 10, 3, 16), // 23.10.2025, 15:00
    src:   "bilder/w2-p3 31.10.-3.11. intimidate hammer.jpeg"
  },
    {
    start: createDateInGermany(2025, 10, 3, 16), // 21.10.2025, 15:00
    end:   createDateInGermany(2025, 10, 5, 16), // 23.10.2025, 15:00
    src:   "bilder/charm.jpeg"
  },
    {
    start: createDateInGermany(2025, 10, 5, 16), // 21.10.2025, 15:00
    end:   createDateInGermany(2025, 10, 7, 16), // 23.10.2025, 15:00
    src:   "bilder/rndm item.jpeg"
  },
    {
    start: createDateInGermany(2025, 10, 7, 16), // 21.10.2025, 15:00
    end:   createDateInGermany(2025, 10, 10, 16), // 23.10.2025, 15:00
    src:   "bilder/w3-p3 rndm hunter.jpeg"
  },
    {
    start: createDateInGermany(2025, 10, 10, 16), // 19.10.2025, 15:00
    end:   createDateInGermany(2025, 10, 20, 16), // 21.10.2025, 15:00
    src:   "bilder/10_2025_td_website.png"
  },
];

const bildElement = document.getElementById("zeitgesteuertesBild");

// Funktion zum Bildwechsel basierend auf aktueller Uhrzeit
function updateBild() {
  const jetzt = new Date(); // aktuelle Zeit in lokaler Zeitzone
  let gefunden = false;

  for (let eintrag of bilder) {
    if (jetzt >= eintrag.start && jetzt < eintrag.end) {
      if (bildElement.src !== location.origin + "/" + eintrag.src) {
        bildElement.src = eintrag.src;
        bildElement.alt = "Aktuelles Bild";
      }
      gefunden = true;
      break;
    }
  }

  if (!gefunden) {
    bildElement.src = "";
    bildElement.alt = "Aktuell kein Bild verfügbar.";
  }
}

// Initial aufrufen
updateBild();

// Alle 60 Sekunden prüfen, ob das Bild gewechselt werden muss
setInterval(updateBild, 10000); // 60.000 Millisekunden = 1 Minute
