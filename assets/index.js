const pantalla = document.querySelector(".pantalla");
const botones =document.querySelectorAll(".btn");


botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if(boton.id === "c"){
            pantalla.textContent = 0;
            return;
        }

        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error"){
                pantalla.textContent = "0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if(boton.id === "raiz"){
            const numeroPantalla = parseFloat(pantalla.textContent);
            if(!isNaN(numeroPantalla)|| numeroPantalla>=0){
                pantalla.textContent = Math.sqrt(numeroPantalla);
            }else{
                pantalla.textContent = ("Error!!");
            }
            return;
            
        }

        if(boton.id==="elevado"){
            const numeroPantalla = parseFloat(pantalla.textContent);
            if(!isNaN(numeroPantalla) || numeroPantalla>=0){
                pantalla.textContent = Math.pow(numeroPantalla, 2);
            }else{
                pantalla.textContent = ("Error!!");
            }
            return;
        }

        if(boton.id==="porcentaje"){
            const numeroPantalla = parseFloat(pantalla.textContent);
            if(!isNaN(numeroPantalla) || numeroPantalla>=0){
                pantalla.textContent = numeroPantalla/100;
            }else{
                pantalla.textContent = ("Error!!");
            }
            return;
        }

        if(boton.id==="change"){
            pantalla.textContent = - pantalla.textContent;
            return;
        }

        if(boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
            }catch{
                pantalla.textContent = ("Error!!")
            }
            return;
        }
        
        if(pantalla.textContent==="0"){
            pantalla.textContent = botonApretado;
        }else{
            pantalla.textContent+=botonApretado;
        }


    })
})

