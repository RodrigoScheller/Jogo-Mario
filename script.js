const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
const moeda = document.querySelector('.moeda')
let contador = 0;



    const jump = () => {
        mario.classList.add('jump');

    



        setTimeout(() => {

            mario.classList.remove('jump'); 

        }, 500);
}

    const loop = setInterval(() =>{

    contador += 1;

    document.getElementById("contador").innerHTML = contador;

        if ( contador >= 1500) {
        
            cano.style.animation = 'pipe-animation 1s infinite linear';
            moeda.style.animation ='pipe-animation 1s infinite linear';
            
        }



    const canoPosition = cano.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

            if (canoPosition <= 120 && canoPosition > 0 && marioPosition <= 80){

                cano.style.animation = 'none'
                cano.style.left = `${canoPosition}px`

                mario.style.animation = 'none';
                mario.style.bottom = `${canoPosition}px`; 

                moeda.style.animation = 'none';
                moeda.style.left = `${canoPosition}px`

                mario.src = './game-over.png';
                mario.style.width = '75px';
                mario.style.marginLeft = '50px';

                demo.style.border = 'orange double 5px';

                document.getElementById("demo").innerHTML = 'Game Over';


                clearInterval(loop);
                
                } 

    }, 10);




        document.addEventListener('keydown', jump);