function hambMenu(){
    


}

const hambmenu = document.querySelector(".hamb-menu");
hambmenu.addEventListener("click",hambMenu);

const href = window.location.href;
let match = href.match(/\/([^\/]+)\.([^\/.]+)$/);
let url = match[1] + "." + match[2];
const links = document.getElementsByTagName('a')



if(url == 'index.html'){
    links[0].style.color = "tomato";

}else if(url == "shop.html"){
    links[1].style.color = "tomato";

}else if(url == "contact.html"){
    links[2].style.color = "tomato";
}


