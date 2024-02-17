let btns = document.querySelector(".container");
let squares = document.querySelectorAll(".square");
let reset = document.querySelector(".reset");
let turn = "x".toUpperCase(); // الدور على مين
let win = 0;
let winstart = 0;
let counter = 0;

function switcher (val1 , val2 , variable) {
    if (variable == val1) {
        variable = val2.toUpperCase();
    } else {
        variable = val1.toUpperCase();
    }
    return variable;
}

function n (num) {
    return squares[num].innerText;
}

function wins (targ) {
    counter = 0;

        if (win == 0) {
            winstart = 1;

            setTimeout(() => {
                targ.style.backgroundColor = "rgb(255 , 0 , 0)";

                if (n(0) != "" && n(0) == n(1) &&  n(1) == n(2)) {
                    squares[0].style.backgroundColor = "rgb(0 , 255 , 0)";
                    squares[1].style.backgroundColor = "rgb(0 , 255 , 0)";
                    squares[2].style.backgroundColor = "rgb(0 , 255 , 0)";
                    win = 1;
                }
                
                if (n(3) != "" && n(3) == n(4) &&  n(4) == n(5)) {
                    squares[3].style.backgroundColor = "rgb(0 , 255 , 0)";
                    squares[4].style.backgroundColor = "rgb(0 , 255 , 0)";
                    squares[5].style.backgroundColor = "rgb(0 , 255 , 0)";
                    win = 1;
                }
                
                if (n(6) != "" && n(6) == n(7) &&  n(7) == n(8)) {
                    squares[6].style.backgroundColor = "rgb(0 , 255 , 0)";
                    squares[7].style.backgroundColor = "rgb(0 , 255 , 0)";
                    squares[8].style.backgroundColor = "rgb(0 , 255 , 0)";
                    win = 1;
                }
                
                if (n(0) != "" && n(0) == n(3) &&  n(3) == n(6)) {
                    squares[0].style.backgroundColor = "rgb(0 , 255 , 0)";
                    squares[3].style.backgroundColor = "rgb(0 , 255 , 0)";
                    squares[6].style.backgroundColor = "rgb(0 , 255 , 0)";
                    win = 1;
                }
                
                if (n(1) != "" && n(1) == n(4) &&  n(4) == n(7)) {
                    squares[1].style.backgroundColor = "rgb(0 , 255 , 0)";
                    squares[4].style.backgroundColor = "rgb(0 , 255 , 0)";
                    squares[7].style.backgroundColor = "rgb(0 , 255 , 0)";
                    win = 1;
                }
                
                if (n(2) != "" && n(2) == n(5) &&  n(5) == n(8)) {
                    squares[2].style.backgroundColor = "rgb(0 , 255 , 0)";
                    squares[5].style.backgroundColor = "rgb(0 , 255 , 0)";
                    squares[8].style.backgroundColor = "rgb(0 , 255 , 0)";
                    win = 1;
                }

                if (n(0) != "" && n(0) == n(4) &&  n(4) == n(8)) {
                    squares[0].style.backgroundColor = "rgb(0 , 255 , 0)";
                    squares[4].style.backgroundColor = "rgb(0 , 255 , 0)";
                    squares[8].style.backgroundColor = "rgb(0 , 255 , 0)";
                    win = 1;
                }

                if (n(2) != "" && n(2) == n(4) &&  n(4) == n(6)) {
                    squares[2].style.backgroundColor = "rgb(0 , 255 , 0)";
                    squares[4].style.backgroundColor = "rgb(0 , 255 , 0)";
                    squares[6].style.backgroundColor = "rgb(0 , 255 , 0)";
                    win = 1;
                }

                // squares.forEach( (item) => {
                //     if (item.innerText != "") {
                //         counter++;
                //         console.log(item.style.backgroundColor);
                //     }
                // });

                winstart = 0;
            }, 500);

        }
}

btns.onclick = (eo) => {
    if (eo.target.classList != "container" && eo.target.innerText == "" && win == 0 && winstart == 0) {        
        eo.target.innerText = turn;
        turn = switcher("X","o" , turn);
        eo.target.style.backgroundColor = "rgb(0 , 255 , 0)";
        wins(eo.target);
    }
}

window.onkeydown = (kd) => {
    if (kd.key >= 1 && kd.key <= 9) {
        if (squares[kd.key - 1].innerText == "" && win == 0 && winstart == 0) {
            squares[kd.key - 1].innerText = turn;
            turn = switcher("X","o" , turn);
            squares[kd.key - 1].style.backgroundColor = "rgb(0 , 255 , 0)";
            wins(squares[kd.key - 1]);
        }
    }
}

reset.onclick = () => {
    squares.forEach( (item) => {
        item.style.backgroundColor = "rgb(165 , 165 , 165)";
        item.style = ".square:hover {background-color: red;}";
        item.innerText = "";
    });
    win = 0;
    turn = "x".toUpperCase();
}