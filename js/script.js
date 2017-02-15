// Проверка работы javascript
document.body.classList.remove('no-js');

// Объявление переменных
var button = document.querySelector(".search-form-btn");
var form = document.querySelector(".search-form-form");

var checkIn = form.querySelector("[name=check-in]");
var checkOut = form.querySelector("[name=check-out]");
var adult = form.querySelector("[name=adult]");
var child = form.querySelector("[name=child]");

var storageAdult = localStorage.getItem("adult");
var storageChild = localStorage.getItem("child");

// Появление формы поиска при клике на кнопку
button.addEventListener("click", function (event) {
	event.preventDefault();
	
	form.classList.remove("search-form-form-error");
	
	if (form.classList.contains("search-form-form-visible")) {
		form.classList.remove("search-form-form-visible");form.offsetWidth = form.offsetWidth;
		form.classList.add("search-form-form-hidden");
	} else {
		form.classList.remove("search-form-form-hidden");form.offsetWidth = form.offsetWidth;
		form.classList.add("search-form-form-visible");
	}
	
	if (storageAdult || storageChild) {
		adult.value = storageAdult;
		child.value = storageChild;
	}
	
});

// Запрет на отправку формы, если поля не заполнены
form.addEventListener("submit", function (event) {
	if (!checkIn.value || !checkOut.value || !adult.value || !child.value) {
		event.preventDefault();
		form.classList.remove("search-form-form-error");
		form.offsetWidth = form.offsetWidth;
		form.classList.add("search-form-form-error");
	} else {
		localStorage.setItem("adult", adult.value);
		localStorage.setItem("child", child.value);
	}
});