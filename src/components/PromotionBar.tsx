import clsx from 'clsx';
import { ReactNode } from 'react';

interface PromotionBarProps {
  children?: ReactNode;
}

export function PromotionBar({ children }: PromotionBarProps) {
  return (
    <div
      className={clsx(
        'bg-black text-text-primary w-full items-center text-center d-flex justify-center py-3',
        {
          hidden: children === undefined,
        }
      )}>
      {children}
    </div>
  );
}
