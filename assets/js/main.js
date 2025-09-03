(function ($) {
  "use strict";

  /*=============================================
	=    		 Preloader			      =
=============================================*/
  function preloader() {
    $("#preloader").delay(0).fadeOut();
  }

  $(window).on("load", function () {
    preloader();
    wowAnimation();
    aosAnimation();
  });

  /*===========================================
	=    		Mobile Menu			      =
=============================================*/
  //SubMenu Dropdown Toggle
  if ($(".tgmenu__wrap li.menu-item-has-children ul").length) {
    $(".tgmenu__wrap .navigation li.menu-item-has-children").append(
      '<div class="dropdown-btn"><span class="plus-line"></span></div>'
    );
  }

  //Mobile Nav Hide Show
  if ($(".tgmobile__menu").length) {
    var mobileMenuContent = $(".tgmenu__wrap .tgmenu__main-menu").html();
    $(".tgmobile__menu .tgmobile__menu-box .tgmobile__menu-outer").append(
      mobileMenuContent
    );

    //Dropdown Button
    $(".tgmobile__menu li.menu-item-has-children .dropdown-btn").on(
      "click",
      function () {
        $(this).toggleClass("open");
        $(this).prev("ul").slideToggle(300);
      }
    );
    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });

    //Menu Toggle Btn
    $(".tgmobile__menu-backdrop, .tgmobile__menu .close-btn").on(
      "click",
      function () {
        $("body").removeClass("mobile-menu-visible");
      }
    );
  }

  /*=============================================
	=           Data Background             =
=============================================*/
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  /*===========================================
	=     Menu sticky & Scroll to top      =
=============================================*/
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $("#sticky-header").removeClass("sticky-menu");
      $(".scroll-to-target").removeClass("open");
      $("#header-fixed-height").removeClass("active-height");
    } else {
      $("#sticky-header").addClass("sticky-menu");
      $(".scroll-to-target").addClass("open");
      $("#header-fixed-height").addClass("active-height");
    }
  });

  /*===========================================
	   =         Sticky Menu     =
=============================================*/
  function stickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $headerID = $("#sticky-header");
    var headerHeight = $headerID.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $headerID.addClass("tg-sticky-menu");
      } else {
        $headerID.removeClass("tg-sticky-menu");
        $headerID.removeClass("sticky-menu__show");
      }

      if ($headerID.hasClass("tg-sticky-menu")) {
        if (windowTop < lastScrollTop) {
          $headerID.addClass("sticky-menu__show");
        } else {
          $headerID.removeClass("sticky-menu__show");
        }
      }

      lastScrollTop = windowTop;
    });
  }
  stickyHeader();

  /*=============================================
	=    		 Scroll Up  	         =
=============================================*/
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }

  /*=============================================
	=            Header Search            =
=============================================*/
  $(".search-open-btn").on("click", function () {
    $(".search__popup").addClass("search-opened");
    $(".search-popup-overlay").addClass("search-popup-overlay-open");
  });
  $(".search-close-btn").on("click", function () {
    $(".search__popup").removeClass("search-opened");
    $(".search-popup-overlay").removeClass("search-popup-overlay-open");
  });

  /*=============================================
=     Offcanvas Menu      =
=============================================*/
  $(".menu-tigger").on("click", function () {
    $(".offCanvas__info, .offCanvas__overly").addClass("active");
    return false;
  });
  $(".menu-close, .offCanvas__overly").on("click", function () {
    $(".offCanvas__info, .offCanvas__overly").removeClass("active");
  });

  /*=============================================
	=          Slider active              =
=============================================*/
  // ...existing code...
  var swiper2 = new Swiper(".slider__active", {
    spaceBetween: 0,
    effect: "slide",
    loop: true,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper = new Swiper(".services__slider", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 24,
    loop: true, // very important
    loopFillGroupWithBlank: true, // fills last group with empty slide to keep layout clean
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: { slidesPerView: 4 },
      992: { slidesPerView: 2 },
      576: { slidesPerView: 1 },
    },
  });

  /*=============================================
	=          Slider active              =
=============================================*/
  var swiper2 = new Swiper(".slider__active-two", {
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 3000,
    },
  });

  /*=============================================
	=          brand active              =
=============================================*/
  var slider = new Swiper(".brand-active", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 6,
      },
      992: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 4,
      },
      576: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 2,
      },
    },
  });

  /*=============================================
	=          Project Active              =
=============================================*/
  var projectSlider = new Swiper(".project-active", {
    slidesPerView: 3,
    spaceBetween: 24,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 1.3,
      },
      0: {
        slidesPerView: 1,
      },
    },
    pagination: {
      el: ".project__nav",
      clickable: true,
    },
  });

  /*=============================================
	=          Project Active              =
=============================================*/
  var projectSlider = new Swiper(".project-active-two", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  /*=============================================
	=          Project Active              =
=============================================*/
  var projectSlider = new Swiper(".project-active-three", {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
      1500: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  /*=============================================
	=          testimonial active              =
=============================================*/
  var swiper = new Swiper(".testimonial__nav", {
    spaceBetween: 0,
    slidesPerView: 4,
  });
  var swiper2 = new Swiper(".testimonial-active", {
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 6000,
    },
    thumbs: {
      swiper: swiper,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".testimonial-button-next",
      prevEl: ".testimonial-button-prev",
    },
  });

  /*=============================================
	=        progress-bar	       =
=============================================*/
  $(".progress-bar").waypoint(
    function () {
      $(".progress-bar").css({
        animation: "animate-positive 1.8s",
        opacity: "1",
      });
    },
    { offset: "75%" }
  );

  /*=============================================
	=        Counter Up 	       =
=============================================*/
  $(".counter-number").counterUp({
    delay: 10,
    time: 1000,
  });

  /*===========================================
=         Marquee Active         =
=============================================*/
  if ($(".marquee_mode").length) {
    $(".marquee_mode").marquee({
      speed: 35,
      gap: 0,
      delayBeforeStart: 0,
      direction: "left",
      duplicated: true,
      pauseOnHover: true,
      startVisible: true,
    });
  }

  /*=============================================
	=    	 Slider Range Active             =
=============================================*/
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 6000,
    values: [0, 3500],
    slide: function (event, ui) {
      $("#amount").val(ui.values[0] + " - " + ui.values[1] + " km");
    },
  });
  $("#amount").val(
    $("#slider-range").slider("values", 0) +
      " - " +
      $("#slider-range").slider("values", 1) +
      " km"
  );

  /*=============================================
	=    		Magnific Popup		      =
=============================================*/
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  /*=============================================
	=    		 Wow Active  	         =
=============================================*/
  function wowAnimation() {
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }

  /*=============================================
	=           Aos Active       =
=============================================*/
  function aosAnimation() {
    AOS.init({
      duration: 1000,
      mirror: true,
      once: true,
      disable: "mobile",
    });
  }
})(jQuery);

const startYear = 1982;

const currentYear = new Date().getFullYear();

const experienceYears = currentYear - startYear;

document.getElementById("experience-years").textContent = experienceYears;
document.getElementById("about-years").textContent = experienceYears;

document.addEventListener("DOMContentLoaded", function () {
  const servicesData = {
    ocean: {
      title: "Ocean Freight",
      image: "assets/img/services/services_img01.jpg",
      description:
        "Shipping freight refers to transporting large quantities of goods by sea. We handle booking, logistics, customs, and delivery.",
      extra: `
        <div class="services__details-content-inner">
          <h2 class="title-two">Global Shipping Excellence</h2>
          <p>We provide full-container and less-than-container load shipping across all major ports worldwide.</p>
        </div>
      `,
    },
    air: {
      title: "Air Freight",
      image: "assets/img/services/services_img03.jpg",
      description:
        "Fast and reliable air freight with global coverage. Perfect for urgent or high-value cargo.",
      extra: `
        <div class="services__details-content-inner">
          <h2 class="title-two">Priority & Express Cargo</h2>
          <p>Offering secure and fast delivery by air, including express handling and priority routes.</p>
        </div>
      `,
    },
    multi: {
      title: "Multimodal / Intermodal",
      image: "assets/img/services/Multimodal.jpg", // use the correct filename you have
      description:
        "Integrated transport solutions using rail, road, sea, and air for maximum efficiency.",
      extra: `<p>Our multimodal solutions ensure optimized costs and seamless transitions across transport modes.</p>`,
    },
    customs: {
      title: "Customs Clearance",
      image: "assets/img/services/customs-clearance.jpg",
      description:
        "Efficient customs clearance services that simplify cross-border logistics.",
      extra: `<p>We handle import/export compliance, paperwork, and customs duties with precision.</p>`,
    },
    warehouse: {
      title: "Warehouse",
      image: "assets/img/services/Warehouse.jpg",
      description:
        "Modern storage facilities with climate control, inventory tracking, and security.",
      extra: `<p>Our warehouses support just-in-time delivery and supply chain optimization.</p>`,
    },
    project: {
      title: "Project Cargo",
      image: "assets/img/services/Project-cargo-(2).jpg",
      description:
        "Specialized handling for oversized, heavy, and complex cargo.",
      extra: `<p>From planning to execution, we manage heavy-lift and out-of-gauge shipments worldwide.</p>`,
    },
  };

  // Helper - get serviceKey from URL (fallback to ocean)
  function getServiceFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const s = urlParams.get("service");
    return s && s.trim().toLowerCase() in servicesData
      ? s.trim().toLowerCase()
      : "ocean";
  }

  // DOM refs
  const titleEl = document.getElementById("service-title");
  const imageEl = document.getElementById("service-image");
  const descEl = document.getElementById("service-description");
  const extraEl = document.getElementById("service-extra");
  const sidebarLinks = document.querySelectorAll(
    ".services__cat-list a[data-service]"
  );

  // Apply active class to sidebar
  function setActiveSidebar(serviceKey) {
    sidebarLinks.forEach((a) => {
      const key = a.dataset.service;
      if (key === serviceKey) {
        a.classList.add("active");
        a.setAttribute("aria-current", "true");
      } else {
        a.classList.remove("active");
        a.removeAttribute("aria-current");
      }
    });
  }

  // Load and render a service (optionally push history)
  function loadService(serviceKey, pushHistory = false) {
    const s = servicesData[serviceKey] || servicesData["ocean"];
    if (titleEl) titleEl.textContent = s.title;
    if (imageEl) imageEl.src = s.image;
    if (descEl) descEl.textContent = s.description;
    if (extraEl) extraEl.innerHTML = s.extra || "";

    setActiveSidebar(serviceKey);

    if (pushHistory) {
      const newUrl = `${location.pathname}?service=${serviceKey}`;
      history.pushState({ service: serviceKey }, s.title, newUrl);
    }
  }

  // Sidebar click (single delegated handler)
  const sidebarContainer = document.querySelector(".services__cat-list");
  if (sidebarContainer) {
    sidebarContainer.addEventListener("click", function (ev) {
      const a = ev.target.closest("a[data-service]");
      if (!a) return; // clicked outside link
      ev.preventDefault();
      const key = a.dataset.service;
      loadService(key, true);
      // optional: scroll to top of main content
      const main = document.getElementById("service-main");
      if (main) main.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Handle browser back/forward
  window.addEventListener("popstate", function (ev) {
    const key = getServiceFromUrl();
    loadService(key, false);
  });

  // Initial load
  const initialServiceKey = getServiceFromUrl();
  loadService(initialServiceKey, false);
});
