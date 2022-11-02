import Dropdown from 'bootstrap/js/dist/dropdown'

window.$ = window.jQuery = require('jquery');

$(function () {
    $('.menu_container>ul').hover(
        function () {
            $('ul', this).slideDown(0);
        },
        function () {
            $('ul', this).slideUp(0);
        }
    );
});

// copyright year
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

// footer_dropdown
const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
dropdownElementList.map(function (dropdownToggleEl) {
    return new Dropdown.Dropdown(dropdownToggleEl)
})