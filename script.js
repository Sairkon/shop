let btnContainer = document.querySelector(".btnMain");
let btnContainer2 = document.querySelector(".btnMain2");

let btns = btnContainer.querySelectorAll(".btn");
let btns2 = btnContainer2.querySelectorAll(".btn");

let main = document.querySelector(".main");
let woman = document.querySelector('.woman');
let man = document.querySelector('.man');
let children = document.querySelector('.children');


for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.querySelectorAll(".active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
  btns[0].onclick = () => {
    main.style = "display: block";
    woman.style = "display: none";
    man.style = "display: none";
    children.style = "display: none";
  }
  btns[1].onclick = () => {
    woman.style = "display: block";
    main.style = "display: none";
    man.style = "display: none";
    children.style = "display: none";
  }
  btns[2].onclick = () => {
    man.style = "display: block";
    main.style = "display: none";
    woman.style = "display: none";
    children.style = "display: none";
  }
  btns[3].onclick = () => {
    children.style = "display: block";
    main.style = "display: none";
    woman.style = "display: none";
    man.style = "display: none";

  }
}
for (let i = 0; i < btns2.length; i++) {
  btns2[i].addEventListener("click", function() {
    let current = document.querySelectorAll(".burger_active");
    current[0].className = current[0].className.replace(" burger_active", "");
    this.className += " burger_active";
  });
  btns2[0].onclick = () => {
    main.style = "display: block";
    woman.style = "display: none";
    man.style = "display: none";
    children.style = "display: none";
  }
  btns2[1].onclick = () => {
    woman.style = "display: block";
    main.style = "display: none";
    man.style = "display: none";
    children.style = "display: none";
  }
  btns2[2].onclick = () => {
    man.style = "display: block";
    main.style = "display: none";
    woman.style = "display: none";
    children.style = "display: none";
  }
  btns2[3].onclick = () => {
    children.style = "display: block";
    main.style = "display: none";
    woman.style = "display: none";
    man.style = "display: none";

  }
}

let burger__button = document.querySelector(".burger__button");
let menu = document.querySelector(".menu");
let close_menu = document.querySelector(".close");

menu.addEventListener("click" , () => {
  burger__button.style = "width: 350px; height: 100vh;display: block; background: rgba(0, 0, 0, 0.42);  position: absolute; top: 0;right: 0;";
  menu.style = "display: none !important";
  close_menu.style = "display: block";
  close_menu.onclick = () => {
    burger__button.style = "display: none";
    close_menu.style = "display: none";
    menu.style = "display: block";
  }

})


let clothes = document.querySelector('.woman__clothes--list');
let btn__clothes = clothes.querySelectorAll('.btn__clothes');

let outerwear = document.querySelector('.outerwear');
let jumpers = document.querySelector('.jumpers');
let jeans = document.querySelector('.jeans');
let socks = document.querySelector('.socks');
let underwear = document.querySelector('.underwear');
let shirts = document.querySelector('.shirts');
let hoodies = document.querySelector('.hoodies');
let polo = document.querySelector('.polo');
let shorts = document.querySelector('.shorts');

for (let i = 0; i < btn__clothes.length; i++) {
  btn__clothes[i].addEventListener("click", function() {
    let current = document.querySelectorAll(".active__clothes");
    current[0].className = current[0].className.replace(" active__clothes", "");
    this.className += " active__clothes";
  });
  btn__clothes[0].onclick = () => {
    outerwear.style = 'display: block';
    jumpers.style = 'display: none';
    jeans.style = 'display: none';
    socks.style = 'display: none';
    underwear.style = 'display: none';
    shirts.style = 'display: none';
    hoodies.style = 'display: none';
    polo.style = 'display: none';
    shorts.style = 'display: none';
  }
  btn__clothes[1].onclick = () => {
    jumpers.style = 'display: block';
    outerwear.style = 'display: none';
    jeans.style = 'display: none';
    socks.style = 'display: none';
    underwear.style = 'display: none';
    shirts.style = 'display: none';
    hoodies.style = 'display: none';
    polo.style = 'display: none';
    shorts.style = 'display: none';
  }
  btn__clothes[2].onclick = () => {
    jeans.style = 'display: block';
    outerwear.style = 'display: none';
    jumpers.style = 'display: none';
    socks.style = 'display: none';
    underwear.style = 'display: none';
    shirts.style = 'display: none';
    hoodies.style = 'display: none';
    polo.style = 'display: none';
    shorts.style = 'display: none';
  }
  btn__clothes[3].onclick = () => {
    socks.style = 'display: block';
    outerwear.style = 'display: none';
    jumpers.style = 'display: none';
    jeans.style = 'display: none';
    underwear.style = 'display: none';
    shirts.style = 'display: none';
    hoodies.style = 'display: none';
    polo.style = 'display: none';
    shorts.style = 'display: none';
  }
  btn__clothes[4].onclick = () => {
    underwear.style = 'display: block';
    outerwear.style = 'display: none';
    jumpers.style = 'display: none';
    jeans.style = 'display: none';
    socks.style = 'display: none';
    shirts.style = 'display: none';
    hoodies.style = 'display: none';
    polo.style = 'display: none';
    shorts.style = 'display: none';
  }
  btn__clothes[5].onclick = () => {
    shirts.style = 'display: block';
    outerwear.style = 'display: none';
    jumpers.style = 'display: none';
    jeans.style = 'display: none';
    socks.style = 'display: none';
    underwear.style = 'display: none';
    hoodies.style = 'display: none';
    polo.style = 'display: none';
    shorts.style = 'display: none';
  }
  btn__clothes[6].onclick = () => {
    hoodies.style = 'display: block';
    outerwear.style = 'display: none';
    jumpers.style = 'display: none';
    jeans.style = 'display: none';
    socks.style = 'display: none';
    underwear.style = 'display: none';
    shirts.style = 'display: none';
    polo.style = 'display: none';
    shorts.style = 'display: none';
  }
  btn__clothes[7].onclick = () => {
    polo.style = 'display: block';
    outerwear.style = 'display: none';
    jumpers.style = 'display: none';
    jeans.style = 'display: none';
    socks.style = 'display: none';
    underwear.style = 'display: none';
    shirts.style = 'display: none';
    hoodies.style = 'display: none';
    shorts.style = 'display: none';
  }
  btn__clothes[8].onclick = () => {
    shorts.style = 'display: block';
    outerwear.style = 'display: none';
    jumpers.style = 'display: none';
    jeans.style = 'display: none';
    socks.style = 'display: none';
    underwear.style = 'display: none';
    shirts.style = 'display: none';
    hoodies.style = 'display: none';
    polo.style = 'display: none';
  }
  
}

