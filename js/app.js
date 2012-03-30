(function() {

  $("nav a").click(function() {
    var dir;
    dir = $($(this).attr("href")).attr("class");
    return $("#box").removeClass().addClass("show-" + dir);
  });

}).call(this);
