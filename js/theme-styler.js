console.log("hello world");

let theme = localStorage.getItem("theme"); 
if(theme=="null"){
    setTheme('light');
}
else{
    setTheme(theme);
}
let themeDots = document.getElementsByClassName('theme-dot')
for(var i=0; themeDots.length>i; i++){
    themeDots[i].addEventListener('click', function(){
        
        let mode = this.dataset.mode;
        console.log('clicked :', mode);
        setTheme(mode);
    });
}
function setTheme(mode){
    if(mode == 'dark'){
        document.getElementById('theme-style').href= 'css/dark.css'; 
    }
    if(mode == 'blue'){
        document.getElementById('theme-style').href= 'css/blue.css'; 
    }
    if(mode == 'orange'){
        document.getElementById('theme-style').href= 'css/pink.css'; 
    }
    if(mode == 'light'){
        document.getElementById('theme-style').href= 'default.css'; 
    }
    localStorage.setItem("theme", mode); 
}