document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var age = parseInt(document.getElementById('age').value);

    var generation;
    if (age < 18) {
        generation = "Gen Z";
    } else if (age >= 18 && age < 40) {
        generation = "Millennial";
    } else if (age >= 40 && age < 56) {
        generation = "Gen X";
    } else if (age >= 56 && age < 76) {
        generation = "Baby Boomer";
    } else {
        generation = "Silent Generation";
    }

    var message = name + " is a " + generation;
    alert(message);
});