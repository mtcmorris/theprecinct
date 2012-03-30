$("nav a").click ->
  dir = $($(this).attr("href")).attr("class")
  $("#box").removeClass().addClass("show-#{dir}")