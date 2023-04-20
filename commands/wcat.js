const fs = require("fs")

function wcatfn(command) {

    let commandarr = [];
    let filearr = [];
    for (let i = 0; i < command.length; i++) {
        if (command[i].charAt(0) == '-')
            commandarr.push(command[i]);
        else {
            filearr.push(command[i])
        }
    }

    if (commandarr.includes("-b") && commandarr.includes("-n")) {
        console.log("enter either -b or -n.")
        return;
    }
    let content = "";
    for (let i = 0; i < filearr.length; i++) {
        if (fs.existsSync(filearr[i])) {
            let bufferContent = fs.readFileSync(filearr[i]);
            content += bufferContent + "\r\n";
        }
        else {
            console.log("Enter correct file name/path " + filearr[i] + " is wrong.")
            return;
        }
    }
    // console.log(content)
    let contentarr = content.split("\r\n");
    // console.log(contentarr)

    if (commandarr.includes("-s")) {
        let temp = [];
        for (let i = 0; i < contentarr.length; i++) {
            if (contentarr[i] != "") {
                temp.push(contentarr[i]);
                temp.push("");
            }
        }
        contentarr = temp;
    }
    // console.log(contentarr.join("\n"));
    let isbpresent = commandarr.includes("-b");
    let isnpresent = commandarr.includes("-n");
    if (isnpresent && !(isbpresent)) {

        for (let i = 0; i < contentarr.length; i++) {
            contentarr[i] = `${i + 1} ${contentarr[i]}`
        }
    }
    // console.log(contentarr.join("\n"));

    if (isbpresent && !(isnpresent)) {

        for (let i = 0; i < contentarr.length; i++) {
            if (contentarr[i] != "")
                contentarr[i] = `${i + 1} ${contentarr[i]}`
        }
    }
    console.log(contentarr.join("\n"));
}


module.exports = {
    wcatkey: wcatfn
}