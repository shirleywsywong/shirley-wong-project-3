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

    }
    
})

//the hud part

$(function(){
})