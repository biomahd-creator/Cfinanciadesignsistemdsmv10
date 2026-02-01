import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './empty-state';
import { FileSearch, ShoppingCart, UserX } from 'lucide-react';

const meta: Meta<typeof EmptyState> = {
  title: 'UI/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: "No files found",
    description: "You haven't uploaded any files yet. Start by uploading your first document.",
    action: {
      label: "Upload File",
      onClick: () => alert('Clicked upload'),
    },
  },
};

export const SearchNoResults: Story = {
  args: {
    icon: FileSearch,
    title: "No results found",
    description: "We couldn't find any results for your search term. Please try again with different keywords.",
  },
};

export const EmptyCart: Story = {
  args: {
    icon: ShoppingCart,
    title: "Your cart is empty",
    description: "Looks like you haven't added anything to your cart yet.",
    action: {
      label: "Start Shopping",
      onClick: () => console.log('Shop'),
    },
  },
};
