/*
Alfonso Reviejo Valle
GitHub: https://github.com/alfonn13/Calculator

*/

const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");
let nuevaOperacion = true;


botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;
        const id = boton.id;
        let numeroPantalla;

        switch (id) {
            case "c":
                pantalla.textContent = 0;
                break;

            case "delete":
                if (pantalla.textContent.length === 1 || pantalla.textContent === "Error") {
                    pantalla.textContent = "0";
                } else {
                    pantalla.textContent = pantalla.textContent.slice(0, -1);
                }
                break;

            case "root":
                numeroPantalla = parseFloat(pantalla.textContent);
                if (!isNaN(numeroPantalla) || numeroPantalla >= 0) {
                    pantalla.textContent = Math.sqrt(numeroPantalla);
                } else {
                    pantalla.textContent = ("Error!!");
                }
                nuevaOperacion = true;
                break;

            case "elevated":
                numeroPantalla = parseFloat(pantalla.textContent);
                if (!isNaN(numeroPantalla) || numeroPantalla >= 0) {
                    pantalla.textContent = Math.pow(numeroPantalla, 2);
                } else {
                    pantalla.textContent = ("Error!!");
                }
                nuevaOperacion = true;
                break;

            case "on":
                numeroPantalla = parseFloat(pantalla.textContent);
                if (!isNaN(numeroPantalla) || numeroPantalla >= 0) {
                    pantalla.textContent = 1 / numeroPantalla;
                } else {
                    pantalla.textContent = ("Error!!");
                }
                nuevaOperacion = true;
                break;

            case "percentage":
                numeroPantalla = parseFloat(pantalla.textContent);
                if (!isNaN(numeroPantalla) || numeroPantalla >= 0) {
                    pantalla.textContent = numeroPantalla / 100;
                } else {
                    pantalla.textContent = ("Error!!");
                }
                nuevaOperacion = true;
                break;

            case "change":
                pantalla.textContent = -pantalla.textContent;
                nuevaOperacion = true;
                break;

            case "divide":
                pantalla.textContent += "/";
                break;

            case "equal":
                try {
                    pantalla.textContent = eval(pantalla.textContent);
                    nuevaOperacion = true;
                } catch {
                    pantalla.textContent = ("Error!!");
                }
                break;

            case "PI":
                if (isNaN(parseFloat(pantalla.textContent)) || parseFloat(pantalla.textContent) <= 1) {
                    pantalla.textContent = Math.PI;
                } else {
                     pantalla.textContent = parseFloat(pantalla.textContent) * Math.PI;
                }
                nuevaOperacion = true;
                break;

            default:
                if(pantalla.textContent !== "0" && (botonApretado ==="+" || botonApretado ==="-" || botonApretado ==="*" || botonApretado ==="÷")){
                    nuevaOperacion = false;
                }
                if(pantalla.textContent === "0" || nuevaOperacion){
                    pantalla.textContent = botonApretado;
                    nuevaOperacion = false;
                }else{
                    pantalla.textContent += botonApretado;
                }
                break;
        }
    })
});

