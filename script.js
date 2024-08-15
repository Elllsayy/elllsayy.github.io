import { readFileSync } from 'fs';

// Fonction pour lire et parser le fichier en une Map
function loadSpellCards(filePath) {
  const dataMap = new Map();

  const fileData = readFileSync(filePath, 'utf8');
  const characters = fileData.split('%');

  for (const character of characters) {
    if (character.trim().length > 0) {
      const [name, spellCards] = character.split(';');
      if (name && spellCards) {
        const spells = spellCards.split(',').map(spell => spell.trim());
        dataMap.set(name.trim(), spells);
      }
    }
  }

  return dataMap;
}

// Charger les données à partir du fichier 'data.txt'
const dataMap = loadSpellCards('data.txt');

// Affichage pour vérifier
dataMap.forEach((spells, name) => {
  console.log(`${name}: ${spells.join(', ')}`);
});