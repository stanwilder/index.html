console.log("show me you work!!");


let userName = "Stanley";
console.log(userName);

function greetUser() {


    var question = prompt("Do you enjoy pokemon? There's cute ones here!").toLowerCase();
    console.log(question);

    let answer = ('Welcome Trainer!');

    if (question == 'yes') {
        document.write(answer);

    } else {
        alert("wrong answer");
     greetUser();
        // document.write('YOU SUCK!! POKEMON ARE AWESOME!! Welcome anyways!');
    }

}
function howMany() {
    let questionTwo = prompt('How many Charizards would you like to see?');
for (let i = 0; i < questionTwo; i++) {
    document.write('<img src="https://static.pokemonpets.com/images/monsters-images-300-300/6-Charizard.webp" alt="Charizard">')
}
}