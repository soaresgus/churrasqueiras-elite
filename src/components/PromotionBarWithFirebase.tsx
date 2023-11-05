import { app } from '@/lib/firebase/firebase';
import { PromotionBar } from './PromotionBar';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

export async function PromotionBarWithFirebase() {
  const db = getFirestore(app);

  const result = (await getDoc(doc(db, 'config', 'promotion-bar'))).data();

  return (
    <PromotionBar>
      {result && result.value && <span>{result.value}</span>}
    </PromotionBar>
  );
}
