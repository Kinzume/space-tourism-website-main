console.log("Hello World!")


// const mobileNavToggle=document.getElementsByClassName("mobile-nav-toggle")
// const primaryNavigation=document.getElementsByClassName("primary-navigation")
// console.log(mobileNavToggle[0])
// console.log(primaryNavigation[0])
// mobileNavToggle[0].addEventListener("click",()=>{
//     if(primaryNavigation[0].style.transform=="translate(100%)")
//         {return primaryNavigation[0].style.transform="translateX(0%)"}
// })

const nav=document.querySelector(".primary-navigation")
const navToggle = document.querySelector(".mobile-nav-toggle")

navToggle.addEventListener("click",()=>{
    const visibility = nav.getAttribute("data-visible")
    if (visibility==="false") {
        nav.setAttribute("data-visible",true)
        navToggle.setAttribute("aria-expanded",true)
    } else{
        nav.setAttribute("data-visible",false)
        navToggle.setAttribute("aria-expanded",false)
    }
    
})