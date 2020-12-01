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
let count = 1
const links = document.querySelectorAll('nav a')

links.forEach(item => {
  
  item.textContent = siteContent['nav'][`nav-item-${count}`]
  count++
})
// links[0].textContent = siteContent['nav']['nav-item-1']
// links[1].textContent = siteContent['nav']['nav-item-2']
// links[2].textContent = siteContent['nav']['nav-item-3']
// links[3].textContent = siteContent['nav']['nav-item-4']
// links[4].textContent = siteContent['nav']['nav-item-5']
// links[5].textContent = siteContent['nav']['nav-item-6']

const header = document.getElementById('cta-text');
// header.setAttribute(textContent = siteContent['cta']['h1'])

const title = document.querySelector('h1');
title.textContent = siteContent['cta']['h1'];

const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

const cta = document.querySelector('.cta');
const ctaImage = cta.querySelector('img')
ctaImage.setAttribute('src', "img/header-img.png")

const mainContent = document.querySelector('.main-content');
// subtitles.textContent = siteContent.


const middleImage = mainContent.querySelector('.middle-img');
middleImage.src = siteContent['main-content']['middle-img-src']

const features = mainContent.querySelector('.top-content .text-content')
const featuresTitle = features.querySelector('h4')
featuresTitle.textContent = siteContent['main-content']['features-h4']
const featuresContent = featuresTitle.nextElementSibling;
featuresContent.textContent = siteContent['main-content']['features-content']



const about = features.nextElementSibling;
const aboutTitle = about.querySelector('h4')
aboutTitle.textContent = siteContent['main-content']['about-h4']
const aboutContent = aboutTitle.nextElementSibling;
aboutContent.textContent = siteContent['main-content']['about-content']

const services = mainContent.querySelector('.bottom-content .text-content')
const servicesTitle = services.querySelector('h4')
servicesTitle.textContent = siteContent['main-content']['services-h4']
const servicesContent = servicesTitle.nextElementSibling;
servicesContent.textContent = siteContent['main-content']['services-content']

const product = services.nextElementSibling;
const productTitle = product.querySelector('h4')
productTitle.textContent = siteContent['main-content']['product-h4']
const productContent = productTitle.nextElementSibling;
productContent.textContent = siteContent['main-content']['product-content']

const vision = product.nextElementSibling;
const visionTitle = vision.querySelector('h4')
visionTitle.textContent = siteContent['main-content']['vision-h4']
const visionContent = visionTitle.nextElementSibling;
visionContent.textContent = siteContent['main-content']['vision-content']

const contactSection = document.querySelector('.contact');

const contactTitle = contactSection.querySelector('h4')
contactTitle.textContent = siteContent['contact']['contact-h4']
const contactAddress = contactTitle.nextElementSibling;
contactAddress.textContent = siteContent['contact']['address']
const contactPhone = contactAddress.nextElementSibling;
contactPhone.textContent = siteContent['contact']['phone']
const contactEmail = contactPhone.nextElementSibling;
contactEmail.textContent = siteContent['contact']['email']

const footer = document.querySelector('footer')

const footerText = footer.querySelector('p')
footerText.textContent = siteContent['footer']['copyright']

const newsLink = document.createElement('a')
newsLink.textContent = 'News'
newsLink.href = '#'
document.querySelector('nav').appendChild(newsLink)

const nav = document.querySelector('nav')
nav.classList.add('green')



