function stdin(input) {
    // If enter is pressed:
    if (event.keyCode == 13) {
        var command = input.value;
        // create placeholder from duplicated node:
        var parent = input.parentNode.parentNode; // <pre>
        var clone = parent.cloneNode(true);
        var placeholder = clone.getElementsByTagName('output')[0]; // <output>
        // write output from input command:
        var output = exec(command, placeholder);
        // clear current prompt:
        input.value = "";
        // insert placeholder before prompt:
        console.log(clone)
        parent.parentNode.insertBefore(clone, parent);
        // Handle cleaning:
        if (command == "clear") {
            var terminal = parent.parentNode;
            while (terminal.childElementCount > 2) {
                terminal.removeChild(terminal.firstChild);
            }
        }
    }
}

function exec(command, placeholder) {
    switch (command) {
        case "":
        case "clear":
        case "bash":
        case "/bin/bash":
            placeholder.value = "";
            return placeholder;
        case "output0":
            var out = document.getElementById(command).cloneNode(true);
            out.style.display = "flex";
            return out;
        default:
            // if command contains /
            if (command.indexOf("/") !== -1) {
                placeholder.value = "bash: " + command + ": No such file or directory";
                return placeholder;
            }
            placeholder.value = "bash: command not found: ".concat(command);
            return placeholder;
    }
}

function promptFocus(){
    var inputs = document.getElementsByTagName('input');
    inputs[inputs.length-1].focus();
}