
function helpfn() {
    console.log(`           commands are:
                    rsc  help
                    rsc  tree dirpath
                    rsc  organize dirpath
                    rsc  wcat -s/-n/-b filenames...
                    rsc  wcat -s/-n/-b filenames... > filename
                    rsc  wcat -s/-n/-b filenames... >> filename
                    `)
}

module.exports = {
    helpkey: helpfn
}