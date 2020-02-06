function stdin(input) {
    // If enter is pressed:
    if (event.keyCode == 13) {
        var command = input.value;
        // create placeholder from duplicated node:
        var parent = input.parentNode; // <pre>
        var clone = parent.cloneNode(true);
        var placeholder = clone.getElementsByTagName('output')[0]; // <output>
        // write output from input command:
        placeholder.value = exec(command);
        // clear current prompt:
        input.value = "";
        // insert placeholder before prompt:
        parent.parentNode.insertBefore(clone, parent);
        // Handle cleaning:
        if (command == "clear") {
            var terminal = parent.parentNode;
            while (terminal.childElementCount > 1) {
                terminal.removeChild(terminal.firstChild);
            }
        }
    }
}

function exec(command) {
    switch (command) {
        case "":
            return "";
        case "clear":
            return "";
        case "bash":
            return "";
        case "/bin/bash":
            return "";
        default:
            return "bash: command not found: ".concat(command);
    }
}

function promptFocus(){
    var inputs = document.getElementsByTagName('input');
    inputs[inputs.length-1].focus();
}