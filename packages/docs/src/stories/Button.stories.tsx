import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@nemesis-ui/react';

const meta = {
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'outline'],
      control: 'inline-radio',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'hello world',
    variant: 'primary',
    disabled: false,
  },
};
