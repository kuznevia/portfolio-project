function generate() {
    
    let listOneArray = document.getElementById("length").value.split(',');
    let listTwoArray = document.getElementById("length").value.split(',');
    var copy = document.querySelector('#copy');

    let result = [];

    
    while (listOneArray.length > 0) {
        let randomNumberOne = random(listOneArray.length);
        let randomNumberTwo = 0;

        do {
            randomNumberTwo = random(listTwoArray.length);
        } while (listOneArray.length > 1 && listOneArray[randomNumberOne] === listTwoArray[randomNumberTwo])
    
        let pair = [listOneArray[randomNumberOne], listTwoArray[randomNumberTwo]];
        result.push(pair);
        listOneArray.splice(randomNumberOne, 1);
        listTwoArray.splice(randomNumberTwo, 1);

    }    
    
    write(result);
    copy.classList.remove('hidden');
   
}

function reset() {
    document.getElementById("password").innerHTML = '';
    document.getElementById("length").value = '';
    document.querySelector('#copy').classList.add('hidden');
}
 

function write (text) {
    document.getElementById("length").value = text;
}

function random(max) {
    return Math.floor(Math.random() * Math.floor(max));
}