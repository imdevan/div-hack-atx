
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
      $("#news").append("<li class=\"article\"><a href=\""+ inner["href"] + "\">" + inner["text"] + "</a></li>" );
    }
  },
  error: function (xhr, status) {
    //handle errors
  }
})