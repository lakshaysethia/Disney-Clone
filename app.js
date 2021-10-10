const carousel =document.querySelector('.carousel');
let sliders=[]
let slideindex=0;
const createslide=()=>{
    if(slideindex>= movies.length){
        slideindex=0;
    }

    let slide = document.createElement('div');
    let imgelement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    imgelement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideindex].name));
    p.appendChild(document.createTextNode(movies[slideindex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgelement);
    carousel.appendChild(slide);

    imgelement.src=movies[slideindex].image;
    slideindex++;

    slide.className="slider";
    content.className="slide-content";
    h1.className="movie-title";
    p.className="movie-des";

    sliders.push(slide);

    // adding sliding effect
    if(sliders.length){
        sliders[0].style.marginLeft=`calc(-${100*(sliders.length-2)}% - ${30*(sliders.length-2)}px)`;
    }
}

for (let i=0;i<3;i++){
    createslide();

}
setInterval(()=>{
    createslide();
},3000);

const videoCard = document.querySelector('.video-card');

videoCard.forEach(item=>{
    item.addEventListener('mouseover',()=>{
        let video=item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave',()=>{
        let video=item.children[1];
        video.pause();
    })
})

//card slider
let cardContainer =document.querySelectorAll('.card-cont');
let preBtns = document.querySelectorAll('.pre-btn');
let nxtBtns = document.querySelectorAll('.nxt-btn');

cardContainer.forEach((item,i) => {
    let contDimension = item.getBoundingClientRect();
    let contWidth = contDimension.width;

    nxtBtns[i].addEventListener('click',() => {
        item.scrollLeft += contWidth - 200;
    })
    preBtns[i].addEventListener('click',()=>{
        item.scrollRight -= contWidth + 200;
    })


})