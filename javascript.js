
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('ul');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('slide');

    });

    navbar.addEventListener("click",() =>{
        navbar.classList.toggle("slide")
    })







const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showL');
        }
    });
});

const observerR = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showR');
        }
        
    });
});


const observerUp = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showUp');
        }
        // else{
        //     entry.target.classList.remove('showUp')
        // }
    });
});


const hiddenL = document.querySelectorAll('.div1');
hiddenL.forEach((el) => observer.observe(el));


const hiddenR = document.querySelectorAll('.div2');
hiddenR.forEach((el) => observerR.observe(el));



const hiddenU = document.querySelectorAll('.div3');
hiddenU.forEach((el) => observerUp.observe(el))

