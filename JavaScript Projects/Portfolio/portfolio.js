// Toogling
let light=document.getElementById("sun");
document.body.style.backgroundColor="#191f36";
document.body.style.color="white";
let mode="dark";
//White colour
light.addEventListener("click",()=>{
    if(mode === "dark"){
        mode="light";
        light.className = "fa-solid fa-moon";
        document.body.style.backgroundColor="white";
        document.querySelector(".main").style.color="black";
        document.querySelectorAll(".socialMedia a i").forEach(icon => {
            icon.style.color = "black";
        });
        document.querySelector(".bgImg").style.border="2px solid black";
        document.querySelector(".about-content").style.color="black";
        document.querySelectorAll(".intro-content").forEach(content=>content.style.color="black");
        document.querySelectorAll(".box").forEach(box => box.style.border="1px solid black");
        document.querySelectorAll(".learn-more a").forEach(anchor=>anchor.style.color="black");

//Black Colour    
    }else{
        mode="dark";
        light.className = "fa-solid fa-sun";
        document.body.style.backgroundColor="#191f36";
        document.querySelector(".main").style.color="white";
         document.querySelectorAll(".socialMedia a i").forEach(icon=>{
           icon.style.color = "white";
        });
        document.querySelector(".bgImg").style.border="2px solid #ffffff";
        document.querySelector(".about-content").style.color="#ffffff";
        document.querySelectorAll(".intro-content").forEach(content=>content.style.color="#ecf0f1");
        document.querySelectorAll(".box").forEach(box => box.style.border="1px solid white");
        document.querySelectorAll(".learn-more a").forEach(anchor=>anchor.style.color="#ffffff");
           
    }
});
//About Me
let skills=document.querySelector("#skills-nav");
let experience=document.querySelector("#experience-nav");
let education=document.querySelector("#education-nav");
skills.addEventListener("click",()=>{
  document.querySelectorAll(".content-section").forEach(section => section.classList.remove("active"));
  document.querySelector("#skills").classList.add("active");
  
});

experience.addEventListener("click",()=>{
  document.querySelectorAll(".content-section").forEach(section => section.classList.remove("active"));
  document.querySelector("#experience").classList.add("active");
});

education.addEventListener("click",()=>{
  document.querySelectorAll(".content-section").forEach(section => section.classList.remove("active"));
  document.querySelector("#education").classList.add("active");
});

//Form Validation
const nameInput=document.getElementById("user-name");
const nameChange = document.querySelector(".name-change");
let namePattern = /^[A-Za-z\s]+$/;
nameInput.addEventListener("blur",()=>{
  let trimmedValue = nameInput.value.trim();
  if(trimmedValue.length==0){
    nameChange.innerHTML="* Name is required";
 }
else if (trimmedValue.match(/\d/)) {
  nameChange.innerHTML="* Please enter a valid name without numbers.";
 }
  else if(trimmedValue.length<3){
    nameChange.innerHTML="* Please enter your full name";
  }
  else if(!namePattern.test(trimmedValue)){
     nameChange.innerHTML = "* Please enter a valid name using only letters.";

  }
  else{
     nameChange.innerHTML = "";
  }
});

const emailInput=document.getElementById("user-email");
const emailChange = document.querySelector(".email-change");
const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
emailInput.addEventListener("blur",()=>{
    let trimmedEmail=emailInput.value.trim();
    if(trimmedEmail.length==0){
      emailChange.innerHTML="* Email is required";
    }
    else if(!emailPattern.test(trimmedEmail)){
      emailChange.innerHTML="* Please enter a valid email address"
    }
    else{
      emailChange.innerHTML="";
    }
});

//Mobile Responsive
const menu=document.querySelector("#menuBar");
let bar="menu";
menu.addEventListener("click",()=>{
  if(bar=="menu"){
      bar="wrong";
      menu.className="fa-solid fa-xmark";
      menu.style.paddingLeft = "53%";
      menu.style.paddingTop = "12%";
      document.querySelector(".bgColor").classList.add("activeUl");
      document.body.classList.add("stop-scroll");

  const listItems=document.querySelectorAll(".list");
  listItems.forEach(items=>{
      items.addEventListener("click",()=>{
         document.querySelector(".bgColor").classList.remove("activeUl");
         document.body.classList.remove("stop-scroll");
         menu.className="fa-solid fa-bars";
         menu.style.paddingLeft = "0%";
         menu.style.paddingTop = "0%";
      });
  });

  }else{
    bar="menu";
    menu.className="fa-solid fa-bars";
    menu.style.paddingLeft = "0%";
    menu.style.paddingTop = "0%";
    document.querySelector(".bgColor").classList.remove("activeUl");
    document.body.classList.remove("stop-scroll");
  }
});
