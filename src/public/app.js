console.log("gibo.app")

window.onload = () => {

  $('#btn1').click(() => {
    $.ajax({
      url: '/user',
      data: {},
      success: (res) => {
        if (res.success) {
          renderUser(res.data)
        }
      }
    })
  })


  $('#btn2').click(() => {
    $.ajax({
      url: '/product',
      data: {},
      success: (res) => {
        if (res.success) {
          renderProduct(res.data)
        }
      }
    })
  })

  $('#btn3').cilck(() => {
    $.ajax({
      url: 'graphql',
      data: {
        query: `query{
          user{
            _id
            name
            email
          }
          product{
            name
            price
          }
          supplier{
            name
            email
          }
        }`
      },
      success: () => {
        renderUser(res.data.user)
        renderProduct(res.data.product)
      }
    })
  })

  function renderUser(data) {
    const result = ''
    data.forEach(user => {
      result += `<li>name: ${user.name}, email: ${user.email}</li>`
    })
    $('#userList').html(result)
  }

  function renderProduct(data) {
    let result = ''
    data.forEach(product => {
      result += `<li>name: ${product.name}, price: ${product.price}</li>`
    })
    $('#productList').html(result)
  }

}
























// ### menu accordion navbar
document.addEventListener('DOMContentLoaded', ()=> {
  let elems = document.querySelectorAll('.dropdown-trigger');
  let instances = M.Dropdown.init(elems);
})

// collapsible porfile
document.addEventListener('DOMContentLoaded', ()=> {
  let elems = document.querySelectorAll('.collapsible');
  let instances = M.Collapsible.init(elems);
})

// search autocomplete
document.addEventListener('DOMContentLoaded', ()=> {
  let elems = document.querySelectorAll('.autocomplete');
  let instances = M.Autocomplete.init(elems);
});

// slider homepage
document.addEventListener('DOMContentLoaded', ()=> {
  let elems = document.querySelectorAll('.slider');
  let instances = M.Slider.init(elems);
});