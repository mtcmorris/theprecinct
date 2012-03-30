(function() {
  var bgindex, bgs;

  $("nav a").click(function() {
    var dir;
    dir = $($(this).attr("href")).attr("class");
    return $("#box").removeClass().addClass("show-" + dir);
  });

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

  bgindex = [1, 2, 3, 7][Math.floor(Math.random() * bgs.length)];

  $("html").css("background-image", "url(/images/gallery/" + bgindex + ".jpg)");

}).call(this);
