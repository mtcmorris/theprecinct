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