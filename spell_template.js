function path_for_template(type, size, orientation) {
  map = new Object();
  map[['!cone', 15, 'angle']] = "[[\"M\",0,0],[\"L\",0,210],[\"L\",70,210],[\"L\",70,140],[\"L\",140,140],[\"L\",140,70],[\"L\",210,70],[\"L\",210,0],[\"L\",0,0]]";
  map[['!cone', 20, 'angle']] = "[[\"M\",0,0],[\"L\",0,280],[\"L\",70,280],[\"L\",70,210],[\"L\",140,210],[\"L\",140,140],[\"L\",210,140],[\"L\",210,70],[\"L\",280,70],[\"L\",280,0],[\"L\",0,0]]";
  map[['!cone', 30, 'angle']] = "[[\"M\",0,0],[\"L\",0,420],[\"L\",70,420],[\"L\",70,350],[\"L\",210,350],[\"L\",210,280],[\"L\",280,280],[\"L\",280,210],[\"L\",350,210],[\"L\",350,140],[\"L\",350,70],[\"L\",    420,70],[\"L\",420,0],[\"L\",0,0]]";
  map[['!cone', 60, 'angle']] = "[[\"M\",0,0],[\"L\",840,0],[\"L\",840,70],[\"L\",770,70],[\"L\",770,210],[\"L\",700,210],[\"L\",700,350],[\"L\",630,350],[\"L\",630,490],[\"L\",560,490],[\"L\",560,560],[\"L\"    ,490,560],[\"L\",490,630],[\"L\",420,630],[\"L\",350,630],[\"L\",350,700],[\"L\",210,700],[\"L\",210,770],[\"L\",70,770],[\"L\",70,840],[\"L\",0,840],[\"L\",0,0]]";
  map[['!cone', 15, 'straight']] = "[[\"M\",70,210],[\"L\",140,210],[\"L\",140,140],[\"L\",210,140],[\"L\",210,0],[\"L\",0,0],[\"L\",0,140],[\"L\",70,140],[\"L\",70,210]]";
  map[['!cone', 30, 'straight']] = "[[\"M\",210,420],[\"L\",350,420],[\"L\",350,350],[\"L\",420,350],[\"L\",420,280],[\"L\",490,280],[\"L\",490,210],[\"L\",560,210],[\"L\",560,140],[\"L\",490,140],[\"L\",490,70]    ,[\"L\",350,70],[\"L\",350,0],[\"L\",210,0],[\"L\",210,70],[\"L\",70,70],[\"L\",70,140],[\"L\",0,140],[\"L\",0,210],[\"L\",70,210],[\"L\",70,280],[\"L\",140,280],[\"L\",140,350],[\"L\",210,350],[\"L\",210,420]]";
  map[['!cone', 60, 'straight']] = "[[\"M\",490,840],[\"L\",490,770],[\"L\",420,770],[\"L\",420,700],[\"L\",350,700],[\"L\",350,630],[\"L\",280,630],[\"L\",280,560],[\"L\",210,560],[\"L\",210,490],[\"L\",140,490    ],[\"L\",140,420],[\"L\",70,420],[\"L\",70,350],[\"L\",0,350],[\"L\",0,280],[\"L\",70,280],[\"L\",70,210],[\"L\",210,210],[\"L\",210,140],[\"L\",350,140],[\"L\",350,70],[\"L\",490,70],[\"L\",490,0],[\"L\",630,0],[\"L\",    630,70],[\"L\",770,70],[\"L\",770,140],[\"L\",910,140],[\"L\",910,210],[\"L\",1050,210],[\"L\",1050,280],[\"L\",1120,280],[\"L\",1120,350],[\"L\",1050,350],[\"L\",1050,420],[\"L\",980,420],[\"L\",980,490],[\"L\",910,490    ],[\"L\",910,560],[\"L\",840,560],[\"L\",840,630],[\"L\",770,630],[\"L\",770,700],[\"L\",700,700],[\"L\",700,770],[\"L\",630,770],[\"L\",630,840],[\"L\",490,840]]";
  map[['!circle', 15, undefined]] = "[[\"M\",420,280],[\"L\",420,140],[\"L\",350,140],[\"L\",350,70],[\"L\",280,70],[\"L\",280,0],[\"L\",140,0],[\"L\",140,70],[\"L\",70,70],[\"L\",70,140],[\"L\",0,140],[\"L\",0,280],    [\"L\",70,280],[\"L\",70,350],[\"L\",140,350],[\"L\",140,420],[\"L\",280,420],[\"L\",280,350],[\"L\",350,350],[\"L\",350,280],[\"L\",420,280]]";
  map[['!circle', 20, undefined]] = "[[\"M\",560,210],[\"L\",560,350],[\"L\",490,350],[\"L\",490,420],[\"L\",420,420],[\"L\",420,490],[\"L\",350,490],[\"L\",350,560],[\"L\",210,560],[\"L\",210,490],[\"L\",140,490],[\    "L\",140,420],[\"L\",70,420],[\"L\",70,350],[\"L\",0,350],[\"L\",0,210],[\"L\",70,210],[\"L\",70,140],[\"L\",140,140],[\"L\",140,70],[\"L\",210,70],[\"L\",210,0],[\"L\",350,0],[\"L\",350,70],[\"L\",420,70],[\"L\",420,14    0],[\"L\",490,140],[\"L\",490,210],[\"L\",560,210]]";
  map[['!circle', 30, undefined]] = "[[\"M\",840,350],[\"L\",840,490],[\"L\",770,490],[\"L\",770,630],[\"L\",700,630],[\"L\",700,700],[\"L\",630,700],[\"L\",630,770],[\"L\",490,770],[\"L\",490,840],[\"L\",350,840],[\    "L\",350,770],[\"L\",210,770],[\"L\",210,700],[\"L\",140,700],[\"L\",140,630],[\"L\",70,630],[\"L\",70,490],[\"L\",0,490],[\"L\",0,350],[\"L\",70,350],[\"L\",70,210],[\"L\",140,210],[\"L\",140,140],[\"L\",210,140],[\"L\    ",210,70],[\"L\",350,70],[\"L\",350,0],[\"L\",490,0],[\"L\",490,70],[\"L\",630,70],[\"L\",630,140],[\"L\",700,140],[\"L\",700,210],[\"L\",770,210],[\"L\",770,350],[\"L\",840,350]]";

  return map[[type, size, orientation]];
}

function top_for_template(type, size, orientation, tok) {
  if (type == '!circle') {
    return tok.get("top") + (tok.get("height") / 2);
  }
  else if (type == '!cone') {
    if (orientation == 'angle') {
      return tok.get("top") + (tok.get("height") / 2) + (35 * ((size / 5) - 2));
    }
    else if (orientation == 'straight') {
      return tok.get("top") - (tok.get("height") / 2) - (35 * (size / 5));
    }
    else { return 0; }
  }
  else { return 0; }
}

function left_for_template(type, size, orientation, tok) {
  if (type == '!circle') {
    return tok.get("left") + (tok.get("width") / 2);
  }
  else if (type == '!cone') {
    if (orientation == 'angle') {
      return tok.get("left") + (tok.get("width") / 2) + (35 * (size / 5));
    }
    else if (orientation == 'straight') {
      if (size == 15) {
        return tok.get("left") - ((tok.get("width") / 2) - 35);
      }
      else {
        return tok.get("left") - ((tok.get("width") / 2) - 35) + 35;
      }
    }
    else { return 0; }
  }
  else { return 0; }
}

function width_for_template(type, size, orientation) {
  if (type == '!circle') {
    return size * 28;
  }
  else if (type == '!cone') {
    if (orientation == 'angle') {
      return size * 14;
    }
    else if (orientation == 'straight') {
      if (size == 15) {
        return 210;
      }
      else if (size == 30) {
        return 560;
      }
      else if (size == 60) {
        return 1120;
      }
      else { return 0; }
    }
    else { return 0; }
  }
  else { return 0; }
}

function height_for_template(type, size, orientation) {
  if (type == '!circle') {
    return size * 28;
  }
  else if (type == '!cone') {
    return size * 14;
  }
  else { return 0; }
}

on("chat:message", function(msg) {
  if (msg.type === "api") {
    var slice = msg.content.split(" "),
                selected = msg.selected,
                direction,
                size,
                player;
    type = slice[0];
    size = parseInt(slice[1], 10);
    direction = slice[2];
    _.each(selected, function(obj) {
      var tok = getObj("graphic", obj._id);
      if (tok !== undefined) {
        player = getObj("player", tok.get("controlledby"));
        if (player !== undefined) {
          createObj("path", {
            layer: "objects",
            _path: path_for_template(type, size, orientation);
            controlledby: tok.get("controlledby"),
            top: top_for_template(type, size, orientation, tok),
            left: left_for_template(type, size, orientation, tok),
            width: width_for_template(type, size, orientation),
            height: height_for_template(type, size, orientation),
            stroke: player.get("color"),
            pageid: tok.get("_pageid")
          });
        }
      }
    });
  }
});
