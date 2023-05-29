/* Fonctionnalité 1 */
var footerEl = document.querySelector('footer');
footerEl.addEventListener('click',displayClick);
var count = 0;
function displayClick() {
  console.log('clique x' + count);
  count = count + 1
};

/* Fonctionnalité 2 */
var burgerMenu = document.getElementsByClassName('navbar-toggler')[0];
burgerMenu.addEventListener('click', toggleBurgerMenu);
function toggleBurgerMenu(){
  document.getElementById('navbarHeader').classList.toggle('collapse');
};

/* Fonctionnalité 3 */
var card1 = document.getElementsByClassName('card')[0];
var editButton1 = card1.getElementsByClassName('btn-outline-secondary')[0]
editButton1.addEventListener('click', colorRed);
function colorRed() {
  card1.style.color = 'red';
};

/* Fonctionnalité 4 */
var card2 = document.getElementsByClassName('card')[1];
var editButton2 = card2.getElementsByClassName('btn-outline-secondary')[0]
editButton2.addEventListener('click', colorSwitch);
function colorSwitch() {
  if (card2.style.color === 'green') {
    card2.style.color = 'white';
  
  } else {
    card2.style.color = 'green';
  };
};

/* Fonctionnalité 5 */
var navbar = document.querySelector('.navbar');
var linkCDN = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
var linkVisible = true;

navbar.addEventListener("dblclick", function(){
  if (linkVisible) {
    linkCDN.disabled = true;
    linkVisible = false;
  } else {
    linkCDN.disabled = false;
    linkVisible = true;
  }
  }
);

/* Fonctionnalité 6 */
var cards = document.getElementsByClassName('card');

for (let i = 0; i < cards.length; i++) {
  let cardText = cards[i].querySelector('.card-body p.card-text');
  let cardImg = cards[i].querySelector('img');
  let viewButton = cards[i].querySelector('.card-body .btn-group button.btn-success');
  let isCardReduce = false;

  viewButton.addEventListener('mouseover', reduceCards);

  function reduceCards() {
    if (isCardReduce) {
      cardText.style.display = 'block';
      cardImg.style.width = '100%';
      isCardReduce = false;
    } else {
      cardText.style.display = 'none';
      cardImg.style.width = '20%';
      isCardReduce = true;
    }
  }
};

/* Fonctionnalité 7 */
let nextButton = document.querySelector("body > main > section > div > p > a.btn.btn-secondary.my-2");
let album = document.querySelector("body > main > div > div > div");
nextButton.addEventListener('click', nextCard);
function nextCard() {
  album.insertBefore(album.children[album.children.length - 1], album.children[0]);
};

/* Fonctionnalité 8 */
let previousButton = document.querySelector("body > main > section > div > p > a.btn.btn-primary.my-2");
previousButton.addEventListener('click', previousCard);
function previousCard(e) {
  e.preventDefault()
  album.insertBefore(album.children[0], album.children[album.children.length - 1].nextSibling );
};

/* Fonctionnalité 9 */
let bodyPage = document.body;
let headerLogo = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > a");
headerLogo.addEventListener('click', focusStatus);
headerLogo.addEventListener('keypress', turnWTF);
let isFocused = false;
function focusStatus() {
  if (isFocused) {
    isFocused = false;
    console.log("isfocused = false")
  } else {
    isFocused = true;
    console.log("isfocused = true")
  }
};

function turnWTF(e) {
  if (e.key === 'a') {
    bodyPage.classList.remove('col-4', 'offset-md-8','offset-md-4');
    bodyPage.classList.add('col-4');
  } else if (e.key === 'y') {
    bodyPage.classList.remove('col-4', 'offset-md-8','offset-md-4');
    bodyPage.classList.add('col-4','offset-md-4');
  } else if (e.key === 'p') {
    bodyPage.classList.remove('col-4', 'offset-md-4');
    bodyPage.classList.add('col-4', 'offset-md-8');
  } else if (e.key === 'b') {
    bodyPage.classList.remove('col-4', 'offset-md-8','offset-md-4');
  }
}
