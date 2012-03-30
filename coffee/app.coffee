if Modernizr.csstransforms3d
  $("nav a").click ->
    dir = $($(this).attr("href")).attr("class")
    $("#box").removeClass().addClass("show-#{dir}")
    false

$("#gallery a").click ->
  img = $("<img>").attr("src", $(this).attr("href")).click ->
    $(this).remove()
    $("#gallery ul").show()
  parent = $("#gallery").parent()
  img.appendTo $("#gallery")
  $("#gallery ul").hide()
  false

bgs = [1,2,3,7]
bgindex = bgs[Math.floor(Math.random() * bgs.length)]
bgurl = "/images/gallery/#{bgindex}.jpg"
if Modernizr.backgroundsize
  $("html").css("background-image","url(#{bgurl})")
else
  img = $("<img>").attr("src", bgurl).css
    "width": "100%"
    "position": "fixed"
    "top": "0"
    "left": "0"
  $("body").prepend img