var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Graphic Designer","Data Entry"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i=0; i<totalNavList; i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click" , function()
    {
      removeBackSection();
        for(let j=0; j<totalNavList; j++)
        {
            if(navList[j].querySelector("a").classList.contains("active"))
            {
                addBackSection(j);
                // allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200)
        {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection()
{
    for(let i=0; i<totalSection; i++)

    {
      allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num)
{
    allSection[num].classList.add("back-section");
}
function showSection(element)
{
    for(let i=0; i<totalSection; i++)

{
  allSection[i].classList.remove("active");
}


    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element)
{
    for(let i=0; i<totalNavList; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("data-section-index");
   showSection(this);
   updateNav(this);
   removeBackSection();
   addBackSection(sectionIndex);
})















function updateNav(element)
{
    for(let i=0; i<totalNavList; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".last_project").addEventListener("click", function()
{
const sectionIndex = this.getAttribute("data-section-index");
showSection(this);
updateNav(this);
removeBackSection();
addBackSection(sectionIndex);
})

document.querySelector(".web").addEventListener("click", function()
{
const sectionIndex = this.getAttribute("data-section-index");
showSection(this);
updateNav(this);
removeBackSection();
addBackSection(sectionIndex);
})



document.querySelector(".design").addEventListener("click", function()
{
const sectionIndex = this.getAttribute("data-section-index");
showSection(this);
updateNav(this);
removeBackSection();
addBackSection(sectionIndex);
})

document.querySelector(".data_entry").addEventListener("click", function()
{
const sectionIndex = this.getAttribute("data-section-index");
showSection(this);
updateNav(this);
removeBackSection();
addBackSection(sectionIndex);
})

document.querySelector(".data").addEventListener("click", function()
{
const sectionIndex = this.getAttribute("data-section-index");
showSection(this);
updateNav(this);
removeBackSection();
addBackSection(sectionIndex);
})

document.querySelector(".graphic").addEventListener("click", function()
{
const sectionIndex = this.getAttribute("data-section-index");
showSection(this);
updateNav(this);
removeBackSection();
addBackSection(sectionIndex);
})




document.querySelector(".graph").addEventListener("click", function()
{
const sectionIndex = this.getAttribute("data-section-index");
showSection(this);
updateNav(this);
removeBackSection();
addBackSection(sectionIndex);
})





document.querySelector(".wepping").addEventListener("click", function()
{
const sectionIndex = this.getAttribute("data-section-index");
showSection(this);
updateNav(this);
removeBackSection();
addBackSection(sectionIndex);
})

document.querySelector(".bravo").addEventListener("click", function()
{
const sectionIndex = this.getAttribute("data-section-index");
showSection(this);
updateNav(this);
removeBackSection();
addBackSection(sectionIndex);
})



// document.querySelector(".book").addEventListener("click", function()
// {
// const sectionIndex = this.getAttribute("data-section-index");
// showSection(this);
// updateNav(this);
// removeBackSection();
// addBackSection(sectionIndex);
// })



document.querySelector(".website").addEventListener("click", function()
{
const sectionIndex = this.getAttribute("data-section-index");
showSection(this);
updateNav(this);
removeBackSection();
addBackSection(sectionIndex);
})


document.querySelector(".done").addEventListener("click", function()
{
const sectionIndex = this.getAttribute("data-section-index");
showSection(this);
updateNav(this);
removeBackSection();
addBackSection(sectionIndex);
})

document.querySelector(".same").addEventListener("click", function()
{
const sectionIndex = this.getAttribute("data-section-index");
showSection(this);
updateNav(this);
removeBackSection();
addBackSection(sectionIndex);
})

document.querySelector(".gogo").addEventListener("click", function()
{
const sectionIndex = this.getAttribute("data-section-index");
showSection(this);
updateNav(this);
removeBackSection();
addBackSection(sectionIndex);
})
document.querySelector(".www").addEventListener("click", function()
{
const sectionIndex = this.getAttribute("data-section-index");
showSection(this);
updateNav(this);
removeBackSection();
addBackSection(sectionIndex);
})
document.querySelector(".lol").addEventListener("click", function()
{
const sectionIndex = this.getAttribute("data-section-index");
showSection(this);
updateNav(this);
removeBackSection();
addBackSection(sectionIndex);
})

// document.querySelector(".graphico").addEventListener("click", function()
// {
// const sectionSoail = this.getAttribute("data-section-socail");
// showSection(this);
// updateNav(this);
// removeBackSection();
// addBackSection(sectionSoail);
// })


// document.querySelector(".project").addEventListener("click", function()
// {
// const sectionSoail = this.getAttribute("data-section-socail");
// showSection(this);
// updateNav(this);
// removeBackSection();
// addBackSection(sectionSoail);
// })


// document.querySelector(".webb").addEventListener("click", function()
// {
// const sectionSoail = this.getAttribute("data-section-socail");
// showSection(this);
// updateNav(this);
// removeBackSection();
// addBackSection(sectionSoail);
// })

// document.querySelector(".designning").addEventListener("click", function()
// {
// const sectionSoail = this.getAttribute("data-section-socail");
// showSection(this);
// updateNav(this);
// removeBackSection();
// addBackSection(sectionSoail);
// })











// document.querySelector(".soacial_media").addEventListener("click", function()
// {
// const sectionIndex = this.getAttribute("data-section-index");
// showSection(this);
// updateNav(this);
// removeBackSection();
// addBackSection(sectionIndex);
// })

// document.querySelector(".last_project").addEventListener("click", function()
// {
// const sectionIndex = this.getAttribute("data-section-index");
// showSection(this);
// updateNav(this);
// removeBackSection();
// addBackSection(sectionIndex);
// })













const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");
      navTogglerBtn.addEventListener("click",() =>
      {
        asideSectionTogglerBtn()
      })
      function asideSectionTogglerBtn()
      {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.toggle("open");
        }
      }
    
    
    
    