// Constants for query selector
const myStudentId = "200538493"; 
const colors = ['red', 'green', 'blue', 'orange', 'purple', 'yellow'];
const imageSelect = document.getElementById("imageSelect");
const customNumberInput = document.getElementById("customNumber");
const custColorButton = document.querySelector(".custColor");
const randColorButton = document.querySelector(".randColor");
const images = document.getElementById("images");

// Function to change background color from user input and add student id
function changeCustomColor() {
    const number = parseInt(customNumberInput.value);
    document.getElementById("myStudentId").innerText = myStudentId;
    setBackgroundColor(number);
}

// Function to change background color from random number
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("myStudentId").innerText = myStudentId;
    setBackgroundColor(randomNumber);
}

// Function to generate options for select list
function addList() {
    const imageOptions = ["Please choose..","img1.jpg", "img2.jpg", "img3.jpg"]; 

    // Clear existing options
    imageSelect.innerHTML = "";

    imageOptions.forEach((image) => {
        const option = document.createElement("option");
        option.value = image;
        option.text = image;
        imageSelect.add(option);
    });
}

// Function to change image
function changeImage() {
    const selectedImage = imageSelect.options[imageSelect.selectedIndex].value;
    images.src = `img/${selectedImage}`;
}

// Event listeners for on click event of buttons and select
custColorButton.addEventListener("click", changeCustomColor);
randColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("change", changeImage);

// Event listener to ensure options are added only once
document.addEventListener("DOMContentLoaded", addList);

// Function to set the background color based on the provided conditions
function setBackgroundColor(number) {
    let colorIndex;

    if (number < 0 || number > 100) {
        colorIndex = 0; // Red color
    } else if (number >= 0 && number <= 20) {
        colorIndex = 1; // Green color
    } else if (number > 20 && number <= 40) {
        colorIndex = 2; // Blue color
    } else if (number > 40 && number <= 60) {
        colorIndex = 3; // Orange color
    } else if (number > 60 && number <= 80) {
        colorIndex = 4; // Purple color
    } else {
        colorIndex = 5; // Yellow color
    }

    document.body.style.backgroundColor = colors[colorIndex];
}
