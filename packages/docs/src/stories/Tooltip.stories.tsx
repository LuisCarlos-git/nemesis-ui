import type { Meta, StoryObj } from '@storybook/react';

import { Button, Tooltip } from '@nemesis-ui/react';

const meta = {
  component: Tooltip,
  argTypes: {
    children: {
      control: false,
    },
    side: {
      control: 'inline-radio',
      options: ['top', 'left', 'right', 'bottom'],
    },
    delay: {
      control: 'number',
    },
  },
  args: {
    delay: 0,
    side: 'bottom',
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Button>hover me!</Button>,
    message: 'tooltip',
  },
};
