import { VariantProps, tv } from 'tailwind-variants';

export const buttonCss = tv({
  base: `w-40
  h-12
  rounded-md
  font-semibold
  text-base
  transition-colors
  disabled:opacity-75
  disabled:cursor-not-allowed`,
  variants: {
    variant: {
      primary:
        'bg-nemesis-pink-400 text-white enabled:hover:bg-nemesis-pink-600',
      secondary:
        'bg-nemesis-purple-400 text-white  enabled:hover:bg-nemesis-purple-600',
      outline: `bg-transparent
        text-nemesis-gray-600
        enabled:hover:bg-nemesis-gray-300
        border
        border-nemesis-gray-600
        `,
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});

export type ButtonVariants = VariantProps<typeof buttonCss>;
