//openingScreen
//When player enters name, an alert will pop up
const nameInput = document.getElementById('name');
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert(`${nameInput.value} is born!`);

})
// Listen for a click on submit button when someone clicks
$('submit').on('click', function () {
    console.log('the submit button is working!');
})

//When submit button is clicked, hide openingScreen
//Move to mainScreen

//mainScreen
//Message pops up "Let's go feed Pudge! Click 'play' to continue!"
//Listen for a click on "play" button, and hide mainScreen
//Move to playScreen

//playScreen
//Listen for a click on "feed pudge" button
//When clicked, loop in pudge's gif
//Hide playScreen
//Move to lunchScreen

//lunchScreen
//alert message "But I'm not hungry! I need a nap."
//Listen for a click on "sleep" button
//Hide lunchScreen
//Move to sleepScreen

//sleepScreen
//Animate images or turn them into gif
//Insert "Leave me alone to die" song https://www.youtube.com/watch?v=yb1m04zid8k
//Once audio is done playing, bring alert message "New level unlocked! Click f-key to continue"
//listen for f-key clicked, once clicked, hide sleepScreen
//Move to newLevelScreen

//newLevelScreen
//Ocean Waves gif
//Insert Rick Roll audio https://www.youtube.com/watch?v=V-_O7nl0Ii0


// const lilogotchi = {
//     hunger: Math.floor(Math.random() * 10),
//     sleepiness: Math.floor(Math.random() * 10),
//     happiness: Math.floor(Math.random() * 10)
// }

// const timer = setInterval(function () {
//     console.log('tick')

//     lilogotchi.hunger++;
//     lilogotchi.sleepiness++;
//     lilogotchi.happiness++;

//     console.log(lilogotchi)

//     if (lilogotchi.hunger === 10) {
//         const gameOverMessage = '<p>Game Over! Your lilogotchi died!</p>';
//         $('body').append(gameOverMessage);

//         if (lilogotchi.sleepiness === 10) {
//             const gameOverMessage = '<p>Game Over! Your lilogotchi died!</p>';
//             $('body').append(gameOverMessage);

//             if (lilogotchi.happiness === 10) {
//                 const gameOverMessage = '<p>Game Over! Your lilogotchi died!</p>';
//                 $('body').append(gameOverMessage);

//                 clearInterval(timer);

//             }
//         }
//     }
// }, 10000);