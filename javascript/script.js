//ttt for tic tac toe
ttt = {};
ttt.grid = {
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

//adding character to game board when element is clicked
ttt.addingCharacter = function (clickedBox) {
    //if an element is clicked, can't click it again
    if (this.grid[clickedBox.id]["occupy"] === false) {

        //grab the text from the hud that has a class of active
        const turn = $('.turn.active > p').text();

        //set the element as occupied, and add the text to the element
        this.grid[clickedBox.id]["occupy"] = true;
        this.grid[clickedBox.id]["character"] = turn;

        //DOM rendering
        const addCharaterToElement = `<p class="turnAnimate">${turn}</p>`
        $(clickedBox)
            .html(addCharaterToElement)
            .removeClass('active')
            .addClass('inactive');

        //update the instruction area to indicate whose turn it is
        const nextTurn = $('.turn.inactive > p').text();
        const addNextTurnToInstruction = `It's ${nextTurn}'s turn`;
        $('.instructions > p').html(addNextTurnToInstruction);

        //x: remove active class, add inactive class
        //O: remove inactive class, add active class
        $('.turnX').toggleClass('active inactive');
        $('.turnO').toggleClass('inactive active');

        //check for endgame once something is clicked
        this.check();
    }
}

//check for endgame
ttt.end = false;
ttt.check = function() {

    const checkTL = this.grid['TL'];
    const checkTM = this.grid['TM'];
    const checkTR = this.grid['TR'];
    const checkML = this.grid['ML'];
    const checkMM = this.grid['MM'];
    const checkMR = this.grid['MR'];
    const checkBL = this.grid['BL'];
    const checkBM = this.grid['BM'];
    const checkBR = this.grid['BR'];
    
    const topRow        = checkTL['character'] == checkTM['character'] && checkTM['character'] == checkTR['character'] && checkTR['character'] != "";
    const middleRow     = checkML['character'] == checkMM['character'] && checkMM['character'] == checkMR['character'] && checkMR['character'] != "";
    const bottomRow     = checkBL['character'] == checkBM['character'] && checkBM['character'] == checkBR['character'] && checkBR['character'] != "";
    const leftColumn    = checkTL['character'] == checkML['character'] && checkML['character'] == checkBL['character'] && checkBL['character'] != "";
    const middleColumn  = checkTM['character'] == checkMM['character'] && checkMM['character'] == checkBM['character'] && checkBM['character'] != "";
    const rightColumn   = checkTR['character'] == checkMR['character'] && checkMR['character'] == checkBR['character'] && checkBR['character'] != "";
    const leftDiagonal  = checkTL['character'] == checkMM['character'] && checkMM['character'] == checkBR['character'] && checkBR['character'] != "";
    const rightDiagonal = checkTR['character'] == checkMM['character'] && checkMM['character'] == checkBL['character'] && checkBL['character'] != "";

    if (topRow) {
        this.end = true;
        $('#TL').addClass('win');
        $('#TM').addClass('win');
        $('#TR').addClass('win');
        $('.instructions > p').html(`${checkTL['character']} wins!`);
    } else if (middleRow) {
        this.end = true;
        $('#ML').addClass('win');
        $('#MM').addClass('win');
        $('#MR').addClass('win');
        $('.instructions > p').html(`${checkML['character']} wins!`);
    } else if (bottomRow) {
        this.end = true;
        $('#BL').addClass('win');
        $('#BM').addClass('win');
        $('#BR').addClass('win');
        $('.instructions > p').html(`${checkBL['character']} wins!`);
    } else if (leftColumn) {
        this.end = true;
        $('#TL').addClass('win');
        $('#ML').addClass('win');
        $('#BL').addClass('win');
        $('.instructions > p').html(`${checkTL['character']} wins!`);
    } else if (middleColumn) {
        this.end = true;
        $('#TM').addClass('win');
        $('#MM').addClass('win');
        $('#BM').addClass('win');
        $('.instructions > p').html(`${checkTM['character']} wins!`);
    } else if (rightColumn) {
        this.end = true;
        $('#TR').addClass('win');
        $('#MR').addClass('win');
        $('#BR').addClass('win');
        $('.instructions > p').html(`${checkTR['character']} wins!`);
    } else if (leftDiagonal) {
        this.end = true;
        $('#TL').addClass('win');
        $('#MM').addClass('win');
        $('#BR').addClass('win');
        $('.instructions > p').html(`${checkTL['character']} wins!`);
    } else if (rightDiagonal) {
        this.end = true;
        $('#TR').addClass('win');
        $('#MM').addClass('win');
        $('#BL').addClass('win');
        $('.instructions > p').html(`${checkTR['character']} wins!`);
    } else if (checkTL['occupy'] && checkTM['occupy'] && checkTR['occupy'] && checkML['occupy'] && checkMM['occupy'] && checkMR['occupy'] && checkBL['occupy'] && checkBM['occupy'] && checkBR['occupy'] === true) {
        this.end = true;
        $('#TL').addClass('win');
        $('#TM').addClass('win');
        $('#TR').addClass('win');
        $('#ML').addClass('win');
        $('#MM').addClass('win');
        $('#MR').addClass('win');
        $('#BL').addClass('win');
        $('#BM').addClass('win');
        $('#BR').addClass('win');
        $('.instructions > p').html(`Tie Game!`)
    }
}

$(function(){
    $('.item').on('click', function () {

        //keep running the game as long as a win or tie hasn't happened
        if (ttt.end === false) {
        //'this' is 'clickedBox'
        ttt.addingCharacter(this);
        }
    })
})