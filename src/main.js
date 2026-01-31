import kaplay from "kaplay";
import addInput from "./toolkit.js";

const k = kaplay();

k.scene("game", () => {

    k.loadRoot("./");
    k.loadSprite("survivor", "sprites/survivor.png");
    k.loadSprite("survivor2", "sprites/survivor2.png");
    k.setBackground(0, 90, 255);

    const player = k.add([
    sprite("survivor"),
    scale(0.5, 0.5),
    pos(0, 0),
    opacity(1,1),
]);

  addInput(player);
  press();
});


k.scene("mainMenu", () => {
  console.log(k);
  k.setBackground(150, 90, 60);

  add([
    text("My First web game"),
    pos(450, 150),
    scale(2, 2),
  ])

  add([
    text("Click to play"),
    pos(650, 300),
    scale(1.0, 1.0),
  ])

  // press();
  onClick(() => go("game"));
});

function press() {
  onKeyPress((key) => {
  // debug.log(key);

    switch (key) {
      case "enter":
        go("game");
        break;
      case "escape":
        go("mainMenu");
        break;
    }

  });
}


go("mainMenu");






