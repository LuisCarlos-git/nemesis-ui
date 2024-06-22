import { VariantProps, tv } from 'tailwind-variants';

export const fieldWrapperCss = tv({
  base: `h-14
  border
  border-nemesis-gray-400
  rounded-md
  focus-within:border-nemesis-pink-600
  overflow-hidden
  text-nemesis-gray-500
  `,

  variants: {
    isError: 'border-red-500',
    disabled: 'opacity-75',
  },
});

export const fieldCss = tv({
  base: 'h-full w-full outline-none px-2 text-lg',
});

export const labelCss = tv({
  base: 'text-nemesis-gray-500',
  variants: {
    disabled: 'opacity-75',
  },
});

export type FieldWrapperVariants = VariantProps<typeof fieldWrapperCss>;
export type LabelVariants = VariantProps<typeof labelCss>;
