// display amesage to the user
function getValue() {
    alert("Hello App");
}
//Program Entry Point

function getValues2() {

    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);


    // check  to see if they are in fact an interger //
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {

        //generate a list of numbers
        let numbers = generateNumbers(startValue, endValue);

        //display a list of numbers
        displayNumbers(numbers);

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Only intergers are allowed for Hundo'
        })
    }
}

function generateNumbers(start, end){

    let numbers= [];
     for (let i = start; i <= end; i++){
        numbers.push(i);
     }
    
return numbers;

    /*  
    [1,2,3,4,5,6,7,8,9,]*/
}

function displayNumbers(numbers){

    let templateRows = "";
    let className = "";
    for (let index = 0; index < numbers.length; index ++){

        let number = numbers[index];

        if (number % 2 == 0){
            className="even";
        }
        else{
            className="odd";
        }

        let row = `<tr><td class="${className}">${number}</td></tr>`;
        templateRows += row;
    }

    document.getElementById("results").innerHTML = templateRows;
}