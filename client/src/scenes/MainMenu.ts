import { Scene } from "phaser";
import Button from "../components/Button";
import config from "../config";

export class MainMenu extends Scene {
  constructor() {
    super("MainMenu");
  }

  create() {
    const mainCam = this.cameras.main;

    mainCam.setBackgroundColor(0xbacbf5);
    this.add.image(mainCam.width / 2, mainCam.height / 2, "frog4x");

    this.add
      .text(Number(this.game.config.width) * 0.5, 460, "Menu", {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      })
      .setOrigin(0.5);

    const btn = Button(this, { text: "Start", x: config.width / 2, y: config.height - 100 });
    btn.once("pointerdown", () => {
      this.scene.start("Game");
    });
  }
}
