// homepage 
// ### menu accordion navbar
document.addEventListener('DOMContentLoaded', () => {
  let elems = document.querySelectorAll('.dropdown-trigger');
  let instances = M.Dropdown.init(elems)
})

// collapsible porfile
document.addEventListener('DOMContentLoaded', () => {
  let elems = document.querySelectorAll('.collapsible');
  let instances = M.Collapsible.init(elems)
})

// search autocomplete
document.addEventListener('DOMContentLoaded', () => {
  let elems = document.querySelectorAll('.autocomplete')
  let instances = M.Autocomplete.init(elems)
})

// slider homepage
document.addEventListener('DOMContentLoaded', () => {
  let elems = document.querySelectorAll('.slider')
  let instances = M.Slider.init(elems)
})