//Create a variable that will store the value when the user enters a name into the input
//Select the form that is storing both the input and submit button and add an eventListener to the submit button
//Once the submit button is clicked, display an alert that will display stored value name and a message
//Add class of hidden to the openingScreen and remove class of hidden to mainScreen
//Append a message to the mainScreen that lets the user know their tamagotchi would like to play
const audio = new Audio('./imgs/animewow.mp3')
audio.play();

const nameInput = document.getElementById('name');
document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault();
    const audio = new Audio('./imgs/histitch.mp3')
    audio.play();
    alert(`Yay! ${nameInput.value} is born!`);
    let $name = $('#name').val();


    $('#openingScreen').addClass('hidden')
    $('#mainScreen').removeClass('hidden')

    $('#continueMessage').append(`${nameInput.value} wants to go feed Pudge!`)
});


//When the play button is clicked, hide playScreen
$('.play').on('click', function () {
    $('main').addClass('hidden')
    $('#playScreen').removeClass('hidden')
});

//Create a class for the tamagotchi that will store hunger, sleepiness, happiness
const stitchgotchi = {
    hunger: Math.floor(Math.random() * 20),
    sleepiness: Math.floor(Math.random() * 20),
    happiness: Math.floor(Math.random() * 20)
}

//Create a function that will update the meters throughout the game
function updateStats() {
    $('.hunger').attr('value', `${stitchgotchi.hunger}`)
    $('.sleepiness').attr('value', `${stitchgotchi.sleepiness}`)
    $('.happiness').attr('value', `${stitchgotchi.happiness}`)
    $('.age').text(`Age: ${stitchgotchi.age}`)
}

//Create a variable that will store a function that updates the tamagotchi's health level every 10 seconds
//If the tamagotchi hunger, sleepiness, or happiness level reaches 20 then the death screen will appear
//Add in a button that will allow the user to start the game over
const timer = setInterval(function () {
    console.log('tick')

    stitchgotchi.hunger++;
    stitchgotchi.sleepiness++;
    stitchgotchi.happiness++;

    updateStats();
    console.log(stitchgotchi)


    if (stitchgotchi.hunger === 20) {
        death();
        clearInterval(timer);
    }
    else if (stitchgotchi.sleepiness === 20) {
        death();
        clearInterval(timer);
    }
    else if (stitchgotchi.happiness === 20) {
        death();
        clearInterval(timer);
    }


}, 10000);

function death() {
    $('main').addClass('hidden')
    $('#deathScreen').removeClass('hidden')
    $('#death-message').text('Oh no! Your stitchgotchi died!')

    const audio = new Audio('./imgs/rickroll.mp3')
    audio.play();

    $('.home').on('click', function () {
        $('main').addClass('hidden')
        $('#mainScreen').removeClass('hidden')

    });
}

//Listen for a click on the "feed pudge" button, when clicked a new gif will be displayed and an alert message will appear
//Listen for a click on the "lunch" button and update the tamagotchi's hunger level, and remove class of hidden on lunchScreen
$('.feed-pudge').on('click', function () {
    $('#stitch-bikini').attr("src", "https://i.ibb.co/mh804w8/pudge-the-fish.gif");
    const audio = new Audio('./imgs/animewow.mp3')
    audio.play();
    $('#naniMessage').append('Time to come home for lunch!')

});

$('.lunch').on('click', function () {
    updateStats(stitchgotchi.hunger--)
    $('main').addClass('hidden')
    $('#lunchScreen').removeClass('hidden')
    const audio = new Audio('./imgs/stitcheating.mp3')
    audio.play();

});

//Add in an appending message
$('#lunchMessage').append('But I\'m not hungry! I need a nap.')

//Listen for a click on "sleep" button and update the tamagotchi's sleepiness level, and remove class of hidden of sleepScreen
$('.sleepiness').on('click', function () {
    updateStats(stitchgotchi.sleepiness--)
    $('main').addClass('hidden')
    $('#sleepScreen').removeClass('hidden')

    const audio = new Audio('./imgs/leavemealone.mp3')
    audio.play();
});

$('.home').on('click', function () {
    updateStats(stitchgotchi.happiness--)
    $('main').addClass('hidden')
    $('#mainScreen').removeClass('hidden')

});