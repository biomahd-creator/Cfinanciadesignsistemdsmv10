import type { Meta, StoryObj } from '@storybook/react';
import { FloatingActionButton } from './floating-action-button';
import { MessageCircle, Plus } from 'lucide-react';

const meta: Meta<typeof FloatingActionButton> = {
  title: 'UI/FloatingActionButton',
  component: FloatingActionButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FloatingActionButton>;

export const Default: Story = {
  render: () => (
    <div className="relative h-[300px] w-full border bg-muted/20 rounded-lg overflow-hidden">
      <div className="p-4">
        <h3 className="font-bold">Content Area</h3>
        <p>The button is fixed relative to the viewport usually, but here demonstrated inside a container context.</p>
      </div>
      <FloatingActionButton 
        className="absolute" 
        onClick={() => alert('FAB Clicked')} 
        label="Create New"
      />
    </div>
  ),
};

export const CustomIcon: Story = {
  render: () => (
    <div className="relative h-[300px] w-full border bg-muted/20 rounded-lg overflow-hidden">
      <FloatingActionButton 
        icon={MessageCircle}
        position="bottom-left"
        className="absolute"
        label="Chat Support"
      />
    </div>
  ),
};
