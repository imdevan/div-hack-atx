
  $.ajax({
  url:"https://www.kimonolabs.com/api/1vnzmulw?apikey=82g96zzCQGXPX0Z3htZgjT74Vc7hvFCN",
  crossDomain: true,
  dataType: "jsonp",
  success: function (response) {
    var t = response.results.collection1;
    for(var i = 0; i < t.length; i++) {
      var inner = t[i].property1;
      console.log(inner);
      //<li class="article"><a href=""></a></li>
      $("#newscolumn").append("<li class=\"article\"><a href=\""+ inner["href"] + "\">" + inner["text"] + "</a></li>" );
    }
  },
  error: function (xhr, status) {
    //handle errors
  }
});


  $.ajax({
  url:"https://www.kimonolabs.com/api/2dje4o7w?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
  crossDomain: true,
  dataType: "jsonp",
  success: function (response) {
    var t = response.results.collection1;
    for(var i = 0; i < t.length; i++) {
      var inner = t[i].property1;
      console.log(inner);
      //<li class="article"><a href=""></a></li>
      $("#stemcolumn").append("<li class=\"article\"><a href=\""+ inner["href"] + "\">" + inner["text"] + "</a></li>" );
    }
  },
  error: function (xhr, status) {
    //handle errors
  }
});