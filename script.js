const heroSection = document.querySelector(".hero-section");
const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (!entry.isIntersecting) document.body.classList.add("sticky");
    else document.body.classList.remove("sticky");
  },
  { root: null, threshold: 0 }
);
observer.observe(heroSection);
const inputElements = document.querySelectorAll(".tab-option-body input");

inputElements.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.stopPropagation();
    setFocus(event);
  });
});

const buttonelements = document.querySelectorAll(".tab-option-body button");

buttonelements.forEach((butElement) => {
  butElement.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

const hideTabsBody = (showClass = "show-fields", hideClass = "hide-fields") => {
  const visibleTabs = document.querySelectorAll(`.${showClass}`);
  visibleTabs.forEach((item) => {
    item.classList.remove(`${showClass}`);
    if (!item.classList.contains(`${hideClass}`)) {
      item.classList.add(`${hideClass}`);
    }
  });
};

const showElement = (
  elementClass = "tab-fields",
  showClass = "show-init",
  hideClass = "hide-init"
) => {
  const element = document.querySelector(`.${elementClass}`);
  if (element.classList.contains(`${hideClass}`))
    element.classList.remove(`${hideClass}`);
  if (!element.classList.contains(`${showClass}`))
    element.classList.add(`${showClass}`);
};

const actvateTab = (tabID) => {
  const activeTab = document.querySelector(`#${tabID}`);
  if (!activeTab.classList.contains("active"))
    activeTab.classList.add("active");
};

const deactivateTabs = () => {
  const activeTabs = document.querySelectorAll(".active");
  activeTabs.forEach((activeTab) => {
    activeTab.classList.remove("active");
  });
};

const setFocus = (event) => {
  const element = document.querySelector(`#${event.target.id}`);
  element.focus();
};

window.addEventListener("resize", (event) => {
  const currentWidth = parseFloat(
    window.innerWidth /
      parseFloat(getComputedStyle(document.querySelector("body"))["font-size"])
  ).toFixed(2);

  if (currentWidth > 60.42) {
    hideTabsBody();
    const tab_fields_init = document.querySelector(".tab-fields");
    if (tab_fields_init.classList.contains("hide-init")) {
      tab_fields_init.classList.remove("hide-init");
    }
    if (!tab_fields_init.classList.contains("show-init")) {
      tab_fields_init.classList.add("show-init");
    }
  } else {
    const activeElements = document.querySelectorAll(".active");
    activeElements.forEach((activeElement) => {
      activeElement.classList.remove("active");
    });
  }
});

const handleClick = (event) => {
  const currentWidth = parseFloat(
    window.innerWidth /
      parseFloat(getComputedStyle(document.querySelector("body"))["font-size"])
  ).toFixed(2);

  hideTabsBody();
  // const option_fields = document.querySelector(
  //   `#${event.target.id} .tab-option-body`
  // );

  if (currentWidth <= 60.42) {
    let targetElement = event.target.id;
    console.log(event.target.parentElement.id);
    if (event.target.classList.contains("icon")) {
      targetElement = event.target.parentElement.id;
    }
    // console.log(document.querySelector(`#${event.target.id}`).nodeName);

    const option_fields = document.querySelector(
      // `#${event.target.id} .tab-option-body`
      `#${targetElement} .tab-option-body`
    );
    // const container = document.querySelector(`#${event.target.id}`);
    const siblings = document.querySelectorAll(`.tab-option`);

    siblings.forEach((element) => {
      const img = document.querySelector(`#${element.id} img`);
      switch (element.id) {
        case "tab-hotels":
          if (targetElement === "tab-hotels") {
            img.src = "images/icons/bed-active.png";
          } else {
            img.src = "images/icons/bed-inactive.png";
          }
          break;
        case "tab-flights":
          if (targetElement === "tab-flights") {
            img.src = "images/icons/departures-active.png";
          } else {
            img.src = "images/icons/departures-inactive.png";
          }
          break;
        case "tab-packages":
          if (targetElement === "tab-packages") {
            img.src = "images/icons/box-active.png";
          } else {
            img.src = "images/icons/box-inactive.png";
          }
          break;
        case "tab-car-rental":
          if (targetElement === "tab-car-rental") {
            img.src = "images/icons/car-active.png";
          } else {
            img.src = "images/icons/car-inactive.png";
          }
          break;
        case "tab-adventure-tickets":
          if (targetElement === "tab-adventure-tickets") {
            img.src = "images/icons/ticket-active.png";
          } else {
            img.src = "images/icons/ticket-inactive.png";
          }
          break;
        default:
          break;
      }
    });
    deactivateTabs();
    actvateTab(targetElement);

    if (!option_fields.classList.contains("show-fields"))
      option_fields.classList.add("show-fields");
    if (option_fields.classList.contains("hide-fields"))
      option_fields.classList.remove("hide-fields");
  } else {
    switch (targetElement) {
      case "tab-hotels":
        hideTabsBody("show-init", "hide-init");
        showElement();
        deactivateTabs();
        // actvateTab(event.target.id);
        actvateTab(targetElement);

        const hotel_section = document.querySelector("#hotel-section-init");
        if (hotel_section.classList.contains("hide-init"))
          hotel_section.classList.remove("hide-init");
        if (!hotel_section.classList.contains("show-init"))
          hotel_section.classList.add("show-init");
        break;

      case "tab-flights":
        hideTabsBody("show-init", "hide-init");
        showElement();
        deactivateTabs();
        // actvateTab(event.target.id);
        actvateTab(targetElement);

        const flight_section = document.querySelector("#flight-section-init");
        if (flight_section.classList.contains("hide-init"))
          flight_section.classList.remove("hide-init");
        if (!flight_section.classList.contains("show-init"))
          flight_section.classList.add("show-init");
        break;

      case "tab-packages":
        hideTabsBody("show-init", "hide-init");
        showElement();
        deactivateTabs();
        // actvateTab(event.target.id);
        actvateTab(targetElement);

        const package_section = document.querySelector("#package-section-init");
        if (package_section.classList.contains("hide-init"))
          package_section.classList.remove("hide-init");
        if (!package_section.classList.contains("show-init"))
          package_section.classList.add("show-init");
        break;

      case "tab-car-rental":
        hideTabsBody("show-init", "hide-init");
        showElement();
        deactivateTabs();
        // actvateTab(event.target.id);
        actvateTab(targetElement);

        const rental_section = document.querySelector("#rental-section-init");
        if (rental_section.classList.contains("hide-init"))
          rental_section.classList.remove("hide-init");
        if (!rental_section.classList.contains("show-init"))
          rental_section.classList.add("show-init");
        break;

      case "tab-adventure-tickets":
        hideTabsBody("show-init", "hide-init");
        showElement();
        deactivateTabs();
        // actvateTab(event.target.id);
        actvateTab(targetElement);

        const adv_section = document.querySelector("#adv-section-init");
        if (adv_section.classList.contains("hide-init"))
          adv_section.classList.remove("hide-init");
        if (!adv_section.classList.contains("show-init"))
          adv_section.classList.add("show-init");
        break;
      default:
        break;
    }
  }
};

const tab_option_hotel = document.querySelector("#tab-hotels");
const tab_option_flight = document.querySelector("#tab-flights");
const tab_option_packages = document.querySelector("#tab-packages");
const tab_option_car_rental = document.querySelector("#tab-car-rental");
const tab_option_adventure_tickets = document.querySelector(
  "#tab-adventure-tickets"
);

tab_option_hotel.addEventListener("click", (event) => {
  handleClick(event);
});

tab_option_flight.addEventListener("click", (event) => {
  handleClick(event);
});

tab_option_car_rental.addEventListener("click", (event) => {
  handleClick(event);
});

tab_option_packages.addEventListener("click", (event) => {
  handleClick(event);
});

tab_option_adventure_tickets.addEventListener("click", (event) => {
  handleClick(event);
});
