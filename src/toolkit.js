export default function addInput(obj) {
  onKeyDown("d", () => {
    obj.move(200, 0);
  });

  onKeyDown("a", () => {
    obj.move(-200, 0);
  });

  onKeyDown("w", () => {
    obj.move(0, -200);
  });

  onKeyDown("s", () => {
    obj.move(0, 200);
  });
}