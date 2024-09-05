import relatieveLuchtvochtigheid from "../assets/dampdichtheid-relatieve-luchtvochtigheid.jpg";

import mollier from "../assets/dampdichtheid-mollier.jpg";
import vochtInIsolatie from "../assets/dampdichtheid-vocht-in-isolatie.jpg";

const dampdichtheidTabsContent = [
    {
        title: "Relatieve luchtvochtigheid",
        content: [
            "De relatieve (lucht)vochtigheid is een verhouding (percentage) die aangeeft hoeveel waterdamp de lucht bevat ten opzichte van de maximale hoeveelheid waterdamp die de lucht kan bevatten bij die temperatuur en druk. Een waarde van 100% wijst op een maximale hoeveelheid waterdamp: de lucht is dan verzadigd. Bij een relatieve luchtvochtigheid van 50% bevat de lucht bij de heersende temperatuur en druk de helft van de maximale hoeveelheid waterdamp die de lucht kan bavatten.",
            "In een gebouw daalt de relatieve (lucht)vochtigheid als er gestookt wordt, omdat de absolute hoeveelheid vocht in de lucht hetzelfde blijft en de warmere lucht veel meer vocht zou kunnen bevatten. Gaat de verwarming weer uit, dan stijgt de relatieve luchtvochtigheid weer."
        ],
        images: [
            {
                image: relatieveLuchtvochtigheid,
                alt: "Relatieve luchtvochtigheid"
            }
        ]
    },
    {
        title: "Diagram van Mollier",
        content: [
            "Om behaaglijk te kunnen leven in een gebouw moet de relatieve (lucht)vochtigheid tussen de 40 en 65% liggen.",
            "Als er in een gebouw een relatieve (lucht)vochtigheid heerst van 50% bij 20°C (groene lijn) en normale druk zal de lucht zo'n 7g/M3 waterdamp bevatten(rode lijn). Links grafiek van Mollier.",
            "Deze lucht zal bij 9°C verzadigd zijn en zal condenseren (dauwpunt). Blauwe lijnen in grafiek van Mollier.",
            "Zo zal dus warme droge lucht van binnen condenseren in de isolatie als deze niet dampdicht is gemaakt. Water in de isolatielaag en de isolatie zal niet meer naar behoren werken. Veelal zal er ook een koudebrug ontstaan. Schimmelvorming, stankoverlast en mogelijk zelfs rot als gevolg.",
            "Dampdichte of dampremmende folie moet op naden dan ook goed worden gekit of gelijmd."
        ],
        images: [
            {
                image: mollier,
                alt: "Diagram van Mollier"
            },
            {
                image: vochtInIsolatie,
                alt: "Vocht in isolatie"
            }
        ]
    }
]

export default dampdichtheidTabsContent;