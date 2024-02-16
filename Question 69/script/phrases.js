function change() {
    var str = document.getElementById("str").value.trim();

    if (str == "") {
        alert("Please enter a string!");
        return;
    }

    if (!(/[(){}\[\]]/.test(str))) {
        alert("Please enter phrases!");
        return;
    }

    var stack = [];

    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);

        if (char == '(' || char == '{' || char == '[') {
            stack.push(char);
        } else if (char == ')' || char == '}' || char == ']') {
            if (stack.length == 0) {
                document.getElementById("result").innerHTML = "Invalid! : Unmatched closing parentheses at position " + (i + 1);
                return;
            } else {
                var top = stack.pop();

                if ((char == ')' && top != '(') || (char == '}' && top != '{') || (char == ']' && top != '[')) {
                    document.getElementById("result").innerHTML = "Invalid! : Mismatched parentheses at position " + (i + 1);
                    return;
                }
            }
        }
    }

    if (stack.length > 0) {
        document.getElementById("result").innerHTML = "Invalid! : Unmatched opening parentheses";
    } else {
        document.getElementById("result").innerHTML = "Valid : Parentheses are closed correctly";
    }
}
