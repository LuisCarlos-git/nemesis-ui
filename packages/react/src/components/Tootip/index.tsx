import * as RdxTooltip from '@radix-ui/react-tooltip';

import * as styles from './styles';

type TootipProps = {
  children: React.ReactNode;
  message: string;
  delay?: number;
  side?: 'top' | 'left' | 'right' | 'bottom';
};

export function Tooltip({ children, message, delay = 0, side }: TootipProps) {
  return (
    <RdxTooltip.Provider>
      <RdxTooltip.Root delayDuration={delay}>
        <RdxTooltip.Trigger>{children}</RdxTooltip.Trigger>
        <RdxTooltip.Portal>
          <RdxTooltip.Content
            side={side}
            sideOffset={5}
            className={styles.contentCss()}
          >
            {message}
            <RdxTooltip.Arrow className={styles.arrowCss()} />
          </RdxTooltip.Content>
        </RdxTooltip.Portal>
      </RdxTooltip.Root>
    </RdxTooltip.Provider>
  );
}
