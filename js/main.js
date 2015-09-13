function postArticle(id, href, text) {
  $(id).append("<a class='article-list--link' href=\""+ href + "\"><li class='article-list--article'>" + text + "</li></a>" );
}

function ajaxRequest(id, apiurl) {
  $.ajax({
  url: apiurl,
  crossDomain: true,
    dataType: "jsonp",
    success: function (response) {
      var t = response.results.collection1;
      var i = 0;                     //  set your counter to 1

      function myLoop () {           //  create a loop function
         setTimeout(function () {    //  call a 3s setTimeout when the loop is called
            var prop = t[i].property1;         //  your code here
            postArticle(id, prop["href"], prop["text"]);
            i++;                     //  increment the counter
            if (i < t.length) {            //  if the counter < 10, call the loop function
               myLoop();             //  ..  again which will trigger another 
            }                        //  ..  setTimeout()
         }, 50)
      }

      myLoop();
    }
  });
}
var api = {
  huffpost:  "https://www.kimonolabs.com/api/1vnzmulw?apikey=82g96zzCQGXPX0Z3htZgjT74Vc7hvFCN",
  verge: "https://www.kimonolabs.com/api/2dje4o7w?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
  mashable:  "https://www.kimonolabs.com/api/4zgbid62?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
  imdiversity: "https://www.kimonolabs.com/api/57hown3e?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
  newser: "https://www.kimonolabs.com/api/drj6e7zo?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
  agsci: "https://www.kimonolabs.com/api/6vm998xm?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
  diversityinc: "https://www.kimonolabs.com/api/7te7qreq?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
  entrepreneur: "https://www.kimonolabs.com/api/97nzx0te?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
  indian:  "https://www.kimonolabs.com/api/c96ihge8?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
  african: "https://www.kimonolabs.com/api/cpaf5bj8?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
  middleeastern: "https://www.kimonolabs.com/api/akv3o700?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
  latino: "https://www.kimonolabs.com/api/c3oxsuua?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
  asian: "https://www.kimonolabs.com/api/1z3d9pao?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
  women: "https://www.kimonolabs.com/api/1wtmqk46?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
  lgbt: "https://www.kimonolabs.com/api/94qw18w8?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC"
}


ajaxRequest('#news-list', api.huffpost);

ajaxRequest('#stem-list', api.verge);

ajaxRequest('#scholarship-list', api.indian);
