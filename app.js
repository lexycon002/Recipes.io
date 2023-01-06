const getElement = (selector) => {
    const element = document.querySelector(selector)
    if (element) return element
    throw Error(`please double check your class names, there is no ${selector} 
    class`
    )
}




const Links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', ()=> {
    Links.classList.toggle('show-links')
})

const date =  getElement ('#date')
const currentYear = new Date ().getFullYear()
date.textContent = currentYear 