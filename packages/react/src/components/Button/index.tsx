import { ComponentProps } from 'react';

import * as styles from './styles';

type ButtonProps = ComponentProps<'button'> & styles.ButtonVariants;

export function Button({ variant, children, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={styles.buttonCss({ variant })}>
      {children}
    </button>
  );
}
