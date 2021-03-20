const button1 =document.getElementById("1")
const button2 = document.getElementById("2")
const button3 = document.getElementById("3")
const main = document.querySelector("main");
button1.addEventListener('click',  function(){
    const p = document.createElement("h3");
    p.textContent = "Foo";
    main.appendChild(p);
})
button2.addEventListener('click',  function(){
    const a = document.createElement("h3");
    a.textContent = "Bar";
    main.appendChild(a);
})
button3.addEventListener('click',  function(){
    const c = document.createElement("h2");
    c.textContent = "Foobar";
    main.appendChild(c);
}
)
