let database = firebase.database();
let skjorter = database.ref("varer/skjorter");
let bukser = database.ref("varer/bukser");
let main = document.querySelector("main");
function visVare(snapshot) {
  let vare =snapshot.val();
  main.innerHTML +=`
  <article>
    <img src="bilder/${vare.bilde}">
    <h1>${vare.merke}${vare.modell}</h>
    <p>${vare.pris}</p>
  </article>
  `;
}

function visAlleVarer({
  main.innerHTML ="";
  skjorter.on("child_added",visVare);
  bukser.on("child_added",visVare);
}
function visBukser() {
  main.innerHTML="";
  bukser.on("child_added",visVare);
}
function visSkjorter() {
  main.innerHTML="";
  skjorter.on("child_added",visVare);
}
visAlleVarer();
