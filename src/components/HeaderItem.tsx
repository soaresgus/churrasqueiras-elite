import clsx from 'clsx';
import { Poppins } from 'next/font/google';
import Link from 'next/link';

interface HeaderItemProps {
  title: string;
  href: string;
  selected?: boolean;
}

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

export function HeaderItem({ title, href, selected }: HeaderItemProps) {
  return (
    <Link
      href={href}
      className={clsx(
        `${poppins.className} leading-6 text-black text-base font-[400] flex flex-col w-fit`,
        {
          'after:content-[""] after:block after:bg-black after:opacity-50 after:w-full after:h-[1px]':
            selected,
        }
      )}>
      {title}
    </Link>
  );
}
