
  $.ajax({
  url:"https://www.kimonolabs.com/api/1vnzmulw?apikey=82g96zzCQGXPX0Z3htZgjT74Vc7hvFCN",
  crossDomain: true,
  dataType: "jsonp",
  success: function (response) {
    var t = response.results.collection1;
    for(var i = 0; i < t.length; i++) {
      var inner = t[i].property1;
      for(var prop in inner) {
        $(".apptest").append("<p>"+inner[prop].toString()+"</p>");
      }
    }
  },
  error: function (xhr, status) {
    //handle errors
  }
});