const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const anchor = document.querySelectorAll('a');
anchor[0].innerHTML = "Service";
anchor[1].innerHTML = "Product";
anchor[2].innerHTML = "Vision";
anchor[3].innerHTML = "Features";
anchor[4].innerHTML = "About";
anchor[5].innerHTML = "Contact";


const h1text = document.querySelector("h1");
h1text.textContent = "DOM IS AWESOME";

const button = document.querySelector("button");
button.textContent = "Get Started";

const circleImg = document.querySelector("#cta-img");
circleImg.src = '/img/header-img.png';

const titles = document.querySelectorAll(".text-content h4");
const verbage = document.querySelectorAll(".text-content p");
titles[0].textContent = 'Features';
verbage[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
titles[1].textContent = 'About';
verbage[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const midImg = document.querySelector("#middle-img");
midImg.src = '/img/mid-page-accent.jpg';

titles[2].textContent = 'Services';
verbage[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
titles[3].textContent = 'Product';
verbage[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
titles[4].textContent = 'Vision';
verbage[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const contact = document.querySelector(".contact h4");
contact.textContent = "Contact";

const address = document.querySelector(".contact p");
address.setAttribute('style', 'white-space:pre;');
address.textContent = "123 Way 456 Street\r\n";
address.textContent += "Somewhere, USA" ; 

const phone = document.querySelector(".contact p:nth-of-type(2)");
phone.textContent = "1 (888) 888-8888";

const email = document.querySelector(".contact p:nth-of-type(3)");
email.textContent = "sales@greatidea.io";

const footer = document.querySelector("footer p");
footer.textContent = "Copyright Great Idea! 2018"

anchor.forEach((elem)=>{
  elem.style.color = "green";
});

const navigation = document.querySelector('nav');

let newA = document.createElement('a');
newA.href = "#";
newA.textContent = "newAnchor";
newA.style.color = "dodgerblue";

let newB = document.createElement('a');
newB.href = "#";
newB.textContent = "newPreAnchor";
newB.style.color = "dodgerblue";

console.log(navigation);
console.log(newA);

navigation.appendChild(newA);
navigation.prepend(newB);


const event = document.querySelector('button');
event.onclick = function(){myFunction()};
let isOn = true;

let ran = function colorGen(){
  return Math.floor(Math.random() * 256);
}

function myFunction(){
  if(isOn === true){
    event.textContent = "YOU CLICKED ME!";
    document.body.style.backgroundColor = "rgb(" + ran() + ", "+ ran() + ", " + ran() + ")";
    isOn = false;
  }
  else{
    event.textContent = "Get Started";
    document.body.style.backgroundColor = "white";
    isOn = true;
  }
  
}



