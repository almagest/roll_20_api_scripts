on("chat:message", function(msg) {
    if (msg.type === "api") {
        var slice = msg.content.split(" "),
            selected = msg.selected,
            direction,
            size,
            player;
        if (msg.content.indexOf("!cone") !== -1) {
            direction = slice[1];
            size = parseInt(slice[2], 10);
            _.each(selected, function(obj) {
                var tok = getObj("graphic", obj._id);
                if (tok !== undefined) {
                    player = getObj("player", tok.get("controlledby"));
                    if (player !== undefined) {
                        if (direction === "angle") {
                            if (size === 15) {
                                createObj("path", {
                                    layer: "objects",
                                    _path: "[[\"M\",0,0],[\"L\",0,210],[\"L\",70,210],[\"L\",70,140],[\"L\",140,140],[\"L\",140,70],[\"L\",210,70],[\"L\",210,0],[\"L\",0,0]]",
                                    controlledby: tok.get("controlledby"),
                                    top: tok.get("top") + (tok.get("height") / 2) + 35,
                                    left: tok.get("left") + (tok.get("width") / 2) + 105,
                                    width: 210,
                                    height: 210,
                                    stroke: player.get("color"),
                                    pageid: tok.get("_pageid")
                                });
                            }
                            if (size === 20) {
                                createObj("path", {
                                    layer: "objects",
                                    _path: "[[\"M\",0,0],[\"L\",0,280],[\"L\",70,280],[\"L\",70,210],[\"L\",140,210],[\"L\",140,140],[\"L\",210,140],[\"L\",210,70],[\"L\",280,70],[\"L\",280,0],[\"L\",0,0]]",
                                    controlledby: tok.get("controlledby"),
                                    top: tok.get("top") + (tok.get("height") / 2) + 70,
                                    left: tok.get("left") + (tok.get("width") / 2) + 140,
                                    width: 280,
                                    height: 280,
                                    stroke: player.get("color"),
                                    pageid: tok.get("_pageid")
                                });
                            }
                            if (size === 30) {
                                createObj("path", {
                                    layer: "objects",
                                    _path: "[[\"M\",0,0],[\"L\",0,420],[\"L\",70,420],[\"L\",70,350],[\"L\",210,350],[\"L\",210,280],[\"L\",280,280],[\"L\",280,210],[\"L\",350,210],[\"L\",350,140],[\"L\",350,70],[\"L\",420,70],[\"L\",420,0],[\"L\",0,0]]",
                                    controlledby: tok.get("controlledby"),
                                    top: tok.get("top") + (tok.get("height") / 2) + 140,
                                    left: tok.get("left") + (tok.get("width") / 2) + 210,
                                    width: 420,
                                    height: 420,
                                    stroke: player.get("color"),
                                    pageid: tok.get("_pageid")
                                });
                            }
                            if (size === 60) {
                                createObj("path", {
                                    layer: "objects",
                                    _path: "[[\"M\",0,0],[\"L\",840,0],[\"L\",840,70],[\"L\",770,70],[\"L\",770,210],[\"L\",700,210],[\"L\",700,350],[\"L\",630,350],[\"L\",630,490],[\"L\",560,490],[\"L\",560,560],[\"L\",490,560],[\"L\",490,630],[\"L\",420,630],[\"L\",350,630],[\"L\",350,700],[\"L\",210,700],[\"L\",210,770],[\"L\",70,770],[\"L\",70,840],[\"L\",0,840],[\"L\",0,0]]",
                                    controlledby: tok.get("controlledby"),
                                    top: tok.get("top") + (tok.get("height") / 2) + 350,
                                    left: tok.get("left") + (tok.get("width") / 2) + 420,
                                    width: 840,
                                    height: 840,
                                    stroke: player.get("color"),
                                    pageid: tok.get("_pageid")
                                });
                            }
                        }
                        if (direction === "straight") {
                            if (size === 15) {
                                createObj("path", {
                                    layer: "objects",
                                    _path: "[[\"M\",70,210],[\"L\",140,210],[\"L\",140,140],[\"L\",210,140],[\"L\",210,0],[\"L\",0,0],[\"L\",0,140],[\"L\",70,140],[\"L\",70,210]]",
                                    controlledby: tok.get("controlledby"),
                                    top: tok.get("top") - (tok.get("height") / 2) - 105,
                                    left: tok.get("left") - ((tok.get("width") / 2) - 35),
                                    height: 210,
                                    width: 210,
                                    stroke: player.get("color"),
                                    pageid: tok.get("_pageid")
                                });
                            }
                            if (size === 30) {
                                createObj("path", {
                                    layer: "objects",
                                    _path: "[[\"M\",210,420],[\"L\",350,420],[\"L\",350,350],[\"L\",420,350],[\"L\",420,280],[\"L\",490,280],[\"L\",490,210],[\"L\",560,210],[\"L\",560,140],[\"L\",490,140],[\"L\",490,70],[\"L\",350,70],[\"L\",350,0],[\"L\",210,0],[\"L\",210,70],[\"L\",70,70],[\"L\",70,140],[\"L\",0,140],[\"L\",0,210],[\"L\",70,210],[\"L\",70,280],[\"L\",140,280],[\"L\",140,350],[\"L\",210,350],[\"L\",210,420]]",
                                    controlledby: tok.get("controlledby"),
                                    top: tok.get("top") - (tok.get("height") / 2) - 210,
                                    left: (tok.get("left") - ((tok.get("width") / 2) - 35)) + 35,
                                    height: 420,
                                    width: 560,
                                    stroke: player.get("color"),
                                    pageid: tok.get("_pageid")
                                });
                            }
                            if (size === 60) {
                                createObj("path", {
                                    layer: "objects",
                                    _path: "[[\"M\",490,840],[\"L\",490,770],[\"L\",420,770],[\"L\",420,700],[\"L\",350,700],[\"L\",350,630],[\"L\",280,630],[\"L\",280,560],[\"L\",210,560],[\"L\",210,490],[\"L\",140,490],[\"L\",140,420],[\"L\",70,420],[\"L\",70,350],[\"L\",0,350],[\"L\",0,280],[\"L\",70,280],[\"L\",70,210],[\"L\",210,210],[\"L\",210,140],[\"L\",350,140],[\"L\",350,70],[\"L\",490,70],[\"L\",490,0],[\"L\",630,0],[\"L\",630,70],[\"L\",770,70],[\"L\",770,140],[\"L\",910,140],[\"L\",910,210],[\"L\",1050,210],[\"L\",1050,280],[\"L\",1120,280],[\"L\",1120,350],[\"L\",1050,350],[\"L\",1050,420],[\"L\",980,420],[\"L\",980,490],[\"L\",910,490],[\"L\",910,560],[\"L\",840,560],[\"L\",840,630],[\"L\",770,630],[\"L\",770,700],[\"L\",700,700],[\"L\",700,770],[\"L\",630,770],[\"L\",630,840],[\"L\",490,840]]",
                                    controlledby: tok.get("controlledby"),
                                    top: tok.get("top") - (tok.get("height") / 2) - 420,
                                    left: (tok.get("left") - ((tok.get("width") / 2) - 35)) + 35,
                                    height: 840,
                                    width: 1120,
                                    stroke: player.get("color"),
                                    pageid: tok.get("_pageid")
                                });
                            }
                        }
                    }
                }
            });
        }
        if (msg.content.indexOf("!circle") !== -1) {
            size = parseInt(slice[1], 10);
            _.each(selected, function(obj) {
                var tok = getObj("graphic", obj._id);
                if (tok !== undefined) {
                    player = getObj("player", tok.get("controlledby"));
                    if (player !== undefined) {
                        if (size === 15) {
                            createObj("path", {
                                layer: "objects",
                                _path: "[[\"M\",420,280],[\"L\",420,140],[\"L\",350,140],[\"L\",350,70],[\"L\",280,70],[\"L\",280,0],[\"L\",140,0],[\"L\",140,70],[\"L\",70,70],[\"L\",70,140],[\"L\",0,140],[\"L\",0,280],[\"L\",70,280],[\"L\",70,350],[\"L\",140,350],[\"L\",140,420],[\"L\",280,420],[\"L\",280,350],[\"L\",350,350],[\"L\",350,280],[\"L\",420,280]]",
                                controlledby: tok.get("controlledby"),
                                top: tok.get("top") + (tok.get("height") / 2),
                                left: tok.get("left") + (tok.get("width") / 2),
                                height: 420,
                                width: 420,
                                stroke: player.get("color"),
                                pageid: tok.get("_pageid")
                            });
                        }
                        if (size === 20) {
                            createObj("path", {
                                layer: "objects",
                                _path: "[[\"M\",560,210],[\"L\",560,350],[\"L\",490,350],[\"L\",490,420],[\"L\",420,420],[\"L\",420,490],[\"L\",350,490],[\"L\",350,560],[\"L\",210,560],[\"L\",210,490],[\"L\",140,490],[\"L\",140,420],[\"L\",70,420],[\"L\",70,350],[\"L\",0,350],[\"L\",0,210],[\"L\",70,210],[\"L\",70,140],[\"L\",140,140],[\"L\",140,70],[\"L\",210,70],[\"L\",210,0],[\"L\",350,0],[\"L\",350,70],[\"L\",420,70],[\"L\",420,140],[\"L\",490,140],[\"L\",490,210],[\"L\",560,210]]",
                                controlledby: tok.get("controlledby"),
                                top: tok.get("top") + (tok.get("height") / 2),
                                left: tok.get("left") + (tok.get("width") / 2),
                                height: 560,
                                width: 560,
                                stroke: player.get("color"),
                                pageid: tok.get("_pageid")
                            });
                        }
                        if (size === 30) {
                            createObj("path", {
                                layer: "objects",
                                _path: "[[\"M\",840,350],[\"L\",840,490],[\"L\",770,490],[\"L\",770,630],[\"L\",700,630],[\"L\",700,700],[\"L\",630,700],[\"L\",630,770],[\"L\",490,770],[\"L\",490,840],[\"L\",350,840],[\"L\",350,770],[\"L\",210,770],[\"L\",210,700],[\"L\",140,700],[\"L\",140,630],[\"L\",70,630],[\"L\",70,490],[\"L\",0,490],[\"L\",0,350],[\"L\",70,350],[\"L\",70,210],[\"L\",140,210],[\"L\",140,140],[\"L\",210,140],[\"L\",210,70],[\"L\",350,70],[\"L\",350,0],[\"L\",490,0],[\"L\",490,70],[\"L\",630,70],[\"L\",630,140],[\"L\",700,140],[\"L\",700,210],[\"L\",770,210],[\"L\",770,350],[\"L\",840,350]]",
                                controlledby: tok.get("controlledby"),
                                top: tok.get("top") + (tok.get("height") / 2),
                                left: tok.get("left") + (tok.get("width") / 2),
                                height: 840,
                                width: 840,
                                stroke: player.get("color"),
                                pageid: tok.get("_pageid")
                            });
                        }
                    }
                }
            });
        }
    }
});