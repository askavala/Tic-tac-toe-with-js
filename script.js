var boxs = document.querySelectorAll(".box")
var turn = document.querySelector(".turn")
var player = 'X'
var reset_btn = document.querySelector(".reset-btn")

function reset_lines(){
    for(i in boxs){
        location.reload();
    }
}

function check_tie(){
    for(i of boxs){
        if(i.innerHTML == ""){
            return 0;
        }
    }
    return 1;
}

function check_lines(){
    if(boxs[0].innerHTML==boxs[1].innerHTML && boxs[0].innerHTML==boxs[2].innerHTML && boxs[0].innerHTML!=''){
        return 1;
    }
    else if(boxs[3].innerHTML==boxs[4].innerHTML && boxs[3].innerHTML==boxs[5].innerHTML && boxs[3].innerHTML!=''){
        return 1;
    }
    else if(boxs[6].innerHTML==boxs[7].innerHTML && boxs[6].innerHTML==boxs[8].innerHTML && boxs[6].innerHTML!=''){
        return 1;
    }
    else if(boxs[0].innerHTML==boxs[3].innerHTML && boxs[0].innerHTML==boxs[6].innerHTML && boxs[0].innerHTML!=''){
        return 1;
    }
    else if(boxs[1].innerHTML==boxs[4].innerHTML && boxs[1].innerHTML==boxs[7].innerHTML && boxs[1].innerHTML!=''){
        return 1;
    }
    else if(boxs[2].innerHTML==boxs[5].innerHTML && boxs[2].innerHTML==boxs[8].innerHTML && boxs[2].innerHTML!=''){
        return 1;
    }
    else if(boxs[0].innerHTML==boxs[4].innerHTML && boxs[0].innerHTML==boxs[8].innerHTML && boxs[0].innerHTML!=''){
        return 1;
    }
    else if(boxs[6].innerHTML==boxs[2].innerHTML && boxs[2].innerHTML==boxs[4].innerHTML && boxs[2].innerHTML!=''){
        return 1;
    }
}

function update_turn(x_o){
    turn.innerHTML = "Its " + x_o + "'s" + " turn";
}

let j = 0;
for (i of boxs) {
    i.addEventListener('click', function() {
        if (this.innerHTML === '') {
            this.innerHTML = player
            if(check_lines() == 1){
                turn.innerHTML = player + " win! Please press reset button"
                for(i of boxs){
                    if(i.innerHTML!="X"&&i.innerHTML!="O"){i.innerHTML=" "}
                    if(player=="X"){
                        i.style.backgroundColor = "lightgreen"
                    }else{
                        i.style.backgroundColor = "lightblue"
                    }
                    
                }               
                return;
            }else if (j!=8){
                if (player === 'X') player = 'O';
                else if (player === 'O') player = 'X';
                update_turn(player);
            }
            j++
            if (j == 9){
                turn.innerHTML = "Tie Please press Reset Button"
                for(i of boxs){
                    i.style.backgroundColor = "rgb(253, 255, 121)"
                }
            }
        } 
    });
}

reset_btn.addEventListener("click", function(){
    location.reload()
})