    function generate() {
        var passwordLength = readInt();
        var password = '';
        var letter;
        var possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-=#!%$*";
        var copy = document.querySelector('#copy');

        for (var i = 0; i < passwordLength; i++) {
            letter = possible.charAt(Math.floor(Math.random() * possible.length));
            password = password + letter;	
        }
        write(password);
        copy.classList.remove('hidden');
    }
    
    function write (text){
        document.getElementById("length").value = text;
    }

    function show (text){
        document.getElementById("password").innerHTML = text;
    }

    function readInt(){
        var number = document.getElementById("length").value;
        return parseInt(number);
    }

    function copy (){
        var copyText = document.getElementById("length");
        copyText.select();
        document.execCommand("copy");
        show('Скопирован пароль: ' + copyText.value);
    }

    function reset() {
        document.getElementById("password").innerHTML = '';
        document.getElementById("length").value = '';
        var copy = document.querySelector('#copy');
        copy.classList.add('hidden');
    }