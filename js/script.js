let mobile = document.querySelector('.sidenav')
M.Sidenav.init(mobile)

let parallax = document.querySelector('.parallax-container')
M.Parallax.init(parallax)

var tampilan = document.querySelector('.tabs')
M.Tabs.init(tampilan)

const scroll = document.querySelectorAll('.scrollspy')
M.ScrollSpy.init(scroll,{
    scrollOffset: 50
})