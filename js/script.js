const interestedSearchButton = document.querySelector(".interested-search-button");
const hotelSearchForm = document.querySelector(".hotel-search");
const arrivalDate = hotelSearchForm.querySelector(".arrival-date-input");
const departureDate = hotelSearchForm.querySelector(".departure-date-input");
const adultsQuantity = hotelSearchForm.querySelector(".adults input");
const childsQuantity = hotelSearchForm.querySelector(".childs input");
const interactiveMap = document.querySelector(".interactive-map");
const staticMap = document.querySelector(".map img");

hotelSearchForm.classList.add("hide-element");
staticMap.classList.add("hide-element");
interactiveMap.classList.add("map-show");

var isStorageSupport = true;
var adultsStorage = "";
var childsStorage = "";

try {
    adultsStorage = localStorage.getItem("adults");
    childsStorage = localStorage.getItem("childs");
} catch (err) {
    isStorageSupport = false;
}

interestedSearchButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (hotelSearchForm.classList.contains("hotel-search-show")) {
        hotelSearchForm.classList.remove("hotel-search-show");
        hotelSearchForm.classList.add("hide-element");
    } else {
        hotelSearchForm.classList.remove("hide-element");
        hotelSearchForm.classList.add("hotel-search-show");
    }

    arrivalDate.focus();

    if (adultsStorage) {
        adultsQuantity.value = adultsStorage;
    }

    if (childsStorage) {
        childsQuantity.value = childsStorage;
    }
});

hotelSearchForm.addEventListener("submit", function (evt) {
    if (!adultsQuantity.value || !childsQuantity.value || !arrivalDate.value || !departureDate.value) {
        evt.preventDefault();
        hotelSearchForm.classList.add("hotel-search-error");
    } else {
        localStorage.setItem("adults", adultsQuantity.value);
        localStorage.setItem("childs", childsQuantity.value);
        hotelSearchForm.classList.remove("hotel-search-error");
    }
});