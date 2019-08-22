const grid = {
    TL: {
        occupy: false,
        character: ""
    },
    TM: {
        occupy: false,
        character: ""
    },
    TR: {
        occupy: false,
        character: ""
    },
    ML: {
        occupy: false,
        character: ""
    },
    MM: {
        occupy: false,
        character: ""
    },
    MR: {
        occupy: false,
        character: ""
    },
    BL: {
        occupy: false,
        character: ""
    },
    BM: {
        occupy: false,
        character: ""
    },
    BR: {
        occupy: false,
        character: ""
    }
}

//the grid part
//when an element is clicked
$('.item').on('click', function(){

    if (grid[this.id]["occupy"] === false) {

        //grab the text from the turn indicator that has a class of active
        const turn = $('.turn.active > p').text();
        
        //set the element as occupied, and add the text to the element
        grid[this.id]["occupy"] = true;
        grid[this.id]["character"] = turn;
        
        //DOM rendering
        const temp = `<p class="turnAnimate">${turn}</p>`
        $(this)
        .html(temp)
        .removeClass('active')
        .addClass('inactive');

        //x: remove active class, add inactive class
        //O: remove inactive class, add active class
        $('.turnX').toggleClass('active inactive');
        $('.turnO').toggleClass('inactive active');

        check();
    }
    
})

//check for endgame
const check = function() {
    
    const topRow        = grid['TL']['character'] == grid['TM']['character'] && grid['TM']['character'] == grid['TR']['character'] && grid['TR']['character'] != "";
    const middleRow     = grid['ML']['character'] == grid['MM']['character'] && grid['MM']['character'] == grid['MR']['character'] && grid['MR']['character'] != "";
    const bottomRow     = grid['BL']['character'] == grid['BM']['character'] && grid['BM']['character'] == grid['BR']['character'] && grid['BR']['character'] != "";
    const leftColumn    = grid['TL']['character'] == grid['ML']['character'] && grid['ML']['character'] == grid['BL']['character'] && grid['BL']['character'] != "";
    const middleColumn  = grid['TM']['character'] == grid['MM']['character'] && grid['MM']['character'] == grid['BM']['character'] && grid['BM']['character'] != "";
    const rightColumn   = grid['TR']['character'] == grid['MR']['character'] && grid['MR']['character'] == grid['BR']['character'] && grid['BR']['character'] != "";
    const leftDiagonal  = grid['TL']['character'] == grid['MM']['character'] && grid['MM']['character'] == grid['BR']['character'] && grid['BR']['character'] != "";
    const rightDiagonal = grid['TR']['character'] == grid['MM']['character'] && grid['MM']['character'] == grid['BL']['character'] && grid['BL']['character'] != "";

    if (topRow) {
        console.log(`top row ${grid['TL']['character']}`)
    } else if (middleRow) {
        console.log(`middle row ${grid['ML']['character']}`)
    } else if (bottomRow) {
        console.log(`bottom row ${grid['BL']['character']}`)
    } else if (leftColumn) {
        console.log(`left column ${grid['TL']['character']}`)
    } else if (middleColumn) {
        console.log(`middle column ${grid['TM']['character']}`)
    } else if (rightColumn) {
        console.log(`right column ${grid['TR']['character']}`)
    } else if (leftDiagonal) {
        console.log(`left diagonal ${grid['TL']['character']}`)
    } else if (rightDiagonal) {
        console.log(`right diagonal ${grid['TR']['character']}`)
    } 
}

$(function(){
})