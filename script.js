var right = document.getElementsByClassName("right");
var left = document.getElementsByClassName("left");
//---------------------------------------------------
var txt_input = document.getElementById("text_holder");
var main_txt = document.getElementById("main_txt");
var btn = document.getElementById("btn");
var color_picker = document.getElementById("favcolor");
var txt_size = document.getElementById("text_size");
//------------------------------------------title------------------------------
var title_txt = document.getElementById("title");
var title_input = document.getElementById("title_holder");
var title_size = document.getElementById("title_size");
var title_color = document.getElementById("title_color");

btn.addEventListener("click",function click(){
    main_txt.innerHTML = (txt_input.value);
    main_txt.style.color = color_picker.value;
    main_txt.style.fontSize = `${txt_size.value}px`;
    
    title_txt.innerHTML = `${title_input.value} <hr>`;
    title_txt.style.color = title_color.value;
    title_txt.style.fontSize =  `${title_size.value}px`;
});