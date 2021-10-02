const imgs = document.getElementById('img');
const names = document.getElementById('name');
const job = document.getElementById('job');
const note = document.getElementById('note');
console.log(imgs);
console.log(names);
console.log(job);
console.log(note);


const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentRev = 0;

window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentRev);
    
})

function showPerson(friend){
    let person = reviews[friend];
    imgs.src = person.img;
    names.textContent = person.name;
    job.textContent = person.job.toUpperCase();
    note.textContent = person.text;
}



nextBtn.addEventListener('click', function(){
    currentRev++;
    if(currentRev > reviews.length-1){
        currentRev = 0;
    }
    showPerson(currentRev);
})

prevBtn.addEventListener('click', function(){
    currentRev--;
    if (currentRev < 0){
        currentRev = reviews.length-1;
    }
    showPerson(currentRev);
})



let reviews = [
    {
        img: "./images/ryan-hoffman.jpg",
        job: "UI/UX DESIGNER",
        name: "Ryan Hoffman",
        text: "Working with mujeeb on the grocery project gave me the needed insight for my bitbite project, the necessary implementation of ui/ux..."
    },
    {
        img: "./images/mitchell-dam.jpg",
        job: "BACKEND DEVELOPER",
        name: "Mitchell Dam",
        text: "integration testing was fun, interactive frontend gave me the knuckle blow before now this is why i'll always have a strong affinity for someone like mujeeb in my team",
    },
    {
        img: "./images/evan-wise.jpg",
        job: "Data Analyst",
        name: "Evan Wise",
        text: "The sprint phase and regular contact during the program design is top notch, i'll always recommend mujeeb",
    },
    {
        img: "./images/darshan-patel.jpg",
        job: "Programmer",
        name: "Darshan Patel",
        text: "its one thing to develop a simple approach to programmatic problems and its another to be just simple, you'll find both in mujeeb",
    }

];

