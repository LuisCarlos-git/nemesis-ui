import React, { ComponentProps } from 'react';

import * as styles from './styles';

type ButtonProps = ComponentProps<'div'> &
  styles.TagVariants & {
    children: React.ReactNode;
  };

type IconProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ variant, children, ...rest }: ButtonProps) {
  return (
    <div {...rest} className={styles.tagCss({ variant })}>
      {children}
    </div>
  );
}

function Icon({ children, className }: IconProps) {
  return <div className={styles.iconCss({ className })}>{children}</div>;
}

Tag.Icon = Icon;
