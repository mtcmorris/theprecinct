(function() {

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

}).call(this);
