function stdin(input) {
    // If enter is pressed:
    if (event.keyCode == 13) {
        // create placeholder from duplicated node:
        var parent = input.parentNode; // <pre>
        var child = parent.cloneNode(true);
        // write output from input command:
        var output = child.getElementsByTagName('output')[0]; // <output>
        output.value = exec(input.value);
        // clear current node:
        input.value = "";
        // insert placeholder before node:
        parent.parentNode.insertBefore(child, parent);
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