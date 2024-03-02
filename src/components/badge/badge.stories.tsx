import { BadgeProps } from './badge';

export default {
  title: 'Components/Badge',
  argTypes: {
    text: {
      description: 'Badge Label',
    },
    variant: {
      description: 'Badge Type',
      control: { type: 'inline-radio' },
      options: ['default', 'info', 'success', 'warning', 'error', 'alternative', 'inverted'],
    },
  },
};

const Template = ({ text, variant }: BadgeProps) => `<ada-badge text="${text}" variant="${variant}"></ada-badge>`;

export const Default = (args: BadgeProps) => Template(args);
Default.args = {
  text: '88',
  variant: 'default',
};

export const Info = (args: BadgeProps) => Template(args);
Info.args = {
  text: '88',
  variant: 'info',
};

export const Success = (args: BadgeProps) => Template(args);
Success.args = {
  text: '88',
  variant: 'success',
};

export const Warning = (args: BadgeProps) => Template(args);
Warning.args = {
  text: '88',
  variant: 'warning',
};

export const Error = (args: BadgeProps) => Template(args);
Error.args = {
  text: '88',
  variant: 'error',
};

export const Alternative = (args: BadgeProps) => Template(args);
Alternative.args = {
  text: '88',
  variant: 'alternative',
};

export const Inverted = (args: BadgeProps) => Template(args);
Inverted.args = {
  text: '88',
  variant: 'inverted',
};
