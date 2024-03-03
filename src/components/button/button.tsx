import { Component, Event, EventEmitter, h, Host, Prop } from "@stencil/core";

export type ButtonProps = {
  label: string;
  variant?: "fill" | "outline" | "text";
  color?: "primary" | "light" | "secondary" | "default";
  type?: "icon" | "standard" | "label-icon";
  size?: "s" | "m" | "l";
  disabled?: boolean;
  iconName?: string;
  fullWidth?: boolean;
};

@Component({
  tag: "ada-button",
  styleUrl: "button.css",
  shadow: true,
})
export class Button implements ButtonProps {
  /** Define Label of button */
  @Prop() label!: string;
  /** Define look of button */
  @Prop() variant: "fill" | "outline" | "text" = "fill";
  /** Define color of button */
  @Prop() color: "primary" | "light" | "secondary" | "default" = "primary";
  /** Define the type of button: `icon`, `standard`, `label-icon` */
  @Prop() type: "icon" | "standard" | "label-icon" = "standard";
  /** Define size of button */
  @Prop() size: "s" | "m" | "l" = "m";
  /** Define iconName for button */
  @Prop() iconName?: string;
  /** Define whether button is enabled/disabled */
  @Prop() disabled: boolean = false;
  /** Define whether button is full width or not */
  @Prop() fullWidth: boolean = false;

  /** Emit click event */
  @Event() clicked!: EventEmitter<void>;

  render() {
    const iconElement = this.type !== "standard" && (
      <ada-icon
        class={{
          "icon-with-label": !(this.type === "icon"),
        }}
        name={this.iconName}
        size={this.type === "label-icon" ? "m" : this.size}
      ></ada-icon>
    );

    return (
      <Host>
        <button
          disabled={this.disabled}
          class={{
            "icon-btn": this.type === "icon",
            button: !(this.type === "icon"),
            disabled: this.disabled,
            "full-width": this.fullWidth && !(this.type === "icon"),
            [this.variant]: !(this.type === "icon"),
            [this.color]: true,
            [this.size]: true,
          }}
          // eslint-disable-next-line react/jsx-no-bind
          onClick={() => {
            !this.disabled && this.clicked.emit();
          }}
        >
          {iconElement}
          {this.type === "icon" ? "" : this.label}
        </button>
      </Host>
    );
  }
}
