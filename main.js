#!/usr/bin/env node

let inputarr = process.argv.slice(2)
// let fs = require("fs")
// let path = require("path")
let helpobj = require("./commands/help")
let treeobj = require("./commands/tree")
let organizeobj = require("./commands/organize")
let wcatobj = require("./commands/wcat")


let command = inputarr[0];



switch (command) {
    case "tree":
        treeobj.treekey(inputarr[1]);
        break;
    case "organize":
        organizeobj.organizekey(inputarr[1])
        break;
    case "help":
        helpobj.helpkey()
        break;
    case "wcat":
        wcatobj.wcatkey(inputarr.slice(1))
        break
    default:
        console.log("please 🙏 Enter a valid command")
}
