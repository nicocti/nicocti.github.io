function stdin(input) {
    // If enter is pressed:
    if (event.keyCode == 13) {
        var command = input.value;
        // create placeholder from duplicated node:
        var parent = input.parentNode.parentNode; // <pre>
        var clone = parent.cloneNode(true);
        // write output from input command:
        var output = exec(command);
        clone.appendChild(output)
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
        case "clear":
        case "bash":
        case "/bin/bash":
            var out = document.getElementById("text-output").cloneNode(true);
            out.style.display = "flex";
            return out;
        case "output0":
            var out = document.getElementById(command).cloneNode(true);
            out.style.display = "flex";
            return out;
        default:
            var out = document.getElementById("text-output").cloneNode(true);
            out.style.display = "flex";
            // if command contains /
            if (command.indexOf("/") !== -1) {
                out.value = "bash: " + command + ": No such file or directory";
                return out;
            }
            out.value = "bash: command not found: ".concat(command);
            return out;
    }
}

function promptFocus(){
    var inputs = document.getElementsByTagName('input');
    inputs[inputs.length-1].focus();
}