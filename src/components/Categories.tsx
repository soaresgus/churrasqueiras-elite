import { app } from '@/lib/firebase/firebase';
import { Category } from '@/types/Category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export async function Categories() {
  const db = getFirestore(app);

  const categoryRef = collection(db, 'category');
  const categorySnapshot = await getDocs(categoryRef);
  const result = categorySnapshot.docs.map((doc) => doc.data()) as Category[];

  return (
    <ul className="flex flex-col gap-4 border-r-[0.5px] border-opacity-[0.3] border-black pr-4 w-fit pt-10">
      {result.map((category) => (
        <li key={category.id} className="group">
          <Link
            className="flex items-center justify-between gap-14"
            href={`/produto?categoria=${category.id}`}>
            <span>{category.label}</span>
            <FontAwesomeIcon
              className="group-hover:animate-wiggle"
              icon={faChevronRight}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
