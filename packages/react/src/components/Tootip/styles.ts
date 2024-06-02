import { tv } from 'tailwind-variants';

export const contentCss = tv({
  base: `
  bg-nemesis-gray-600
  px-4
  py-2
  text-white
  rounded-md
  flex
  max-w-[var(--radix-tooltip-trigger-width)]
  flex
  justify-center
  `,
});

export const arrowCss = tv({
  base: 'fill-nemesis-gray-600',
});
