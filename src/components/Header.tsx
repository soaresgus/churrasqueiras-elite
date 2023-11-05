'use client';

import { HeaderItem } from './HeaderItem';
import { Logo } from './Logo';
import { SearchBar } from './SearchBar';
import { WishListButton } from './WishListButton';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface HeaderItem {
  href: string;
  title: string;
  selected?: boolean;
}

export function Header() {
  const pathName = usePathname();

  const headerItemsInitialItems: HeaderItem[] = [
    {
      href: '/',
      title: 'Início',
      selected: true,
    },
    {
      href: '/produtos',
      title: 'Produtos',
      selected: false,
    },
    {
      href: '/contato',
      title: 'Contato',
      selected: false,
    },
  ];

  const [headerItems, setHeaderItems] = useState<HeaderItem[]>(
    headerItemsInitialItems
  );

  const changeHeaderItem = (href: string) => {
    let headerItemsCopy = headerItems;

    headerItemsCopy = headerItemsCopy.map((item) => {
      return {
        ...item,
        selected: false,
      };
    });

    headerItemsCopy = headerItemsCopy.map((item) => {
      if (item.href === href) {
        return {
          ...item,
          selected: true,
        };
      }
      return item;
    });

    setHeaderItems(headerItemsCopy);
  };

  useEffect(() => {
    changeHeaderItem(pathName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  return (
    <header className="py-[7px] flex items-center justify-center flex-wrap gap-8 xl:gap-0 xl:flex-nowrap xl:justify-normal">
      <Logo />
      <div className="flex gap-3 w-full justify-center items-center xl:w-fit xl:ml-[190px] xl:gap-12 xl:justify-normal">
        {headerItems.map((item) => (
          <HeaderItem
            key={item.href}
            href={item.href}
            title={item.title}
            selected={item.selected}
          />
        ))}
      </div>
      <div className="flex xl:ml-auto items-center gap-6 w-full xl:w-fit">
        <SearchBar />
        <WishListButton />
      </div>
    </header>
  );
}
