const express = require('express')
const app=express();
var fs = require('fs');
app.use(express.json())
app.post('/all',function(req,res){
    console.log(req.body)
    fs.readFile('test.txt', function(err, data) {
    if(err) throw err;
    var nP = data.toString().replace(/[\.,-\/''0-9#!$%\^&\*;:{}�=\-_'`’~"()@\+\?><\[\]\+]/g, '')
    var nE = nP.replace(/\s{2,}/g," ");
    var allUpperCase  = nE.toUpperCase();
    var array    = allUpperCase.split(/\s+/);
    var wordsMap = {};
 
    array.forEach(function (key) {
       if (wordsMap.hasOwnProperty(key)) {
         wordsMap[key]++;
    } else {
         wordsMap[key] = 1;
    }
  });
  
  var finalWordsArray = [];
  finalWordsArray = Object.keys(wordsMap).map(function(key) {
    return {

      name: key,
      total: wordsMap[key]

    };
  });

  finalWordsArray.sort(function(a, b) {
    return b.total - a.total;
  });
  top=[]
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

  for(var i=0;i<8;i++){
    top.push(finalWordsArray[i])
}
res.json(top);
});
})

app.use(express.static('public'));

app.listen(5000,function(req,res){
    console.log('Running')
});
