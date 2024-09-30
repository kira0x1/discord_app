import { Scene } from "phaser";

interface Props {
  x: number;
  y: number;
  text: string;
  isVisible?: boolean;
}

export default function Button(scene: Scene, props: Props) {
  const button = scene.add
    .text(props.x, props.y, props.text, {
      fontFamily: "Arial",
      fontSize: "32px",
      color: "#ffffff",
      align: "center",
      fixedWidth: 260,
      backgroundColor: "#2d2d2d",
    })
    .setPadding(32)
    .setOrigin(0.5);

  if (props.isVisible !== undefined) {
    button.setVisible(props.isVisible);
  }

  button.setInteractive({ useHandCursor: true });

  button.on("pointerover", () => {
    button.setBackgroundColor("#8d8d8d");
  });

  button.on("pointerout", () => {
    button.setBackgroundColor("#2d2d2d");
  });

  return button;
}
