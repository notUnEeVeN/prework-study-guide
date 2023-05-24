const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "assets/bowtie-cat.png") {
        myImage.setAttribute("src", "assets/rolling-stones.png");
    } else {
        myImage.setAttribute("src", "assets/bowtie-cat.png");
    }
}

var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (var i = 0; i < topics.length; i++) {
        console.log(topics[i]);
    }
}

function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (randomTopic  === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomTopic  === 'Git') {
        console.log("Let's study Git!");
    } else if (randomTopic  === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics(); 

console.log('Which topic should we study first');
selectTopic();