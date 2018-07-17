const express = require('express')
const fs = require('fs')
const path = require('path')
const unoconv = require('unoconv')
const app = express()

var logpath = path.join('./file')

function readlogdir(path) {
  fs.readdir(path, function(err, menu){
    if (!menu) {
      console.log('err')
      return
    } else {
      menu.forEach(function (file) {
        fs.stat(path + '/' + file, function(err, stat) {
          if (err) {
            console.log('err stat')
            return
          } else {
            if (stat.isDirectory()) {
              readlogdir(path + '/' + file)
            } else {
              console.log('文件名：' + path + '/' + file)
              unoconv.convert(path + '/' + file, 'pdf', function (err, result) {
              	// result is returned as a Buffer
              	fs.writeFile(path + '/converted.pdf', result);
              });
            }
          }
        })
      })
    }
  })
}

readlogdir(path.join(logpath))

app.listen(3000, function () {
  console.log('this is a 3000')
})
