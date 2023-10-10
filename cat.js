alert(`.          /ᐢ⑅ᐢ\\   ♡   ₊˚               Hola!!
       ꒰ ˶• ༝ •˶꒱       ♡‧₊˚    ♡                   Lat's playy!!♡
      ./づ~ :¨·.·¨:     ₊˚                                                           Together ❀
                '·..·‘₊˚♡ `)


var holes = [document.querySelectorAll('#hole'), document.querySelectorAll('#hole'), document.querySelectorAll('#hole'), document.querySelectorAll('#hole'), document.querySelectorAll('#hole'), document.querySelectorAll('#hole'), document.querySelectorAll('#hole'), document.querySelectorAll('#hole'), document.querySelectorAll('#hole')]
var score = document.querySelector('#score')
let score1 = 5

function lose() {
    if (score1 === 0) {
        alert('you lose!!')
    }
}

const sound = new Audio("SMASH sound effect for editing.mp3")
$(".img1").on("click", function() {
    $(".img1").attr("src", "cat-vibe-vibe-cat.gif")
    alert('you won!!')

})

function game() {
    var i = Math.floor(Math.random() * holes.length)
    var hole = holes[i]
    let timer = null

    addEventListener('click', function() {
        score1--
        sound.play()
        score.textContent = score1

    })

}
game()

function lose() {
    if (score1 === 0) {
        alert('you lose!!')
    }
}