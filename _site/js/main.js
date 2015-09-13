
  $.ajax({
  url:"https://www.kimonolabs.com/api/1vnzmulw?apikey=82g96zzCQGXPX0Z3htZgjT74Vc7hvFCN",
  crossDomain: true,
  dataType: "jsonp",
  success: function (response) {
    var t = response.results.collection1;
    for(var i = 0; i < t.length; i++) {
      var inner = t[i].property1;

      setTimeout(function() {
        $("#newscolumn").append("<a href=\""+ inner["href"] + "\"><li class=\"article\">" + inner["text"] + "</li></a>" );
      }, 200);
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

      setTimeout(function() {
        $("#stemcolumn").append("<a href=\""+ inner["href"] + "\"><li class=\"article\">" + inner["text"] + "</li></a>" );
      }, 200);
    }
  },
  error: function (xhr, status) {
    //handle errors
  }
});


  $.ajax({
  url:"https://www.kimonolabs.com/api/4zgbid62?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
  crossDomain: true,
  dataType: "jsonp",
  success: function (response) {
    var t = response.results.collection1;
    for(var i = 0; i < t.length; i++) {
      var inner = t[i].property1;

      setTimeout(function() {
        $("#scholarcolumn").append("<a href=\""+ inner["href"] + "\"><li class=\"article\">" + inner["text"] + "</li></a>" );
      }, 200);
    }
  },
  error: function (xhr, status) {
    //handle errors
  }
});