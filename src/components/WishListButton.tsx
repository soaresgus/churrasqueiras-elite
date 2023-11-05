import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface WishListButtonProps {
  count?: number;
}

export function WishListButton({ count }: WishListButtonProps) {
  return (
    <Link href="lista-desejos" className="relative group">
      <div className="w-4 h-4 text-xs rounded-full absolute top-3 left-3 flex items-center font-bold justify-center text-white bg-button-secondary group-hover:bg-button-hover transition-colors">
        {count || 0}
      </div>
      <FontAwesomeIcon icon={faHeart} size="xl" />
    </Link>
  );
}
