import { Component, h, Prop } from "@stencil/core";

export type BadgeType =
  | "default"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "alternative"
  | "inverted";

export type BadgeProps = {
  text: string;
  variant?: BadgeType;
};

@Component({
  tag: "gl-badge",
  styleUrl: "badge.css",
  shadow: true,
})
export class Badge implements BadgeProps {
  /** It defines text of the badge */
  @Prop() text!: string;
  /** It defines type of the badge */
  @Prop() variant: BadgeType = "default";

  render() {
    return <span class={`badge ${this.variant}`}>{this.text}</span>;
  }
}
