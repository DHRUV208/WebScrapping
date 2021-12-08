const cheerio = require("cheerio");
const request  = require("request");
const scoreCardObj = require("./scorecard");

function getAllMatchesLink(url){
    request(url,function(err,response,html){
        if(err){
            console.log(err);
        }else{
            getLink(html);
        }
    })
}

function getLink(html){
    let $ = cheerio.load(html);
    let anchorScoreElem = $("a[data-hover='Scorecard']");
    for(let i =0;i<anchorScoreElem.length;i++){
        let link = anchorScoreElem.attr("href");    
     let fullLink = "https://www.espncricinfo.com" + link;
        console.log(fullLink);
        scoreCardObj.ps(fullLink);
    }
    
    
}

module.exports = {
    galmatches: getAllMatchesLink
}