var interestedSearchButton = document.querySelector(".interested-search-button");
var hotelSearchForm = document.querySelector(".hotel-search");

hotelSearchForm.classList.add("hotel-search-hide");

interestedSearchButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    hotelSearchForm.classList.remove("hotel-search-hide");
    hotelSearchForm.classList.add("hotel-search-show");
});