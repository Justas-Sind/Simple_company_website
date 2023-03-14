// Navigation toggle for smaller screens
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

const navToggleFunc = () => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
};

const navToggleFuncClose = () => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight !== 0) {
    linksContainer.style.height = 0;
  }
};

navToggle.addEventListener("click", navToggleFunc);
document.body.addEventListener("click", navToggleFuncClose);

// Fixed navigation bar & scroll button
const navBar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

const fixedNavScroll = () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;
  if (scrollHeight > 0) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }
  if (scrollHeight > navHeight) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
};

window.addEventListener("scroll", fixedNavScroll);

// smooth scroll links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // prevent default
    e.preventDefault();
    // navigate to specific location
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // calculate the heights
    const navHeight = navBar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;

    if (containerHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // closes link container
    linksContainer.style.height = 0;
  });
});

// question section
const questions = document.querySelectorAll(".animatedQuestion");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

// Scroll animations / transitions
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("shownContainer");
    }
  });
});

const animatedAboutElements = document.querySelectorAll(
  ".animatedAboutContainer"
);
const animatedServiceElements = document.querySelectorAll(
  ".animatedServiceCard"
);
const animatedTeamElements = document.querySelectorAll(".animatedPerson");
const animatedQuestionElements = document.querySelectorAll(".animatedQuestion");

animatedAboutElements.forEach((el) => observer.observe(el));
animatedServiceElements.forEach((el) => observer.observe(el));
animatedTeamElements.forEach((el) => observer.observe(el));
animatedQuestionElements.forEach((el) => observer.observe(el));

// Auto date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
