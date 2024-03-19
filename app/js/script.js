"use strict";

const title = document.querySelector(".tab-title");
const description = document.querySelector(".tab-description");

const information = {
  register: {
    title: "Tabs with soft transitioning effect. Explained propriety of out perpetual his you.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes. <br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
  },

  apply: {
    title: "Tabs with gentle transitioning effect. Clarified propriety of our eternal his yours.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes. <br><br> Lorem ipsum dolor sit amet."
  },

  receive: {
    title: "Tabs with smooth transitioning effect. Elucidated appropriateness of our everlasting his yours.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus."
  },
}

const tab_update = (param) => {
  title.innerHTML = `<h2>${information[param].title}</h2>`;
  description.innerHTML = `<p>${information[param].description}</p>`;
}

// -------------------------------------------------

const first_name = document.querySelector("#first_name");
const last_name = document.querySelector("#last_name");
const tel_nr = document.querySelector("#tel_nr");

const send_form = () => {
    if (first_name.value === "" || last_name.value === "" || tel_nr.value === "") return alert("Please enter all credentials");

    return alert(`First name: ${first_name.value}\nLast name: ${last_name.value}\nPhone nr: ${tel_nr.value}`);
}

//?--------------------------------------------

const name_first = document.querySelector("#name_first");
const name_last = document.querySelector("#name_last");
const number = document.querySelector("#number");

const form_send2 = () => {
    if (name_first.value === "" || name_last.value === "" || number.value === "") return alert("Please enter all credentials");

    return alert(`First name: ${name_first.value}\nLast name: ${name_last.value}\nPhone nr: ${number.value}`);
}

//?-------------------------------------

// const reviews = new slider("#slider", {

//   direction: "horizontal",
//   loop: true,
//   spaceBetween: 20,

//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: true,
//   },


//   pagination: {
//     el: ".reviews-pagination",
//   },


//   navigation: {
//     nextEl: ".reviews-button-next",
//     prevEl: ".reviews-button-prev",
//   },

//   breakpoints: {
//     600: {
//       slidePerView: 2,
//       slidePerGroup: 2,
//       allowSlideNext: true,
//       allowSlidePrev: true,
//     },

//     1000: {
//       slidePerView: 3,
//       slidePerGroup: 3,
//       allowSlideNext: false,
//       allowSlidePrev: false,
//       autoplay: false,
//       loop: false,
//     },
//   },
// });

//??--------------------

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".customers-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

//?---------------------------------

document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('.link a');

  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});