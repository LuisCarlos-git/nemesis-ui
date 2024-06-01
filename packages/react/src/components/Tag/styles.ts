import { VariantProps, tv } from 'tailwind-variants';

export const tagCss = tv({
  base: 'px-4 py-2 max-w-fit text-sm tracking-widest rounded-full font-semibold flex items-center gap-2 uppercase',
  variants: {
    variant: {
      dark: 'bg-nemesis-gray-600 text-white',
      purple: 'bg-nemesis-purple-400 text-white',
      blue: 'bg-nemesis-blue-400 text-nemesis-gray-600',
      light: 'bg-white text-nemesis-pink-400 border border-nemesis-gray-400',
    },
  },
});

export const iconCss = tv({});

export type TagVariants = VariantProps<typeof tagCss>;
