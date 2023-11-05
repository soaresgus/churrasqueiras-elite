import clsx from 'clsx';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { ComponentProps } from 'react';

interface HeaderItemProps extends ComponentProps<typeof Link> {
  title: string;
  selected?: boolean;
}

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

export function HeaderItem(props: HeaderItemProps) {
  return (
    <Link
      className={clsx(
        `${poppins.className} leading-6 text-black text-base font-[400] flex flex-col w-fit`,
        {
          'after:content-[""] after:block after:bg-black after:opacity-50 after:w-full after:h-[1px]':
            props.selected,
        }
      )}
      {...props}>
      {props.title}
    </Link>
  );
}
