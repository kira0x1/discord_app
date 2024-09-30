import { Scene } from "phaser";
import Button from "../components/button";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.cameras.main.setBackgroundColor(0xa6d7f7);

    Button(this);

    this.input.once("pointerdown", () => {
      this.scene.start("GameOver");
    });
  }
}
