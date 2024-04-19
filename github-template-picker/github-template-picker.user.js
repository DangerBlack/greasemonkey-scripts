// ==UserScript==
// @name     GithubTemplatePicker
// @version  1
// @grant    none
// @include  https://github.com/cubbit/cubbit/compare/*
// ==/UserScript==


document.addEventListener("DOMContentLoaded", function () {
  const result = {options: [
    '',
    'MY_CUSTOM_TEMPLATE.md',
  ]}
  
  const urlParams = new URLSearchParams(window.location.search);
	const myParam = urlParams.get('template');
  
  if(myParam === null) {
    var selectedOption = result.options[0];
    var url = new URL(window.location.href);
    url.searchParams.set("template", selectedOption);
    window.location.href = url.toString();
    
  }
  
  var dropdown = document.createElement("select");

  var dropdownHtml = '<option value="">Select template</option>';
  console.log(result.options);
  for (var i = 0; i < result.options.length; i++) {
    dropdownHtml +=
      '<option value="' +
      result.options[i] +
      '">' +
      result.options[i] +
      "</option>";
  }

  dropdown.innerHTML = dropdownHtml;

  var container = document.createElement("div");
  container.style = "display: inline-block; padding: 4px";
  container.appendChild(dropdown);

  var possiblePlaces = [
    document.getElementsByClassName("range-editor js-range-editor")[0],
    document.getElementsByClassName("Layout-sidebar")[0],
  ];

  const place = possiblePlaces.find((place) => place);
  if (!place) {
    return;
  }

  place.prepend(container);

  dropdown.addEventListener("change", () => {
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    var url = new URL(window.location.href);
    url.searchParams.set("template", selectedOption);
    window.location.href = url.toString();
  });
});
