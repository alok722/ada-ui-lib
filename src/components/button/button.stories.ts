import { ButtonProps } from "./button";

export default {
  title: "Components/Button",
  argTypes: {
    variant: {
      description: "Define variant of Button",
      control: {
        type: "inline-radio",
      },
      options: ["fill", "outline", "text"],
    },
    color: {
      description: "Define color of Button",
      control: {
        type: "inline-radio",
      },
      options: ["primary", "light", "secondary", "default"],
    },
    size: {
      description: "Define size of Button",
      control: {
        type: "inline-radio",
      },
      options: ["s", "m", "l"],
    },
    disabled: {
      description: "Toggle the enabled/disabled state of button.",
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = ({
  variant,
  color,
  size,
  disabled,
  label,
  fullWidth,
  iconName,
  type,
}: ButtonProps) =>
  `
    <ada-button label="${label}" variant="${variant}" color="${color}" size="${size}" disabled="${disabled}" full-width="${fullWidth}" icon-name="${iconName}" type="${type}"></ada-button>
  `;

export const Default = (args: ButtonProps) => Template(args);
Default.args = {
  label: "Button",
  variant: "fill",
  color: "primary",
  size: "s",
  type: "standard",
  disabled: false,
  fullWidth: false,
};

export const OutlineButton = (args: ButtonProps) => Template(args);
OutlineButton.args = {
  label: "Button",
  variant: "outline",
  color: "primary",
  size: "s",
  type: "standard",
  disabled: false,
  fullWidth: false,
};

export const TextButton = (args: ButtonProps) => Template(args);
TextButton.args = {
  label: "Button",
  variant: "text",
  color: "primary",
  type: "standard",
  size: "s",
  disabled: false,
  fullWidth: false,
};

export const LargeButton = (args: ButtonProps) => Template(args);
LargeButton.args = {
  label: "Button",
  variant: "fill",
  color: "primary",
  type: "standard",
  size: "l",
  disabled: false,
  fullWidth: false,
};

export const FullWidthButton = (args: ButtonProps) => Template(args);
FullWidthButton.args = {
  label: "Button",
  variant: "fill",
  color: "primary",
  size: "l",
  type: "standard",
  disabled: false,
  fullWidth: true,
};

export const DisabledButton = (args: ButtonProps) => Template(args);
DisabledButton.args = {
  label: "Button",
  variant: "fill",
  color: "primary",
  type: "standard",
  size: "s",
  disabled: true,
  fullWidth: false,
};

export const LightDefaultButton = (args: ButtonProps) => Template(args);
LightDefaultButton.args = {
  label: "Button",
  variant: "fill",
  color: "light",
  type: "standard",
  size: "s",
  disabled: false,
  fullWidth: false,
};
LightDefaultButton.parameters = {
  backgrounds: { default: "dark" },
};

export const LightOutlineButton = (args: ButtonProps) => Template(args);
LightOutlineButton.args = {
  label: "Button",
  variant: "outline",
  color: "light",
  type: "standard",
  size: "s",
  disabled: false,
  fullWidth: false,
};
LightOutlineButton.parameters = {
  backgrounds: { default: "dark" },
};

export const LightTextButton = (args: ButtonProps) => Template(args);
LightTextButton.args = {
  label: "Button",
  variant: "text",
  color: "light",
  type: "standard",
  size: "s",
  disabled: false,
  fullWidth: false,
};
LightTextButton.parameters = {
  backgrounds: { default: "dark" },
};

export const DefaultIconButton = (args: ButtonProps) => Template(args);
DefaultIconButton.args = {
  label: "",
  variant: "fill",
  color: "default",
  size: "m",
  iconName: "pen",
  disabled: false,
  type: "icon",
  fullWidth: false,
};

export const PrimaryIconButton = (args: ButtonProps) => Template(args);
PrimaryIconButton.args = {
  label: "",
  variant: "fill",
  color: "primary",
  size: "m",
  disabled: false,
  type: "icon",
  iconName: "pen",
  fullWidth: false,
};

export const SmallPrimaryIconButton = (args: ButtonProps) => Template(args);
SmallPrimaryIconButton.args = {
  label: "",
  variant: "fill",
  color: "primary",
  size: "s",
  disabled: false,
  iconName: "pen",
  type: "icon",
  fullWidth: false,
};

export const SecondaryIconButton = (args: ButtonProps) => Template(args);
SecondaryIconButton.args = {
  label: "",
  variant: "fill",
  color: "secondary",
  size: "m",
  iconName: "pen",
  disabled: false,
  type: "icon",
  fullWidth: false,
};

export const IconTextButton = (args: ButtonProps) => Template(args);
IconTextButton.args = {
  label: "BUTTON",
  variant: "outline",
  color: "primary",
  size: "s",
  disabled: false,
  type: "label-icon",
  iconName: "pen",
  fullWidth: false,
};
