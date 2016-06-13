/**
* Using Rails-like standard naming convention for endpoints.
* GET     /api/things              ->  index
*/

'use strict';
var request = require("request"),
cheerio = require("cheerio");

// Gets a list of Things
export function index(req, res) {
  console.log("Visiting Page : ", req.query.url);
  var data = {};
  //console.log(requestPageToVisit(req.query.url))
  request(req.query.url, function(err, response, body){
    if(err){
      console.log("Error : ", err);
      data.error = err;
    }

    if(response.statusCode === 200){
      var $ = cheerio.load(body);
      data.success = collectInternalLinks($);
    }
    res.json(data);
  });
}

function collectInternalLinks($){
  var relativeUrlsCollection = [],
  absUrlsCollection = [],
  relativeUrls = $("a[href^='/']"),
  absUrls = $("a[href^='http']");

  function setUrlInCollection(urls, collectionName){
    urls.each(function(){
      collectionName.push($(this).attr("href"));
    })
  }

  setUrlInCollection(relativeUrls, relativeUrlsCollection);
  setUrlInCollection(absUrls, absUrlsCollection);

  return {relativeUrls : relativeUrlsCollection, absUrls: absUrlsCollection};
}
