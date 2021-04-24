//openingScreen
//When player enters name, an alert will pop up, console will log name, and openingScreen will disappear when submit is clicked
const nameInput = document.getElementById('name');
document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert(`Yay! ${nameInput.value} is born!`);
    let $name = $('#name').val();
    $('#openingScreen').addClass('hidden')
    $('#mainScreen').removeClass('hidden')

    $('#continueMessage').append(`${nameInput.value} wants to go feed Pudge! Click 'play' to continue`)
});


//     const audio = new Audio('./imgs/notuna.mp3')
//     audio.play();

//     setTimeout(function () {
//         audio.pause();
//         audio.currentTime = 14;
//     }, 19000);
// }, 1000);

//When play is clicked, hide playScreen
$('.play').on('click', function () {
    $('main').addClass('hidden')
    $('#playScreen').removeClass('hidden')

});

// Create class for lilogotchi that will randomly produce hunger, sleepiness, and happiness levels
const lilogotchi = {
    hunger: Math.floor(Math.random() * 20),
    sleepiness: Math.floor(Math.random() * 20),
    happiness: Math.floor(Math.random() * 20)
}

function updateStats() {
    $('.hunger').attr('value', `${lilogotchi.hunger}`)
    $('.sleepiness').attr('value', `${lilogotchi.sleepiness}`)
    $('.happiness').attr('value', `${lilogotchi.happiness}`)
    $('.age').text(`Age: ${lilogotchi.age}`)
}

const timer = setInterval(function () {
    console.log('tick')

    lilogotchi.hunger++;
    lilogotchi.sleepiness++;
    lilogotchi.happiness++;

    updateStats();
    console.log(lilogotchi)


    if (lilogotchi.hunger === 20) {
        death();
        clearInterval(timer);
    }
    else if (lilogotchi.sleepiness === 20) {
        death();
        clearInterval(timer);
    }
    else if (lilogotchi.happiness === 20) {
        death();
        clearInterval(timer);
    }


}, 10000);

// if lilogotchi dies, deathScreen is going to show up
function death() {
    $('main').addClass('hidden')
    $('#deathScreen').removeClass('hidden')
    $('#death-message').text('Oh no! Your lilogotchi died!')

    const audio = new Audio('./imgs/rickroll.mp3')
    audio.play();

    $('.home').on('click', function () {
        $('main').addClass('hidden')
        $('#mainScreen').removeClass('hidden')

    });
}

//playScreen
//Listen for a click on "feed pudge" button, when clicked bring in Pudge's gif
$('.feed-pudge').on('click', function () {
    $('#lilo-swimming').attr("src", "https://i.ibb.co/mh804w8/pudge-the-fish.gif");
    //Alert message will pop up after feed pudge button
    $('#naniMessage').append('Time to come home for lunch!')


});
//Listen for a click on Lunch
$('.lunch').on('click', function () {
    updateStats(lilogotchi.hunger--)
    $('main').addClass('hidden')
    $('#lunchScreen').removeClass('hidden')

});

//lunchScreen
//add in <p> and .append "But I'm not hungry! I need a nap."
$('#lunchMessage').append('But I\'m not hungry! I need a nap.')

//Listen for a click on "sleep" button
$('.sleepiness').on('click', function () {
    updateStats(lilogotchi.sleepiness--)
    $('main').addClass('hidden')
    $('#sleepScreen').removeClass('hidden')

    const audio = new Audio('./imgs/leavemealone.mp3')
    audio.play();
});

$('.home').on('click', function () {
    updateStats(lilogotchi.happiness--)
    $('main').addClass('hidden')
    $('#mainScreen').removeClass('hidden')

});




