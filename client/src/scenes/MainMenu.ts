import { Scene } from "phaser";

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

    this.input.once("pointerdown", () => {
      this.scene.start("Game");
    });
  }
}
