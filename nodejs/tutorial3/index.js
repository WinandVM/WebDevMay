const fs = require('fs'); // import fs module 

// rename file
// fs.rename('notes.txt','notes.js',(err)=>{
//     if(err) throw err;
//     console.log('file renamed');
// })

// find files and rename them
fs.readdir('./',(err,files)=>{
    let filesNames = files.filter(file=>file.includes('12sd'))
 //   console.log(filesNames)
    filesNames.forEach(file=>{
        console.log(file) // print file name
        // rename all here
    })
})
