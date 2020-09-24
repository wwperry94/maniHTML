// Step 1

let div = document.createElement("div");
let button = document.createElement("button");
button.innerText = "Click for a nice message";
document.body.appendChild(button);
document.body.appendChild(div);
div.appendChild(button);
button.addEventListener('click', () => {
    alert("A (nice) Message.")
});

// Step 2

let message = document.getElementById("message");
document.getElementById("myButton").addEventListener("click", function () {
    // console.log(message.value)
    alert(message.value);
});

// Step 3

document.body.appendChild(div);
div.style.backgroundColor = 'white';    // in lieu of a complete .css file
div.style.height = '50px'
div.addEventListener("mouseover", () => {
    div.style.backgroundColor = 'crimson';
}); 
div.addEventListener("mouseout", () => {
    div.style.backgroundColor = 'white';
});

// Step 4

let p = document.createElement("p");
document.body.appendChild(p);
p.innerText = "Never argue with stupid people, they will drag you down to their level and then beat you with experience. ~ Mark Twain"
p.style.fontSize = "30px";
p.addEventListener("click", function () {
//    console.log("p has been clicked");
    p.style.color = getRandomColor();
});
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Step 5

let nmButton = document.createElement('button');
nmButton.innerText = "Display Name";
document.body.appendChild(nmButton);
nmButton.addEventListener('click', function () {
    let nmDiv = document.createElement('div');
    let span = document.createElement('span');
    span.innerText = 'Your Name lol';
    nmDiv.appendChild(span);
    document.body.appendChild(nmDiv);
});

// Step 6

const friendsArray = ["John", "Oscar", "Yogi", "Bill", "George", "Pete", "Sam", "Bruce", "Warner", "Tyler"];
let button2 = document.getElementById("friendButton");
let counter = 0
button2.addEventListener('click', function populateFriends() {
    if (friendsArray[counter]) {
        let newLI = document.createElement("li");
        let friend = friendsArray[counter];
        counter++;
        let newFriend = document.createTextNode(friend);
        newLI.appendChild(newFriend);
        let displayFriends = document.getElementById("friends");
        displayFriends.appendChild(newLI);
    };
});