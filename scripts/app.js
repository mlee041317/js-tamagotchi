//openingScreen
//When player enters name, an alert will pop up, console will log name, and openingScreen will disappear when submit is clicked
const nameInput = document.getElementById('name');
document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert(`${nameInput.value} is born!`);
    let $name = $('#name').val();
    $('#openingScreen').addClass('hidden')
    $('#mainScreen').removeClass('hidden')

    $('#continueMessage').append(`${nameInput.value} wants to go feed Pudge! Click 'play' to continue`)

});

//When play is clicked, hide playScreen and bring in 
$('.play').on('click', function () {
    $('main').addClass('hidden')
    $('#playScreen').removeClass('hidden')

});

//Create class for lilogotchi that will randomly produce hunger, sleepiness, and happiness levels
const lilogotchi = {
    hunger: Math.floor(Math.random() * 10),
    sleepiness: Math.floor(Math.random() * 10),
    happiness: Math.floor(Math.random() * 10)
}

function updateStats() {
    $('.hunger').attr('value', `${lilogotchi.hunger}`)
    $('.sleepiness').attr('value', `${lilogotchi.sleepiness}`)
    $('.happiness').attr('value', `${lilogotchi.happiness}`)
    $('.age').text(`Age: ${lilogotchi.age}`)
}



const timer = setInterval(function () {
    console.log('tick')

    // lilogotchi.hunger++;
    // lilogotchi.sleepiness++;
    // lilogotchi.happiness++;

    updateStats();
    console.log(lilogotchi)


    if (lilogotchi.hunger === 10) {
        death();
        clearInterval(timer);
    }
    else if (lilogotchi.sleepiness === 10) {
        death();
        clearInterval(timer);
    }
    else if (lilogotchi.happiness === 10) {
        death();
        clearInterval(timer);
    }


}, 10000);

//if lilogotchi dies, deathScreen is going to show up
function death() {
    $('main').addClass('hidden')
    $('#deathScreen').removeClass('hidden')
    $('#death-message').text('insert message')
}

//playScreen
//Listen for a click on "feed pudge" button, when clicked bring in Pudge's gif
$('.feed-pudge').on('click', function () {
    $('#lilo-swimming').attr("src", "https://i.ibb.co/mh804w8/pudge-the-fish.gif");
    //Alert message will pop up after feed pudge button
    setTimeout(function () {
        alert('TXT MSG- Nani: Time to come home for lunch!');
    }, 1000);

});
//Listen for a click on Lunch
$('.lunch').on('click', function () {
    //add in decrease level of hunger
    $('main').addClass('hidden')
    $('#lunchScreen').removeClass('hidden')

});

//lunchScreen
//add in <p> and .append "But I'm not hungry! I need a nap."
$('#lunchMessage').append('But I\'m not hungry! I need a nap.')

//Listen for a click on "sleep" button
$('.sleepiness').on('click', function () {
    //add in decrease level of sleepiness
    $('main').addClass('hidden')
    $('#sleepScreen').removeClass('hidden')

});


//sleepScreen
//Animate images

//Insert "Leave me alone to die" song https://www.youtube.com/watch?v=yb1m04zid8k


//Move to mainScreen
$('.home').on('click', function () {
    //add in decrease level of sleepiness
    $('main').addClass('hidden')
    $('#mainScreen').removeClass('hidden')

});

//deathScreen
//Insert Rick Roll audio https://www.youtube.com/watch?v=V-_O7nl0Ii0


//music
//transfer youtube audio over to mp3
//download and upload to file on js-tamagotchi
//if(event.keyCode === 82) {
  //document.getElementById('lilo').play();
  //console.log('lilo');  