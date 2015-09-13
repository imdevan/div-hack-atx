function postArticle(id, href, text) {
  $(id).append("<a class='article-list--link' href=\""+ href + "\"><li class='article-list--article'>" + text + "</li></a>" );
}

function ajaxRequest(id, apiurl) {
  $.ajax({
  url: apiurl,
  crossDomain: true,
    dataType: "jsonp",
    success: function (response) {
			console.log(id);
      var t = response.results.collection1;
      for(var i = 0; i < t.length; i++) {
        var prop = t[i].property1;
        postArticle(id, prop["href"], prop["text"]);
      }
    }
  });
}
var api = {
  huffpost:  "https://www.kimonolabs.com/api/1vnzmulw?apikey=82g96zzCQGXPX0Z3htZgjT74Vc7hvFCN",
  verge: "https://www.kimonolabs.com/api/2dje4o7w?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
  mashable:  "https://www.kimonolabs.com/api/4zgbid62?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC"
}

$('.article-list--title').on('click', function () {
  for(var key in api) {
    // console.log(key);
  }
});

ajaxRequest('#news-list', api.huffpost);

ajaxRequest('#stem-list', api.verge);

ajaxRequest('#scholarship-list', api.mashable);

var titlename = '#news-list-title';
// refreshCol function ()
$(titlename).click(function (  ) {
	var listname = titlename.substr(0,titlename.length-6);
	var correspondinglist = $(listname);
	correspondinglist.empty();
	ajaxRequest(listname, api.mashable);
});
