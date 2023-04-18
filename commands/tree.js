let fs = require("fs")
let path = require("path")

function treefn(dirpath) {
    if (dirpath == undefined) {
        treeHelper(process.cwd(), "");
        return;
    }
    else {
        let doesexist = fs.existsSync(dirpath)
        if (doesexist) {
            treeHelper(dirpath, "");
        }
        else {

            console.log("please enter valid path.")
            return;
        }
    }
}

function treeHelper(dirpath, indent) {
    let isFile = fs.lstatSync(dirpath).isFile();
    if (isFile == true) {
        let fileName = path.basename(dirpath)
        console.log(indent + "|--" + fileName)
    }
    else {
        let content = fs.readdirSync(dirpath)
        let dirName = path.basename(dirpath);
        console.log(indent + '|__' + dirName)
        for (let i = 0; i < content.length; i++) {
            let contentPath = path.join(dirpath, content[i])
            treeHelper(contentPath, indent + "\t");
        }
    }
}

module.exports = {
    treekey: treefn
}