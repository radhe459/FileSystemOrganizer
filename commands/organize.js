let fs = require("fs")
let path = require("path")


let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', 'xz'],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'odp', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'pkg', 'deb']
}

function organizefn(dirpath) {
    // console.log("organize command ", dirpath);
    //1. input->dirpath
    if (dirpath == undefined) {
        dirpath = process.cwd();
        // return;
    }
    // else {
    let doesexist = fs.existsSync(dirpath)
    if (doesexist) {
        //2. dirpath-> create a folder with name organize files.
        let crtnPath = path.join(dirpath, "organize_files");
        if (fs.existsSync(crtnPath) == false) {
            fs.mkdirSync(crtnPath)
        }
        organizeHelp(dirpath, crtnPath);
    }
    else {

        console.log("please enter valid path.")
        return;
    }
    // }
}

function organizeHelp(src, des) {
    //3. identify the type of files in dirpath.

    let childNames = fs.readdirSync(src);

    for (let i = 0; i < childNames.length; i++) {
        let childAdress = path.join(src, childNames[i]);

        let isfile = fs.lstatSync(childAdress).isFile();
        if (isfile) {
            let category = getType(childNames[i]);
            //4. copy/cut the files into type of organized files folder.
            organizeCategory(childAdress, des, category);

        }
    }

}

function getType(name) {
    //To get the extension type of files
    let ext = path.extname(name);
    ext = ext.slice(1);
    for (let type in types) {
        let typearr = types[type]
        for (let i = 0; i < typearr.length; i++) {
            if (ext == typearr[i]) {
                return type
            }
        }
    }
    return "others";
}

function organizeCategory(srcpath, des, category) {
    let categorypath = path.join(des, category)
    if (fs.existsSync(categorypath) == false) {
        fs.mkdirSync(categorypath);
    }
    let fileName = path.basename(srcpath);
    let fileDes = path.join(categorypath, fileName);
    try {
        fs.copyFileSync(srcpath, fileDes);
    }
    catch (err) {
        console.log("error occured")
    }
    // if required to remove original file then unlink.
    // fs.unlink(srcpath)
    console.log(fileName, " copied to destination.")
}

module.exports = {
    organizekey: organizefn
}