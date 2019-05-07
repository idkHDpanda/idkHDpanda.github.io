//firebase
  const db = firebase.database();

  const ps4 = db.ref("Spill/PS4");
  const nintendo = db.ref("Spill/Switch");
  const pc = db.ref("Spill/PC");

  const action = db.ref();
  const rollespill = db.ref();
  const indie = db.ref();

//html-elementer
  const main = document.querySelector("main");

//funksjoner for selve spillene
function genererHTML(snapshot){
      //Javascript-funksjon som skriver varene ut på nettsiden i main-elementet
    let spill = snapshot.val();
    let key = snapshot.key;
    let parent = snapshot.ref.parent.key;
    main.innerHTML +=`
        <article class="spill">
          <div id="bildeDiv"><img src="${spill.Media1}" alt=""></div>
          <p><b>${spill.Tittel}</b></p>
          <p>Pris: ${spill.Pris}</p>
          <a class="merInfo" href="vare.html?key=${key}&parent=${parent}">Mer info</a>
        </article>
    `;
}

//funksjoner for pris
function genererHTMLsnudd(snapshot){
      //Javascript-funksjon som skriver varene ut på nettsiden i main-elementet
    let spill = snapshot.val();
    let key = snapshot.key;
    main.innerHTML =`
        <article class="spill">
          <div id="bildeDiv">><img src="${spill.Media1}" alt=""></div>
          <p><b>${spill.Tittel}</p>
          <p>Pris: ${spill.Pris}</p>
        </article>
    ` + main.innerHTML;
}

//spørring for laveste pris
function visLavestePS4Pris(){
  main.innerHTML =``;
  ps4.orderByChild("Pris").on("child_added",genererHTML)
}

function visLavesteNintendoPris(){
  main.innerHTML =``;
  nintendo.orderByChild("Pris").on("child_added",genererHTML)
}

function visLavestePCPris(){
  main.innerHTML =``;
  pc.orderByChild("Pris").on("child_added",genererHTML)
}

  function visCare(snap) {
    const key = snap.key;
    const vare = snap.val();
}

//sjanger spørringer
function visPS4(){
  ps4.on("child_added",genererHTML);
}

function visPS4Action(){
  main.innerHTML=``
  ps4.orderByChild("Sjanger1").equalTo("Action").on("child_added",genererHTML);
  ps4.orderByChild("Sjanger2").equalTo("Action").on("child_added",genererHTML);
  ps4.orderByChild("Sjanger3").equalTo("Action").on("child_added",genererHTML);
}

function visPS4Rollespill(){
  main.innerHTML=``
  ps4.orderByChild("Sjanger1").equalTo("Rollespill").on("child_added",genererHTML);
  ps4.orderByChild("Sjanger2").equalTo("Rollespill").on("child_added",genererHTML);
  ps4.orderByChild("Sjanger3").equalTo("Rollespill").on("child_added",genererHTML);
}

function visPS4Indie(){
  main.innerHTML=``
  ps4.orderByChild("Sjanger1").equalTo("Indie").on("child_added",genererHTML);
  ps4.orderByChild("Sjanger2").equalTo("Indie").on("child_added",genererHTML);
  ps4.orderByChild("Sjanger3").equalTo("Indie").on("child_added",genererHTML);
}

function visNintendo(){
  nintendo.on("child_added",genererHTML);
}

function visNintendoAction(){
  main.innerHTML=``
  nintendo.orderByChild("Sjanger1").equalTo("Action").on("child_added",genererHTML);
  nintendo.orderByChild("Sjanger2").equalTo("Action").on("child_added",genererHTML);
  nintendo.orderByChild("Sjanger3").equalTo("Action").on("child_added",genererHTML);
}

function visNintendoRollespill(){
  main.innerHTML=``
  nintendo.orderByChild("Sjanger1").equalTo("Rollespill").on("child_added",genererHTML);
  nintendo.orderByChild("Sjanger2").equalTo("Rollespill").on("child_added",genererHTML);
  nintendo.orderByChild("Sjanger3").equalTo("Rollespill").on("child_added",genererHTML);
}

function visNintendoIndie(){
  main.innerHTML=``
  nintendo.orderByChild("Sjanger1").equalTo("Indie").on("child_added",genererHTML);
  nintendo.orderByChild("Sjanger2").equalTo("Indie").on("child_added",genererHTML);
  nintendo.orderByChild("Sjanger3").equalTo("Indie").on("child_added",genererHTML);
}

function visPC(){
  pc.on("child_added",genererHTML);
}

function visPCAction(){
  main.innerHTML=``
  pc.orderByChild("Sjanger1").equalTo("Action").on("child_added",genererHTML);
  pc.orderByChild("Sjanger2").equalTo("Action").on("child_added",genererHTML);
  pc.orderByChild("Sjanger3").equalTo("Action").on("child_added",genererHTML);
}

function visPCRollespill(){
  main.innerHTML=``
  pc.orderByChild("Sjanger1").equalTo("Rollespill").on("child_added",genererHTML);
  pc.orderByChild("Sjanger2").equalTo("Rollespill").on("child_added",genererHTML);
  pc.orderByChild("Sjanger3").equalTo("Rollespill").on("child_added",genererHTML);
}

function visPCIndie(){
  main.innerHTML=``
  pc.orderByChild("Sjanger1").equalTo("Indie").on("child_added",genererHTML);
  pc.orderByChild("Sjanger2").equalTo("Indie").on("child_added",genererHTML);
  pc.orderByChild("Sjanger3").equalTo("Indie").on("child_added",genererHTML);
}

//underside

//slider
var slideIndex,slides,dots;
function initGallery(){
    slideIndex = 0;
    slides=document.getElementsByClassName("imageHolder");
    slides[slideIndex].style.opacity=1;

    dots=[];
    var dotsContainer=document.getElementById("dotsContainer"),i;
    for (i = 0; i < slides.length; i++) {
        var dot=document.createElement("span");
        dot.classList.add("dots");
        dotsContainer.append(dot);
        dot.setAttribute("onclick","moveSlide("+i+")");
        dots.push(dot);
    }
    dots[slideIndex].classList.add("active");
}

initGallery();
function plusSlides(n) {
    moveSlide(slideIndex+n);
}

function moveSlide(n){
    var i;
    var current,next;
    var moveSlideAnimClass={
          forCurrent:"",
          forNext:""
    };

    var slideTextAnimClass;
    if(n>slideIndex) {
        if(n >= slides.length){n=0;}
        moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
        moveSlideAnimClass.forNext="moveLeftNextSlide";
        slideTextAnimClass="slideTextFromTop";
    }else if(n<slideIndex){
        if(n<0){n=slides.length-1;}
        moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
        moveSlideAnimClass.forNext="moveRightPrevSlide";
        slideTextAnimClass="slideTextFromBottom";
    }

    if(n!=slideIndex){
        next = slides[n];
        current=slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "imageHolder";
            slides[i].style.opacity=0;
            dots[i].classList.remove("active");
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        dots[n].classList.add("active");
        slideIndex=n;
    }
}
var timer=null;
function setTimer(){
    timer=setInterval(function () {
        plusSlides(1) ;
    },3000);
}
setTimer();


//login signin

// Get the modal
var modal = document.getElementById('id01');

var modalLogin = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
      }

    if (event.target == modalLogin) {
        modalLogin.style.display = "none";
      }
}
