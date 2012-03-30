(function() {
  var bgindex, bgs, bgurl, img;

  if (Modernizr.csstransforms3d) {
    $("nav a").click(function() {
      var dir;
      dir = $($(this).attr("href")).attr("class");
      $("#box").removeClass().addClass("show-" + dir);
      return false;
    });
  }

  $("#gallery a").click(function() {
    var img, parent;
    img = $("<img>").attr("src", $(this).attr("href")).click(function() {
      $(this).remove();
      return $("#gallery ul").show();
    });
    parent = $("#gallery").parent();
    img.appendTo($("#gallery"));
    $("#gallery ul").hide();
    return false;
  });

  bgs = [1, 2, 3, 7];

  bgindex = bgs[Math.floor(Math.random() * bgs.length)];

  bgurl = "/images/gallery/" + bgindex + ".jpg";

  if (Modernizr.backgroundsize) {
    $("html").css("background-image", "url(" + bgurl + ")");
  } else {
    img = $("<img>").attr("src", bgurl).css({
      "width": "100%",
      "position": "fixed",
      "top": "0",
      "left": "0"
    });
    $("body").prepend(img);
  }

}).call(this);
