$("nav a").click ->
  dir = $($(this).attr("href")).attr("class")
  $("#box").removeClass().addClass("show-#{dir}")

$("#gallery a").click ->
  img = $("<img>").attr("src", $(this).attr("href")).click ->
    $(this).remove()
    $("#gallery ul").show()
  parent = $("#gallery").parent()
  img.appendTo $("#gallery")
  $("#gallery ul").hide()
  false

bgs = [1,2,3,7]
bgindex = [1, 2, 3, 7][Math.floor(Math.random() * bgs.length)]
$("html").css("background-image","url(/images/gallery/#{bgindex}.jpg)")