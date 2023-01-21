// toggleHamburgerMenu()
const toggleButton = document.getElementsByClassName('header-toggle-btn')[0]
const navbarLinks = document.getElementsByClassName('header-nav-links')[0]

toggleHamburgerMenu()

function toggleHamburgerMenu() {
    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active')
      })  
  }