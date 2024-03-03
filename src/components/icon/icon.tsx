import { Component, h, Host, Prop } from "@stencil/core";

export type IconSizes = "xs" | "s" | "m" | "l" | "xl";

export type IconProps = {
  name: string;
  size: IconSizes;
};

@Component({
  tag: "ada-icon",
  styleUrl: "icon.css",
  shadow: true,
})

export class Icon implements IconProps {
  /** It defines name of the icon */
  @Prop() name: string = "pencil";

  /** It defines size of the icon */
  @Prop() size: "xs" | "s" | "m" | "l" | "xl" = "m";

  render() {
    return (
      <Host>
        <span
          class={`icon-${this.name} icon-${this.size} `}
          part="icon-element"
        ></span>
      </Host>
    );
  }
}
