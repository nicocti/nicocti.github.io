function stdin(input) {
    // If enter is pressed:
    if (event.keyCode == 13) {
        // create placeholder from duplicated node:
        var parent = input.parentNode; // <pre>
        var clone = parent.cloneNode(true);
        var placeholder = clone.getElementsByTagName('output')[0]; // <output>
        // write output from input command:
        placeholder.value = exec(input.value);
        // clear current prompt:
        input.value = "";
        // insert placeholder before prompt:
        parent.parentNode.insertBefore(clone, parent);
    }
}

function exec(command) {
    switch (command) {
        case "":
            return ""
        default:
            return "bash: command not found: ".concat(command);
    }
}