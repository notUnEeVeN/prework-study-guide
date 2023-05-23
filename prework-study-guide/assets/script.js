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

for (var i = 0; i < topics.length; i++) {
    console.log(topics[i]);
}

/*
if (topic === 'HTML') {
    console.log("Let's study HTML!");
} else if (topic === 'CSS') {
    console.log("Let's study CSS!");
} else if (topic === 'Git') {
    console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
    console.log("Let's study JavaScript!");
} else {
    console.log('Please try again!');
}
*/
