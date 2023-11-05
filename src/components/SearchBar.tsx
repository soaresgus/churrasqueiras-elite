import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

export function SearchBar() {
  return (
    <div className=" rounded-[4px] bg-[#f5f5f5] w-[243px] flex items-center justify-between pr-3">
      <input
        type="text"
        placeholder="O que você procura"
        className={`${poppins.className} overflow-hidden rounded-[4px] focus:outline-none focus:border-none bg-[#f5f5f5] pl-5 py-[7px] w-full h-full placeholder:text-xs placeholder:leading-[18px] placeholder:text-black placeholder:opacity-50`}
      />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
}
