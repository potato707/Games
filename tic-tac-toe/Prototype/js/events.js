const grid = {"square-1": 0, "square-2": 0,"square-3": 0,"square-4": 0,"square-5": 0,"square-6": 0,"square-7": 0,"square-8": 0,"square-9": 0};
let current_turn = 'x';

window.addEventListener("load", main)

const switch_turns = () =>{
    if (current_turn==="x"){
        current_turn="o";
    } else {
        current_turn="x";
    }
}

const check_if_winner = (element_id) => {
    square_number = parseInt(element_id.slice(element_id.length-1));
    (isVerticallyWinner() || isHorizontallyWinner() || isDiagnollyWinner()) ? forbidClicks(): {}
}

const isVerticallyWinner = () => {
    for (i=1; i<=9; i+=3){
        if (grid["square-"+(i.toString())] && grid["square-"+(i.toString())] === grid["square-"+((i+1).toString())] && grid["square-"+((i+1).toString())] === grid["square-"+((i+2).toString())]){
            console.log(grid["square-"+(i.toString())] + " is winner")
            return true
        }
    }
}

const isHorizontallyWinner = () => {
    for (i=1; i<=3; i++){
        if (grid["square-"+(i.toString())] && grid["square-"+(i.toString())] === grid["square-"+((i+3).toString())] && grid["square-"+((i+3).toString())] === grid["square-"+((i+6).toString())]){
            console.log(grid["square-"+(i.toString())] + " is winner")
            return true
        }
    }
}

const isDiagnollyWinner = () => {
    if (grid["square-5"]){
        if (grid["square-1"] === grid["square-5"] && grid["square-5"] === grid["square-9"] || grid["square-3"] === grid["square-5"] && grid["square-5"] === grid["square-7"]){
            console.log(grid["square-5"] + " is winner")
            return true
        }
    }
}

const forbidClicks = () => {
    const squares_elements = [...document.getElementsByClassName("square")];
    squares_elements.forEach(remove_listener);
}

const printSquare = (element) => {
    let element_id = element.srcElement.id
    if (!grid[element_id]){
        grid[element_id] = current_turn;
        document.getElementById(element_id).innerHTML=current_turn
        check_if_winner(element_id)
        switch_turns()
    }
    console.log(grid);
}

const add_listener = (element) => {
    element.addEventListener("click", printSquare);
}

const remove_listener = (element) => {
    element.removeEventListener("click", printSquare);
}

function main(){
    const squares_elements = [...document.getElementsByClassName("square")];
    squares_elements.forEach(add_listener);
}
