  function postArticle(id, href, text) {
    $(id).append("<a class='article-list--link' href=\""+ href + "\"><li class='article-list--article'>" + text + "</li></a>" );
  }

$.ajax({
url:"https://www.kimonolabs.com/api/1vnzmulw?apikey=82g96zzCQGXPX0Z3htZgjT74Vc7hvFCN",
crossDomain: true,
  dataType: "jsonp",
  success: function (response) {
    var t = response.results.collection1;
    for(var i = 0; i < t.length; i++) {
      var prop = t[i].property1;
      postArticle("#news-list", prop["href"], prop["text"]);
    } 
  }
});



$.ajax({
url:"https://www.kimonolabs.com/api/2dje4o7w?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
crossDomain: true,
dataType: "jsonp",
  success: function (response) {
    var t = response.results.collection1;
    for(var i = 0; i < t.length; i++) {
      var prop = t[i].property1;
      postArticle("#stem-list", prop["href"], prop["text"]);
    }
  }
});


$.ajax({
url:"https://www.kimonolabs.com/api/4zgbid62?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
crossDomain: true,
dataType: "jsonp",
  success: function (response) {
    var t = response.results.collection1;
    for(var i = 0; i < t.length; i++) {
      var prop = t[i].property1;
      postArticle("#scholarship-list", prop["href"], prop["text"]);
    }
  }
});