(function() {

  $(document).ready(function() {
    var chimney, puff;
    chimney = $("div.chimney-wrap");
    puff = function() {
      var color, colors, path, paths, size, smoke;
      paths = ["path-one", "path-two"];
      colors = ["#ddd", "#999", "#ccc", "#888", "#aaa"];
      size = Math.floor(Math.random() * 8) + 10;
      path = pickone(paths);
      color = pickone(colors);
      smoke = $("<span class='puff " + path + "'\n  style='width:" + size + "px;\n         height:" + size + "px;\n         background-color: " + color + ";'>").appendTo(chimney);
      setTimeout(puff, 200);
      return setTimeout(function() {
        return smoke.remove();
      }, 4000);
    };
    return setTimeout(puff, 500);
  });

  window.pickone = function(array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  $("nav a").click(function() {
    var dir;
    dir = $($(this).attr("href")).attr("class");
    return $("#box").removeClass().addClass("show-" + dir);
  });

}).call(this);
