import React, { ComponentProps } from 'react';
import * as styles from './styles';

type LabelProps = {
  label: string;
  id: string;
} & styles.LabelVariants;

type ErrorMessageProps = {
  message: string;
};

type IconProps = {
  icon: JSX.Element;
};

type TextFieldProps = ComponentProps<'input'> & styles.FieldWrapperVariants;

function Label({ label, id, disabled, ...rest }: LabelProps) {
  return (
    <label {...rest} htmlFor={id} className={styles.labelCss({ disabled })}>
      {label}
    </label>
  );
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return <span aria-description="field error message">{message}</span>;
}

function Icon({ icon }: IconProps) {
  return <span>{icon}</span>;
}

function Wrapper({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function TextField({ isError, disabled, ...rest }: TextFieldProps) {
  return (
    <div className={styles.fieldWrapperCss({ isError, disabled })}>
      <input {...rest} className={styles.fieldCss()} />
    </div>
  );
}

TextField.Label = Label;
TextField.ErrorMessage = ErrorMessage;
TextField.Icon = Icon;
TextField.Wrapper = Wrapper;
