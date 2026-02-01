import type { Meta, StoryObj } from '@storybook/react';
import { TextareaAutoresize } from './textarea-autoresize';
import { Label } from './label';

const meta: Meta<typeof TextareaAutoresize> = {
  title: 'UI/TextareaAutoresize',
  component: TextareaAutoresize,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextareaAutoresize>;

export const Default: Story = {
  render: () => (
    <div className="grid w-full gap-1.5 max-w-sm">
      <Label htmlFor="message">Your Message</Label>
      <TextareaAutoresize 
        id="message" 
        placeholder="Type your message here. I will grow as you type..." 
        minRows={3}
        maxRows={8}
      />
    </div>
  ),
};

export const FixedLimit: Story = {
  args: {
    placeholder: "I start small (1 row) and grow up to 5 rows",
    minRows: 1,
    maxRows: 5,
    className: "w-full max-w-sm",
  },
};
