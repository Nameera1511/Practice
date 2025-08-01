let display = document.getElementById("display")
let buttons = document.querySelectorAll("button")
let equal = document.getElementById("equal")
let clear = document.getElementById("clear")

buttons.forEach(btn => {
      if (btn !== clear && btn !== equal) {
        btn.addEventListener("click", () => {
          display.value += btn.getAttribute("data-value");
        });
      }
    });

clear.addEventListener('click',function(){
    display.value = ""
})

equal.addEventListener('click',function(){
    display.value = eval(display.value)
})