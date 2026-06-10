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
          📍: Ghaziabad, India<br/>
          📞: +91 74538 49001<br/>
          ✉: <a href="mailto:workwitharyan498@gmail.com" style="color: white; text-decoration: none; font-size: 16px;">workwitharyan498@gmail.com</a>
          <br/>
          <div style="margin-bottom: 10px"></div>
          BCA graduate and Full Stack Developer. Currently pursuing a physical training program in MERN Stack at DUCAT to emerge as a Full Stack Web Developer.
          <br/>
          <div style="margin-bottom: 15px"></div>
          🔗: <a href="https://github.com/Aryan-onGithub" target="_blank" class="front_social_link">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/aryan-chandra/" target="_blank" class="front_social_link">
            <i class="fa-brands fa-linkedin-in"></i>
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

// Portfolio preview images: add screenshots/GIFs in ./media and update each image path below.
var portfolioContent = [
  [
    {
      image: "./media/naturesampann.png",
      name: "Nature Sampann Website",
      languages: `<span class="portfolio_tag" style="background-color: #61DAFB; color: black">React</span>
                  <span class="portfolio_tag" style="background-color: #f7df1e; color: black">JavaScript</span>
                  <span class="portfolio_tag" style="background-color: #1572b6; color: white">CSS</span>
                  <span class="portfolio_tag" style="background-color: #25afff; color: white">Responsive</span>
                 `,
      desc: "Developed and maintained the official website for Nature Sampann, an agro-commodity company. Built responsive pages including Products, Gallery, About, and Contact while improving the company's digital presence.",
      link: "https://naturesampann.com",
      github: "",
      featured: true,
      status: "Live"
    },
    {
      image: "./media/neoport.png",
      name: "NeoPort",
      languages: `<span class="portfolio_tag" style="background-color: #61DAFB; color: black">React</span>
                  <span class="portfolio_tag" style="background-color: #38BDF8; color: white">Tailwind CSS</span>
                  <span class="portfolio_tag" style="background-color: #f7df1e; color: black">JavaScript</span>
                 `,
      desc: "Designed and developed a modern startup landing page focused on connecting businesses with digital talent. Built with a strong emphasis on branding, lead generation, and responsive user experience.",
      link: "https://neo-port.netlify.app/",
      github: "",
      featured: true,
      status: "Live"
    },
    {
      image: "./media/atk.png",
      name: "ATK Designs",
      languages: `<span class="portfolio_tag" style="background-color: #61DAFB; color: black">React</span>
                  <span class="portfolio_tag" style="background-color: #f7df1e; color: black">JavaScript</span>
                  <span class="portfolio_tag" style="background-color: #1572b6; color: white">CSS</span>
                 `,
      desc: "Collaborated on the contact section, blog section, and deployment workflow for the ATK Designs website.",
      link: "https://atk-designs.com/",
      github: "",
      featured: false,
      status: "Live"
    },
    {
      image: "./media/quiz_app_type2_ss.png",
      name: "IP Case Tracker",
      languages: `<span class="portfolio_tag" style="background-color: #61DAFB; color: black">React</span>
                  <span class="portfolio_tag" style="background-color: #43853d; color: white">Node.js</span>
                  <span class="portfolio_tag" style="background-color: #303030; color: white">Express</span>
                  <span class="portfolio_tag" style="background-color: #00758f; color: white">SQL</span>
                 `,
      desc: "Developed a case tracking system to manage and monitor intellectual property cases. Implemented CRUD functionality, record handling, and workflow management.",
      link: "",
      github: "",
      featured: true,
      status: "Live"
    },
    {
      image: "./media/clientportfolio.png",
      name: "Client Video Portfolio",
      languages: `<span class="portfolio_tag" style="background-color: #61DAFB; color: black">React</span>
                  <span class="portfolio_tag" style="background-color: #f7df1e; color: black">JavaScript</span>
                  <span class="portfolio_tag" style="background-color: #1572b6; color: white">CSS</span>
                 `,
      desc: "Created a creative portfolio platform to showcase video editing and content creation work. Designed responsive layouts with a strong focus on visual presentation and user engagement.",
      link: "https://parthvideoportfolio.netlify.app/",
      github: "",
      featured: false,
      status: "Live"
    },
    {
      image: "./media/thriftstore.png",
      name: "Thrift Store Platform",
      languages: `<span class="portfolio_tag" style="background-color: #61DAFB; color: black">React</span>
                  <span class="portfolio_tag" style="background-color: #43853d; color: white">Node.js</span>
                  <span class="portfolio_tag" style="background-color: #303030; color: white">Express.js</span>
                  <span class="portfolio_tag" style="background-color: #00758f; color: white">MariaDB</span>
                 `,
      desc: "Developed a full-stack e-commerce platform with authentication, cart, wishlist, and order management features. Optimized performance and backend workflows for scalability.",
      link: "under development",
      github: "",
      featured: false,
      status: "Under Development"
    },
    {
      image: "./media/crudapp.png",
      name: "CRUD Web App",
      languages: `<span class="portfolio_tag" style="background-color: #e34f26; color: white">HTML</span>
                  <span class="portfolio_tag" style="background-color: #1572b6; color: white">CSS</span>
                  <span class="portfolio_tag" style="background-color: #f7df1e; color: black">JavaScript</span>
                 `,
      desc: "Built a responsive task management application with complete CRUD functionality. Users can create, update, delete, and organize tasks efficiently.",
      link: "https://aryan-ongithub.github.io/CRUD-TODO-LIST-webApp/",
      github: "https://github.com/Aryan-onGithub/CRUD-TODO-LIST-webApp/",
      featured: false,
      status: "Live"
    },
    {
      image: "./media/ultraedit.png",
      name: "UltraEdit Clone",
      languages: `<span class="portfolio_tag" style="background-color: #e34f26; color: white">HTML</span>
                  <span class="portfolio_tag" style="background-color: #1572b6; color: white">CSS</span>
                 `,
      desc: "Recreated the UltraEdit download page with a pixel-perfect responsive layout. Focused on frontend accuracy, UI replication, and clean code structure.",
      link: "",
      github: "https://github.com/Aryan-onGithub/UltraEdit-Download-Section-Clone",
      featured: false,
      status: "Live"
    },
    {
      image: "./media/EVgif.gif",
      name: "EV Concept Website",
      languages: `<span class="portfolio_tag" style="background-color: #e34f26; color: white">HTML</span>
                  <span class="portfolio_tag" style="background-color: #1572b6; color: white">CSS</span>
                 `,
      desc: "Developed a responsive EV concept website with Home, Features, Accessory, and Team pages. Integrated hover animations for a faster, engaging frontend experience.",
      link: "https://aryan-ongithub.github.io/responsive-E-scooter-concept-website/",
      github: "https://github.com/Aryan-onGithub/responsive-E-scooter-concept-website",
      featured: false,
      status: "Live"
    }
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
    
    // Add featured badge if featured
    const featuredBadge = portfolio.featured 
      ? `<span class="featured-badge" style="position: absolute; top: 10px; right: 10px; background: #ff0077; color: white; padding: 2px 8px; font-size: 0.8rem; font-weight: bold; border-radius: 3px; box-shadow: 0 0 10px #ff0077; font-family: 'Ubuntu Mono', sans-serif; z-index: 2;">FEATURED</span>`
      : '';
      
    // Status text
    const statusBadge = `<span style="display: inline-block; background: ${portfolio.status === 'Live' ? '#10B981' : '#F59E0B'}; color: white; padding: 2px 6px; font-size: 0.75rem; font-weight: bold; border-radius: 3px; font-family: 'Ubuntu Mono', sans-serif; vertical-align: middle; margin-left: 5px;">${portfolio.status}</span>`;

    portfolioItem.style.position = "relative";
    portfolioItem.style.display = "flex";
    portfolioItem.style.flexDirection = "column";
    portfolioItem.style.justifyContent = "space-between";
    portfolioItem.style.color = "#030303";
    portfolioItem.style.paddingBottom = "15px";
    portfolioItem.style.borderRadius = "5px";
    portfolioItem.style.overflow = "hidden";

    portfolioItem.innerHTML = `
      ${featuredBadge}
      <img src="${portfolio.image}" alt="${portfolio.name}" style="width: 100%; height: 160px; object-fit: cover;" />
      <div style="padding: 15px; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between; gap: 10px;">
        <div>
          <h4 style="font-size: 20px; font-weight: bold; color: #030303; margin: 0; text-align: left; display: flex; align-items: center; justify-content: flex-start; flex-wrap: wrap; gap: 5px; min-height: 40px; font-family: 'Ubuntu Mono', sans-serif;">
            ${portfolio.name} ${statusBadge}
          </h4>
          <p style="font-size: 0.95rem; color: #1a1a1a; margin: 8px 0 0; text-align: left; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; height: 4.2em;">
            ${portfolio.desc}
          </p>
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 4px; margin-top: 5px; height: 35px; overflow: hidden; align-content: flex-start;">
          ${portfolio.languages}
        </div>
      </div>
      <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 8px; padding: 0 15px; margin-top: auto;">
        <button class="portfolio_item_btn portfolio_item_btn_details" onclick="viewPortfolio(0, ${portfolioContent[0].indexOf(portfolio)})">Details</button>
        ${portfolio.link && portfolio.link !== '#' && portfolio.link !== 'under development' ? `<a class="portfolio_item_btn portfolio_item_btn_demo" href="${portfolio.link}" target="_blank">Live Demo</a>` : ''}
        ${portfolio.github ? `<a class="portfolio_item_btn portfolio_item_btn_github" href="${portfolio.github}" target="_blank"><i class="fa-brands fa-github"></i> GitHub</a>` : ''}
      </div>`;
      
    webGallery.append(portfolioItem);
  });
}

function viewPortfolio(a, b) {
  portfolioViewer.innerHTML = `<span id="close_pv_btn" onclick="closePv()">&times;</span>`;
  portfolioViewer.classList.add("active");
  document.body.style.overflowY = "hidden";
  var portfolioDataArray = portfolioContent[a];
  var portfolioDataArrayIndex = b;
  var portfolioDataset = portfolioDataArray[portfolioDataArrayIndex];
  const portfolioViewerInner = document.createElement("div");
  portfolioViewerInner.classList.add("portfolio_viewer_inner");
  
  const liveDemoBtn = portfolioDataset.link && portfolioDataset.link !== '#' && portfolioDataset.link !== 'under development'
    ? `<a class="portfolio_item_btn portfolio_item_btn_demo" href="${portfolioDataset.link}" target="_blank" style="background: #00f7ff; color: #030303; border-color: #00f7ff; padding: 8px 20px; font-size: 16px;">Live Demo</a>`
    : '';
    
  const githubBtn = portfolioDataset.github
    ? `<a class="portfolio_item_btn portfolio_item_btn_github" href="${portfolioDataset.github}" target="_blank" style="border: 2px solid #00f7ff; color: #fff; background: transparent; padding: 8px 20px; font-size: 16px; display: inline-flex; align-items: center; justify-content: center; gap: 5px;">
        <i class="fa-brands fa-github"></i> Code Repository
       </a>`
    : '';

  portfolioViewerInner.innerHTML = `<img src="${portfolioDataset.image}" alt="" />
                                    <div class="portfolio_viewer_text">
                                      <h4 style="display: flex; align-items: center; gap: 10px; font-size: 2.2rem; font-weight: bold; color: #00f7ff; margin-bottom: 5px;">
                                        ${portfolioDataset.name}
                                        <span style="background: ${portfolioDataset.status === 'Live' ? '#10B981' : '#F59E0B'}; color: white; padding: 3px 8px; font-size: 0.9rem; font-weight: bold; border-radius: 3px; font-family: 'Ubuntu Mono', sans-serif; display: inline-block;">${portfolioDataset.status}</span>
                                      </h4>
                                      <div class="languages" style="margin-bottom: 15px; display: flex; flex-wrap: wrap; gap: 5px;">
                                        ${portfolioDataset.languages}
                                      </div>
                                      <p style="color: #c3fdff; font-size: 1.2rem; text-align: left; line-height: 25px; margin-bottom: 20px;">
                                        ${portfolioDataset.desc}
                                      </p>
                                      <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                                        ${liveDemoBtn}
                                        ${githubBtn}
                                      </div>
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
      if (targetDiv) {
        const videoGalleryItem = `<div class="video_gallery_item">
                                    <img src="${video.thumbnail}"/>
                                    <button onclick="viewVideo('${video.link}')"><i class="fa-solid fa-circle-play"></i></button>
                                  </div>`;
        targetDiv.insertAdjacentHTML("afterbegin", videoGalleryItem);
      }
      index++;
      loadingText1.style.display = "none";
    });
  }, 10000);
}
