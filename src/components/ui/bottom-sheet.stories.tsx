import type { Meta, StoryObj } from '@storybook/react';
import { BottomSheet } from './bottom-sheet';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import React from 'react';

const meta: Meta<typeof BottomSheet> = {
  title: 'UI/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <BottomSheet
        open={open}
        onOpenChange={setOpen}
        trigger={<Button variant="outline">Open Settings</Button>}
        title="Edit Profile"
        description="Make changes to your profile here. Click save when you're done."
        footer={<Button onClick={() => setOpen(false)}>Save changes</Button>}
      >
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
      </BottomSheet>
    );
  },
};
