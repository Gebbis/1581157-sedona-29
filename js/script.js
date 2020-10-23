const interestedSearchButton = document.querySelector(".interested-search-button");
const hotelSearchForm = document.querySelector(".hotel-search");
const arrivalDate = hotelSearchForm.querySelector(".arrival-date-input");
const adultsQuantity = hotelSearchForm.querySelector(".adults input");
const childsQuantity = hotelSearchForm.querySelector(".childs input");

hotelSearchForm.classList.add("hotel-search-hide");

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
    hotelSearchForm.classList.remove("hotel-search-hide");
    hotelSearchForm.classList.add("hotel-search-show");
    arrivalDate.focus();

    if (adultsStorage) {
        adultsQuantity.value = adultsStorage;
    }

    if (childsStorage) {
        childsQuantity.value = childsStorage;
    }
});

hotelSearchForm.addEventListener("submit", function (evt) {
    if (!adultsQuantity.value && !childsQuantity.value) {
        evt.preventDefault();
        hotelSearchForm.classList.add("hotel-search-error");
    } else {
        localStorage.setItem("adults", adultsQuantity.value);
        localStorage.setItem("childs", childsQuantity.value);
        hotelSearchForm.classList.remove("hotel-search-error");
    }
});