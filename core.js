window.onload = function () {
    var data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
        "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e",
        "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "!", "@", "#", "$", "%", "^", "&", "*"];
    var str = "";
    var numbers = document.getElementById("numbers");
    var uppercase = document.getElementById("uppercase");
    var lowercase = document.getElementById("lowercase");
    var symbols = document.getElementById("symbols");
    var length = 16;
    var btn = document.getElementById("confirm");
    var pw = document.getElementById("pw");
    btn.onclick = function make() {
        length = document.getElementById("length").value;
        switch (true) {
            case numbers.checked && !uppercase.checked && !lowercase.checked && !symbols.checked:
                generate(length, 0, 9);
                break;
            case !numbers.checked && uppercase.checked && !lowercase.checked && !symbols.checked:
                generate(length, 10, 35);
                break;
            case !numbers.checked && !uppercase.checked && lowercase.checked && !symbols.checked:
                generate(length, 36, 61);
                break;
            case !numbers.checked && !uppercase.checked && !lowercase.checked && symbols.checked:
                generate(length, 62, 69);
                break;
            case !numbers.checked && uppercase.checked && lowercase.checked && !symbols.checked:
                generate(length, 10, 61);
                break;
            case numbers.checked && uppercase.checked && !lowercase.checked && !symbols.checked:
                generate(length, 0, 35);
                break;
            case numbers.checked && !uppercase.checked && lowercase.checked && !symbols.checked:
                symbolsGenerate(length, 0, 61, 10, 35);
                break;
            case !numbers.checked && !uppercase.checked && lowercase.checked && symbols.checked:
                generate(length, 36, 69);
                break;
            case !numbers.checked && uppercase.checked && !lowercase.checked && symbols.checked:
                symbolsGenerate(length, 10, 69, 36, 61);
                break;
            case numbers.checked && !uppercase.checked && !lowercase.checked && symbols.checked:
                symbolsGenerate(length, 0, 69, 10, 61);
                break;
            case numbers.checked && uppercase.checked && lowercase.checked && !symbols.checked:
                generate(length, 0, 61);
                break;
            case !numbers.checked && uppercase.checked && lowercase.checked && symbols.checked:
                generate(length, 10, 69);
                break;
            case numbers.checked && !uppercase.checked && lowercase.checked && symbols.checked:
                symbolsGenerate(length, 0, 69, 10, 35);
                break;
            case numbers.checked && uppercase.checked && !lowercase.checked && symbols.checked:
                symbolsGenerate(length, 0, 69, 36, 61);
                break;
            case numbers.checked && uppercase.checked && lowercase.checked && symbols.checked:
                generate(length, 0, 69);
                break;
            default:
                alert("error: Numbers? Uppercase? Lowercase? Symbols?");
                break
        }
    };

    function generate(len, startnumbers, endnumbers) {
        for (var i = 0; i <= len; i++) {
            var ram = Math.floor(Math.random() * (endnumbers - startnumbers + 1) + startnumbers);
            str += data[ram]
        }
        pw.innerHTML = str;
        str = ""
    }

    function symbolsGenerate(len, startnumbers, endnumbers, expnumbers1, expnumbers2) {
        var curlength = len;
        for (var i = 0; i <= curlength; i++) {
            var ram = Math.floor(Math.random() * (endnumbers - startnumbers + 1) + startnumbers);
            if (ram >= expnumbers1 && ram <= expnumbers2) {
                curlength++;
                continue
            }
            str += data[ram]
        }
        pw.innerHTML = str;
        str = ""
    }
};