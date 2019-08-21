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
$('.item').on('click', function(){
    //1. click box, make "x"
    grid[this.id]["occupy"] = true;
    grid[this.id]["character"] = "X";
    
    const temp = `<p class="turnAnimate">X</p>`
    $(this)
    .html(temp)
    .removeClass('active')
    .addClass('inactive');

    console.log(grid[this.id]);
    // console.log(this.id)

})

$(function(){
})