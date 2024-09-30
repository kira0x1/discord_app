import { Scene } from "phaser";
import Button from "../components/Button";
import config from "../config";

export class Game extends Scene {
  gameWidth: number;
  gameHeight: number;
  menuOpen = false;

  constructor() {
    super("Game");
  }

  create() {
    this.cameras.main.setBackgroundColor(0xa6d7f7);

    const escKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

    console.log(this.menuOpen);

    const btn = Button(this, {
      text: "Exit",
      x: config.width / 2,
      y: config.height - 100,
      isVisible: false,
    });

    escKey?.on("down", () => {
      this.menuOpen = !this.menuOpen;
      btn.setVisible(this.menuOpen);
    });

    btn.once("pointerdown", () => {
      this.scene.start("GameOver");
    });
  }
}
