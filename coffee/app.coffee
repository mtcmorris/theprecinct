$(document).ready ->
  chimney = $("div.chimney-wrap")
  puff = ->

    paths = ["path-one", "path-two"]
    colors = ["#ddd", "#999", "#ccc", "#888", "#aaa"]
    size = Math.floor( Math.random()* 8 ) + 10

    path  = pickone paths
    color = pickone colors


    smoke = $("""
      <span class='puff #{path}'
        style='width:#{size}px;
               height:#{size}px;
               background-color: #{color};'>
    """).appendTo chimney

    setTimeout puff, 200
    setTimeout ->
      smoke.remove()
    , 4000

  setTimeout puff, 500

window.pickone = (array) ->
  array[Math.floor( Math.random()*array.length )]


$("nav a").click ->
  dir = $($(this).attr("href")).attr("class")
  $("#box").removeClass().addClass("show-#{dir}")