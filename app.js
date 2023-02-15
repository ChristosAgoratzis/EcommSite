function hambMenu(){
    if(hambar.className == "fa-solid fa-bars"){
        hambar.className= "fa-solid fa-xmark";
        sidebar.style.animationName = "open";
        document.querySelector(".side-bar .links").style.display = "inline";
       
    }else{
        hambar.className= "fa-solid fa-bars";
        document.querySelector(".side-bar .links").style.display = "none";
        sidebar.style.animationName = "close";
       
    }

    
    
    

}
const sidebar = document.querySelector(".side-bar");
const  hambar = document.getElementById('bar');

hambar.addEventListener("click",hambMenu);
addEventListener('resize',()=>{ if(window.innerWidth >545 && hambar.className == "fa-solid fa-xmark"){
                                    sidebar.style.animationName = "close";
                                    document.querySelector(".side-bar .links").style.display = "none";
                                }else if(hambar.className == "fa-solid fa-xmark"){
                                    sidebar.style.animationName = "open";
                                    document.querySelector(".side-bar .links").style.display = "inline";
                                }
})

const href = window.location.href;
let match = href.match(/\/([^\/]+)\.([^\/.]+)$/);
let url = match[1] + "." + match[2];
const links = document.getElementsByTagName('a')

if(url == 'index.html'){
    links[0].style.color = "tomato";
    links[3].style.color = "tomato";

}else if(url == "shop.html"){
    links[1].style.color = "tomato";
    links[4].style.color = "tomato";

}else if(url == "contact.html"){
    links[2].style.color = "tomato";
    links[5].style.color = "tomato";
}

function TypeWriter(){
    let text = "ElecLab";
    const h1 = document.getElementById('h1');
    
    if( i < text.length){
        h1.innerHTML += text.charAt(i);
        setTimeout(TypeWriter,1000);
        i++
    }
}
let i=0;
TypeWriter();





