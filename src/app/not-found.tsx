import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center w-full py-10 flex-col gap-4">
      <h1 className="text-8xl">404</h1>
      <span className="text-3xl">Página não encontrada</span>
      <Link className="text-2xl" href="/">
        Voltar
      </Link>
    </div>
  );
}
