document.addEventListener('DOMContentLoaded', (event) => {
    let tabLinks = document.getElementsByClassName('tab-control')[0].children;
    for (let i = 0; i < tabLinks.length; i++) {
        if (tabLinks[i].id === "tab-hotels") {

            if (!tabLinks[i].classList.contains("active-hotels")) {
                tabLinks[i].classList.add("active-hotels");
            }
        }

        if (tabLinks[i].id === "tab-flights") {
            if (tabLinks[i].classList.contains("active-flights")) {
                tabLinks[i].classList.remove("active-flights");
            }
            if (!tabLinks[i].classList.contains("inactive-flights")) {
                tabLinks[i].classList.add("inactive-flights");
            }
            document.getElementById("flights").style.display = "none";
        }

        if (tabLinks[i].id === "tab-packages") {
            if (tabLinks[i].classList.contains("active-packages")) {
                tabLinks[i].classList.remove("active-packages");
            }
            if (!tabLinks[i].classList.contains("inactive-packages")) {
                tabLinks[i].classList.add("inactive-packages");
            }
            document.getElementById("packages").style.display = "none";
        }

        if (tabLinks[i].id === "tab-car-rental") {
            if (tabLinks[i].classList.contains("active-car-rental")) {
                tabLinks[i].classList.remove("active-car-rental");
            }
            if (!tabLinks[i].classList.contains("inactive-car-rental")) {
                tabLinks[i].classList.add("inactive-car-rental");
            }
            document.getElementById("car-rental").style.display = "none";
        }

        if (tabLinks[i].id === "tab-adventure-tickets") {
            if (tabLinks[i].classList.contains("active-adventure-tickets")) {
                tabLinks[i].classList.remove("active-adventure-tickets");
            }
            if (!tabLinks[i].classList.contains("inactive-adventure-tickets")) {
                tabLinks[i].classList.add("inactive-adventure-tickets");
            }
            document.getElementById("adventure-tickets").style.display = "none";
        }
    }
    let container = document.getElementById("transparent-container");
    if (!container.classList.contains("transparent-container-inactive")) {
        container.classList.add("transparent-container-inactive");
    }
    container = document.getElementsByClassName("pop-up")[0];
    if (!container.classList.contains("pop-up-inactive")) {
        container.classList.add("pop-up-inactive");
    }
})

function ontabClick(event, id) {
    var i, tabLinks, tabList, elementList, activeClass;

    tabList = document.getElementsByClassName("tab-content");

    for (i = 0; i < tabList.length; i++) {
        tabList[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName('tab-control')[0].children;

    for (i = 0; i < tabLinks.length; i++) {
        activeClass = tabLinks[i].id;

        if (tabLinks[i].classList.contains("active-hotels")) {
            tabLinks[i].classList.remove("active-hotels");
            tabLinks[i].classList.add("inactive-hotels");
            document.getElementById("hotels").style.display = "none";
        }
        else if (tabLinks[i].classList.contains("active-flights")) {
            tabLinks[i].classList.remove("active-flights");
            tabLinks[i].classList.add("inactive-flights");
            document.getElementById("flights").style.display = "none";
        }
        else if (tabLinks[i].classList.contains("active-packages")) {
            tabLinks[i].classList.remove("active-packages");
            tabLinks[i].classList.add("inactive-packages");
            document.getElementById("packages").style.display = "none";
        }
        else if (tabLinks[i].classList.contains("active-car-rental")) {
            tabLinks[i].classList.remove("active-car-rental");
            tabLinks[i].classList.add("inactive-car-rental");
            document.getElementById("car-rental").style.display = "none";
        }
        else if (tabLinks[i].classList.contains("active-adventure-tickets")) {
            tabLinks[i].classList.remove("active-adventure-tickets");
            tabLinks[i].classList.add("inactive-adventure-tickets");
            document.getElementById("adventure-tickets").style.display = "none";
        }

    }
    
    document.getElementById(id).style.display = "flex";
    if (event.currentTarget.classList.contains("inactive-" + id)) {
        event.currentTarget.classList.remove("inactive-" + id);
    }
    event.currentTarget.classList.add("active-" + id);
    
}

function onRequestQuoteClick(event, id) {

    let container = document.getElementById("transparent-container");
    if (container.classList.contains("transparent-container-inactive")) {
        container.classList.remove("transparent-container-inactive");
    }
    if (!container.classList.contains("transparent-container-active")) {
        container.classList.add("transparent-container-active");
    }

    container = document.getElementsByClassName("pop-up")[0];
    if (container.classList.contains("pop-up-inactive")) {
        container.classList.remove("pop-up-inactive");
    }
    if (!container.classList.contains("pop-up-active")) {
        container.classList.add("pop-up-active");
    }
}

function onCloseClick(event){
    let container = document.getElementById("transparent-container");
    if (!container.classList.contains("transparent-container-inactive")) {
        container.classList.add("transparent-container-inactive");
    }
    container = document.getElementsByClassName("pop-up")[0];
    if (!container.classList.contains("pop-up-inactive")) {
        container.classList.add("pop-up-inactive");
    }
}