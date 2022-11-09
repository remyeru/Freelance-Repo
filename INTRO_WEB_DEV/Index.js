const gridElement = document.querySelector('#btn-grid'); 
generateRight = () => { 
    const rightRow = document.querySelector('#right'); 
    const rightBtn = document.createElement('button'); 
    const downRowInstances = document.getElementsByClassName('down-row'); 
    for (let i=0; i<downRowInstances.length; i++){ 
    const downBtn = document.createElement('button'); 
    downBtn.classList.add('btn'); 
    downBtn.classList.add('btn-warning'); 
    downBtn.innerHTML = 'Down'; 
    downRowInstances[i].children[0].appendChild(downBtn); 
} 
rightBtn.classList.add('btn'); 
rightBtn.classList.add('btn-primary'); 
rightBtn.innerHTML = 'Right'; 
rightRow.appendChild(rightBtn); 
} 

generateDown = () => { 
    const downRow = document.createElement('div'); 
    const colContainer = document.createElement('div'); 
    const rightRow = document.querySelector('#right'); 
    for (let i = 0; i < rightRow.children.length; i++){ 
        const downBtn = document.createElement('button'); 
        downBtn.classList.add('btn'); 
        downBtn.classList.add('btn-warning'); 
        downBtn.innerHTML = 'Down'; 
        colContainer.appendChild(downBtn); 
    } 
    downRow.classList.add('row'); 
    downRow.classList.add('down-row'); 
    colContainer.classList.add('col'); 
    downRow.appendChild(colContainer); 
    gridElement.appendChild(downRow); 
}

const name = [];
const verbs = [];
const phrases = [];

generateQoute = () => {const nameField = document.getElementById('verb');
const phrasesField = document.getElementById('phrase');
const isExistingName = names.find((name) => nameField.value === name);
const isExistingVerbs = verbs.find((verb)=>varbField.value ===verb);
const isExistingPhrases = phrases.find((phrase)=> phrasesField.value === phrase);
if (!isExistingName){ name.push(nameField.value);}
if (!isExistingVerb) {verbs.push(verbField.value);}
if (!isExistingPhrase) {phrases.push(phraseField.value)}

const name = name[Math.floor(Math.random() * name.lenght)];
const verb = verbs[Math.floor(Math.random() * verb.lenght)];
const phrase = phrase[Math.floor(Math.random() * phrase.lenght)];

return stitchQoute(name, verb, phrase);
}
stitchQoute = (name, verb, phrase) => {

return qoute; 
}
displayQoute = ()=> { const qouteField = document.getElementById('qoute'); qouteField.innerHTML = generateQoute();}

