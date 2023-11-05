import Link from 'next/link';
import { HeaderItem } from './HeaderItem';
import { Logo } from './Logo';
import { SearchBar } from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { headers } from 'next/headers';
import { WishListButton } from './WishListButton';

export function Header() {
  const headersList = headers();
  const pathName = headersList.get('referer');

  return (
    <header className="py-[7px] flex items-center">
      <Logo />
      <div className="flex gap-12 ml-[190px] items-center">
        <HeaderItem
          href="/"
          title="Início"
          selected={pathName?.endsWith('/')}
        />
        <HeaderItem
          href="/produtos"
          title="Produtos"
          selected={pathName?.includes('/produtos')}
        />
        <HeaderItem
          href="/contato"
          title="Contato"
          selected={pathName?.includes('/contato')}
        />
      </div>
      <div className="flex ml-auto items-center gap-6">
        <SearchBar />
        <WishListButton />
      </div>
    </header>
  );
}
