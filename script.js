const header = document.getElementById("header");
const cursorOuter = document.getElementById("cursor_outer");
const cursorInner = document.getElementById("cursor_inner");
const mobileMenuBtn = document.querySelector(".mobile_menu_btn");
const navlinks = document.querySelector(".navlinks");
const navlink = document.querySelectorAll(".navlinks ul li a");
const bgVideo = document.getElementById("bg_video");
const bgImage = document.getElementById("bg_image");
const toggleButtons = document.querySelectorAll(".toggle_button");
const categories = document.querySelectorAll(".category");
const frontAboutText = document.getElementById("front_about_text");
const webGallery = document.querySelector(".web_gallery");
const photoGallery = document.querySelector(".photo_gallery");
const videoGallery = document.querySelector(".video_gallery");
const pfoNavBtn = document.querySelectorAll(".pfoNavBtn");
const portfolioViewer = document.querySelector(".portfolio_viewer");
const videoViewer = document.querySelector(".video_viewer");
const loadingText1 = document.querySelector(".lt1");
const loadingText2 = document.querySelector(".lt2");

// Variabless
var videoGalleryChecked = 0;

AOS.init();
typeText();

window.onscroll = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};


// Cursor
const isTouchDevice = "ontouchstart" in document.documentElement;
let prevX = 0;
let prevY = 0;
let currX;
let currY;
let dispX;
let dispY;
let posX = 0;
let posY = 0;
if (!isTouchDevice) {
  document.addEventListener("mousemove", (e) => {
    currX = e.clientX;
    currY = e.clientY;

    dispX = currX - prevX;
    dispY = currY - prevY;

    posX += dispX;
    posY += dispY;

    prevX = currX;
    prevY = currY;

    cursorOuter.style.left = `${posX}px`;
    cursorOuter.style.top = `${posY}px`;
    cursorInner.style.left = `${posX}px`;
    cursorInner.style.top = `${posY}px`;
  });
}

mobileMenuBtn.addEventListener("click", () => {
  navlinks.classList.toggle("active");
  mobileMenuBtn.classList.toggle("active");
});

navlink.forEach((navlink) => {
  navlink.addEventListener("click", () => {
    navlinks.classList.remove("active");
    mobileMenuBtn.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  bgVideo.addEventListener("canplay", () => {
    console.log("transitioned.");
    bgVideo.style.display = "block";
    bgImage.style.display = "none";
  });
});

function typeText() {
  bgVideo.style.display = "none";
  bgImage.style.display = "block";

  var text = `printing details ... ... ...`;
  frontAboutText.innerHTML = "";

  var index = 0;
  setTimeout(() => {
    const typeEffectInterval = setInterval(() => {
      if (index < text.length) {
        frontAboutText.innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(typeEffectInterval);
        frontAboutText.innerHTML = `Name: Aryan Chandra<br/>
          Age: 20 years<br/>
          📍: Bareilly, Uttar Pradesh<br/>
          🏫: BCA Graduate (2024)<br/>
          💪🏻: Front-End Web dev<br/>
          ❤: 💻, 🏋️<br/>
          ✉: <a href="mailto:aryanprofessional498@gmail.com"  style="color: white; text-decoration: none; font-size: 16px;">aryanprofessional498@gmail.com</a>
          <br/>
          <div style="margin-bottom: 15px"></div>
          🔗: <a href="https://github.com/Aryan-onGithub" target="_blank" class="front_social_link">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/aryan-chandra-649135224/" target="_blank" class="front_social_link">
            <i class="fa-brands fa-linkedin-in"></i></a>
          </a>`;
      }
    }, 40);
  }, 1500);
}

function toggleCategory(e) {
  const clickedToggleButton = document.querySelector(
    `#toggle_button${e.target.dataset.category}`
  );
  toggleButtons.forEach((toggleButton) => {
    toggleButton.classList.remove("active");
  });
  clickedToggleButton.classList.add("active");

  const categoryNumber = clickedToggleButton.dataset.category;
  const targetCategory = document.querySelector(`.category${categoryNumber}`);
  categories.forEach((category) => {
    category.classList.remove("active");
  });
  // console.log(targetCategory);
  targetCategory.classList.add("active");
}

// Portfolio Section
var portfolioContent = [
  [
    {
      image: "./media/EVgif.gif",
      name: "EV Concept website",
      languages: `<span style="background-color: red">Html</span>
                  <span style="background-color: blue; color: white">CSS</span>
                `,
      desc: "Developed a Concept (EV) Website exhibiting strong Front-End Created responsive Home, Features, Accessory, and Team Page that account for speed, Led efforts to make the Website fully responsive & engaging for the customers  Integrated Animations for enhanced user interaction on Hover",
      link: "https://aryan-ongithub.github.io/responsive-E-scooter-concept-website/",
    },
    {
      image: "./media/weathergif.png",
      name: "Weather App",
      languages: `<span style="background-color: red">Html</span>
                  <span style="background-color: blue; color: white">CSS</span>
                  <span style="background-color: green; color: white">JavaScript</span>
                 >`,
      desc: "Created a Weather Telling App, which takes location as input(city/country) and tells about the weather using API (OpenWeatherMap) Worked on this Solo Project; created the frontend and used the API key with the JavaScript code to give accurate JSON data whenever needed Created a visually appealing front end for the Website, which changes its background and weather conditions according to the weather data fetched by the API",
      link: "https://github.com/Aryan-onGithub/weather-app",
    },
    {
      image: "./media/portfoliogif.gif",
      name: "Portfolio Website",
      languages: `<span style="background-color: red">Html</span>
                  <span style="background-color: blue; color: white">CSS</span>
                  <span style="background-color: green; color: white">JavaScript</span>
                `,
      desc: "My portfolio website, built with HTML, CSS, and JavaScript, showcases my projects. It's designed to look good on any device and features interactive animations for a more engaging experience.",
      link: "#",
    },
   
    {
      image: "./media/htmlForm.gif",
      name: "Form -> HTML",
      languages: `<span style="background-color: red">Html</span>
                `,
      desc: "This form is a simple test built with HTML to demonstrate form functionality and HTML's capabilities. It's designed to be easily customizable with CSS and JavaScript, but those are intentionally omitted here.",
      link: "https://github.com/Aryan-onGithub/Hotel-registration-form-with-HTML",
    },
   
  ]
];

pfoWeb();

function pfoWeb() {
  pfoNavBtn.forEach((button) => {
    button.classList.remove("active");
  });
  document.querySelector(".pfoWebBtn").classList.add("active");
  photoGallery.classList.remove("show");
  videoGallery.classList.remove("show");
  webGallery.innerHTML = "";
  portfolioContent[0].forEach((portfolio) => {
    const portfolioItem = document.createElement("div");
    portfolioItem.classList.add("portfolio_item");
    portfolioItem.innerHTML = `<img src="${portfolio.image}" alt="" />
                              <h4>${portfolio.name}</h4>
                              <button onclick="viewPortfolio(0, ${portfolioContent[0].indexOf(
                                portfolio
                              )})">View</button>`;
    webGallery.append(portfolioItem);
  });
}

//
function viewPortfolio(a, b) {
  portfolioViewer.innerHTML = `<span id="close_pv_btn" onclick="closePv()">&times;</span>`;
  portfolioViewer.classList.add("active");
  document.body.style.overflowY = "hidden";
  var portfolioDataArray = portfolioContent[a];
  var portfolioDataArrayIndex = b;
  var portfolioDataset = portfolioDataArray[portfolioDataArrayIndex];
  const portfolioViewerInner = document.createElement("div");
  portfolioViewerInner.classList.add("portfolio_viewer_inner");
  portfolioViewerInner.innerHTML = `<img src="${portfolioDataset.image}" alt="" />
                                    <div class="portfolio_viewer_text">
                                      <h4>${portfolioDataset.name}</h4>
                                      <div class="languages">
                                        ${portfolioDataset.languages}
                                      </div>
                                      <p>
                                        ${portfolioDataset.desc}
                                      </p>
                                      <a href="${portfolioDataset.link}" target='_blank'>View Live</a>
                                    </div>`;
  portfolioViewer.append(portfolioViewerInner);
}

function closePv() {
  portfolioViewer.classList.remove("active");
  document.body.style.overflowY = "initial";
}

function pfoGraphics(e) {
  var clickedBtn = e.target;
  pfoNavBtn.forEach((button) => {
    button.classList.remove("active");
  });
  document.querySelector(".pfoWebBtn").classList.remove("active");
  clickedBtn.classList.add("active");
  photoGallery.classList.add("show");
  webGallery.innerHTML = "";
  videoGallery.classList.remove("show");
}

function pfoVedit(e) {
  var clickedBtn = e.target;
  pfoNavBtn.forEach((button) => {
    button.classList.remove("active");
  });
  clickedBtn.classList.add("active");
  document.querySelector(".pfoWebBtn").classList.remove("active");
  webGallery.innerHTML = "";
  photoGallery.classList.remove("show");
  if (videoGalleryChecked === 0) {
    videoGallery.classList.add("show");
    var portfolioDataset = portfolioContent[1];
    portfolioDataset.forEach((video) => {
      const videoGalleryItem = `<div class="video_gallery_item">
                                  <img src="${video.thumbnail}"/>
                                  <button onclick="viewVideo('${video.link}')"><i class="fa-solid fa-circle-play"></i></button>
                                </div>`;
      videoGallery.insertAdjacentHTML("beforeend", videoGalleryItem);
    });
    videoGalleryChecked = 1;
  } else {
    videoGallery.classList.add("show");
  }
}

function viewVideo(link) {
  var iframes = videoViewer.querySelectorAll("iframe");
  iframes.forEach((iframe) => {
    iframe.remove();
  });
  videoViewer.style.display = "grid";
  document.body.style.overflowY = "hidden";
  loadingText2.style.display = "grid";
  var iframe = `<iframe
                  src="${link}"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>`;
  videoViewer.insertAdjacentHTML("beforeend", iframe);
  setTimeout(() => {
    loadingText2.style.display = "none";
  }, 2500);
}

function closeVv() {
  var iframes = videoViewer.querySelectorAll("iframe");
  iframes.forEach((iframe) => {
    iframe.remove();
  });
  videoViewer.style.display = "none";
  document.body.style.overflowY = "scroll";
}

var videoShowcaseData = [
  {
    thumbnail: "./media/portfolio/ssy_p_thumbnail.png",
    link: "https://www.youtube.com/embed/r-3EZf3oBZ8?autoplay=1",
  },
  {
    thumbnail: "./media/portfolio/vs1.jpg",
    link: "https://www.youtube.com/embed/PL4uP5Ki9cE?autoplay=1",
  },
  {
    thumbnail: "./media/portfolio/vs2.jpg",
    link: "https://www.youtube.com/embed/PEBEKuTEBjU?autoplay=1",
  },
];

loadVideos();

function loadVideos() {
  loadingText1.style.display = "block";
  var index = 1;

  setTimeout(() => {
    videoShowcaseData.forEach((video) => {
      var targetDiv = document.querySelector(`.vci${index}`);
      const videoGalleryItem = `<div class="video_gallery_item">
                                  <img src="${video.thumbnail}"/>
                                  <button onclick="viewVideo('${video.link}')"><i class="fa-solid fa-circle-play"></i></button>
                                </div>`;
      targetDiv.insertAdjacentHTML("afterbegin", videoGalleryItem);
      index++;
      loadingText1.style.display = "none";
    });
  }, 10000);
}
