function postArticle(id, href, text) {
  $(id).append("<a class='article-list--link' href=\""+ href + "\"><li class='article-list--article'>" + text + "</li></a>" );
}

function ajaxRequest(id, apiurl) {
  $.ajax({
  url: apiurl,
  crossDomain: true,
    dataType: "json",
    success: function (response) {
      var t = response.results.collection1;
      var i = 0;
      // Loop function isn't a for loop, because we wanted to add an intentional delay
      function myLoop () {
         setTimeout(function () {
            // Property from the api call to the article list
            var prop = t[i].property1;
            postArticle(id, prop["href"], prop["text"])
            //  increment the counter
            i++;              
            // iterate the loop       
            if (i < t.length) {    
               // Loop!       
               myLoop();            
            }
         }, 50) // set the delay
      }

      myLoop();
    }
  });
}

// Our lovely apis
var api = {
  huffpost: {
      url: "https://www.kimonolabs.com/api/1vnzmulw?apikey=82g96zzCQGXPX0Z3htZgjT74Vc7hvFCN",
      name: "Huffington Post"
    },
  verge: {
      url: "https://www.kimonolabs.com/api/2dje4o7w?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
      name: "Verge"
    },
  mashable: {
      url:  "https://www.kimonolabs.com/api/4zgbid62?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
      name: "Mashable"
    },
  imdiversity: {
      url: "https://www.kimonolabs.com/api/57hown3e?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
      name: "IMDiversity"
      },
  newser: {
      url: "https://www.kimonolabs.com/api/drj6e7zo?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
      name: "Newser"
      },
  agsci: {
      url: "https://www.kimonolabs.com/api/6vm998xm?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
      name: "Penn State AGSCI"
      },
  diversityinc: {
      url: "https://www.kimonolabs.com/api/7te7qreq?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
      name: "Diversity Inc"
      },
  entrepreneur: {
      url: "https://www.kimonolabs.com/api/97nzx0te?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
      name: "Entrepreneur"
      },
  indian: {
      url: "https://www.kimonolabs.com/api/c96ihge8?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
      name: "American Indian Scholarships"
      },
  african: {
      url: "https://www.kimonolabs.com/api/cpaf5bj8?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
      name: "African American Scholarships"
      },
  middleeastern: {
      url: "https://www.kimonolabs.com/api/akv3o700?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
      name: "Middle Eastern Scholarships"
      },
  latino: {
      url: "https://www.kimonolabs.com/api/c3oxsuua?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
      name: "Hispanic/Latino Scholarships"
      },
  asian: {
      url: "https://www.kimonolabs.com/api/1z3d9pao?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
      name: "Asian American Scholarships"
      },
  women: {
      url: "https://www.kimonolabs.com/api/1wtmqk46?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
      name: "Scholarships for Women"
      },
  lgbt: {
      url: "https://www.kimonolabs.com/api/94qw18w8?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
      name: "LGBT Scholarships"
      }
}


// Initial ajax requests
ajaxRequest('#news-list', api.huffpost.url);
ajaxRequest('#stem-list', api.verge.url);
ajaxRequest('#scholarship-list', api.indian.url);