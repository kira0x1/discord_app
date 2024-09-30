import { Scene } from "phaser";

export default function Button(scene: Scene) {
  const button = scene.add
    .text(400, 300, "Play x Game", {
      fontFamily: "Arial",
      fontSize: "32px",
      color: "#ffffff",
      align: "center",
      fixedWidth: 260,
      backgroundColor: "#2d2d2d",
    })
    .setPadding(32)
    .setOrigin(0.5);

  button.setInteractive({ useHandCursor: true });

  button.on("pointerover", () => {
    button.setBackgroundColor("#8d8d8d");
  });

  button.on("pointerout", () => {
    button.setBackgroundColor("#2d2d2d");
  });

  return button;
}
