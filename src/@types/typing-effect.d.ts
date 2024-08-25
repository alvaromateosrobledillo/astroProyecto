declare module "react-typing-effect" {
  import { Component } from "react";

  interface TypingEffectProps {
    text: string[];
    speed?: number;
    eraseSpeed?: number;
    typingDelay?: number;
    eraseDelay?: number;
    displayTextRenderer?: (text: string, i: number) => JSX.Element;
  }

  export default class TypingEffect extends Component<TypingEffectProps> {}
}
