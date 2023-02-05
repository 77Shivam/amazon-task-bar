// question 1

function checkEligibity() {
    const age = Number(prompt("your age??"));
    const conf = confirm("do you want to see your inputs agin??"); // question 2

    if (conf) {
        alert(age);
    }

    if (age > 18) {
        alert("you can drive !!");
    } else if (age < 0) {
        console.error("age is negative!!") // question 3
    } else {
        alert("you cannot drive");
    }
}

// question 4
function changeUrl() {
    const num = Number(prompt("enter num greater than 4"));
    if (num > 4) {
        return window.location.replace("https://www.google.com");
    } else {
        return
    }
}

// question 5
function changetheBackground() {
    const body = document.getElementById("body");
    console.log(body)

    const color = prompt("change the background color to : ");

    body.style.backgroundColor = color;
}