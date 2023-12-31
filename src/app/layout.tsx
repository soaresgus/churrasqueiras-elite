import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Header } from '@/components/Header';
import { PromotionBarWithFirebase } from '@/components/PromotionBarWithFirebase';
import { Line } from '@/components/Line';
import Head from 'next/head';
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

const keywords = [
  'elite',
  'elite equipamentos',
  'churrasqueiras elite',
  'churrasqueira',
  'espetos',
  'grelha',
  'churrasco',
  'acendedor de carvão',
  'tábua de churrasco',
  'conjunto de churrasco',
  'facas de churrasco',
  'utensílios para churrasco',
  'assadeiras',
  'panelas',
  'frigideiras',
  'liquidificadores',
  'mixers',
  'fogões',
  'fornos',
  'coifas',
  'cozinha industrial',
  'equipamentos de restaurante',
  'fogão industrial',
  'fritadeira industrial',
  'grelhadores industriais',
  'balcões refrigerados',
  'utensílios de cozinha',
  'tachos',
  'panelas de pressão',
  'travessas',
  'talheres',
  'utensílios de corte',
  'frigideiras antiaderentes',
  'frigideiras de ferro fundido',
  'talheres de aço inoxidável',
  'copos e taças',
  'tábuas de corte',
  'descascadores',
  'liquidificadores industriais',
  'processadores de alimentos',
  'fornos comerciais',
  'grelhadores de alta capacidade',
  'mesas de preparação',
  'carrinhos de serviço',
  'refrigeradores comerciais',
  'freezers industriais',
  'ventilação de cozinha',
  'exaustores',
  'balanças de cozinha',
  'máquinas de café',
  'fornos de pizza',
  'lavagem de louça industrial',
  'mobiliário de restaurante',
  'roupas de chef',
  'uniformes de cozinha',
  'luvas de cozinha',
  'cestos de fritura',
  'termômetros de cozinha',
  'produtos de limpeza para cozinha',
  'carrinhos de transporte',
  'embalagens para alimentos',
  'mesas de jantar',
  'cadeiras de restaurante',
  'mesas de bar',
  'banquetas de bar',
  'decoração de restaurante',
  'bebidas alcoólicas',
  'vinhos',
  'cervejas artesanais',
  'coquetéis',
  'barbecue',
  'churrasqueira a gás',
  'churrasqueira a carvão',
  'churrasqueira elétrica',
  'churrasqueira portátil',
  'churrasqueira de embutir',
  'espetos giratórios',
  'termômetros para churrasco',
  'tábuas de corte de bambu',
  'conjuntos de facas',
  'churrasqueira a pellets',
  'acessórios para churrasco',
  'churrasqueira a lenha',
  'grelha de grelhar',
  'marinadores de carne',
  'caixas de gelo',
  'acendedor elétrico de carvão',
  'kit de limpeza de grelha',
  'defumadores',
  'bistequeiras',
  'kit de churrasco profissional',
  'panela de paella',
  'tacho de cobre',
  'frigideira de ferro fundido',
  'cozinha ao ar livre',
  'utensílios de cozinha em aço inoxidável',
  'utensílios de cozinha de cobre',
  'assadeira de vidro',
  'panela de pressão elétrica',
  'travessa de porcelana',
  'conjunto de talheres',
  'copos de cristal',
  'jogos de panelas',
  'talheres de prata',
  'kit de utensílios de corte',
  'faqueiro de aço inoxidável',
  'taças de vinho',
  'copos de cerveja',
  'copos de coquetel',
  'copos de martini',
  'coqueteleira',
  'copos de shot',
  'tábuas de corte de plástico',
  'tábuas de corte de madeira',
  'descascador de legumes',
  'descascador de frutas',
  'liquidificador de alta potência',
  'processador de alimentos profissional',
  'forno de convecção',
  'forno a vapor',
  'forno de pizza comercial',
  'fogão a gás industrial',
  'fogão elétrico industrial',
  'frigideira de ferro fundido industrial',
  'panelas de cozimento lento',
  'equipamentos de cozinha industrial',
  'frigideiras antiaderentes industriais',
  'frigideiras de aço inoxidável industrial',
  'panelas de pressão industriais',
  'exaustor de cozinha industrial',
  'bancadas de aço inoxidável',
  'balança de cozinha comercial',
  'máquinas de café industriais',
  'equipamentos de bar',
  'utensílios de bar',
  'decoração de bar',
  'vinhos tintos',
  'vinhos brancos',
  'vinhos espumantes',
  'cervejas artesanais locais',
  'coquetéis exclusivos',
  'bebidas não alcoólicas',
  'bebidas energéticas',
  'refrigerantes',
  'água mineral',
  'sucos naturais',
  'aperitivos',
  'petiscos para churrasco',
  'carnes para churrasco',
  'peixes para grelhar',
  'vegetais para churrasco',
  'temperos e marinadas',
  'receitas de churrasco',
  'dicas de churrasco',
];

export const metadata: Metadata = {
  title: 'Churrasqueiras Elite',
  description: 'O melhor das churrasqueiras direto para sua casa!',
  abstract: 'O melhor das churrasqueiras direto para sua casa!',
  keywords,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://churrasqueiraselite.com',
    title: 'Churrasqueiras Elite',
    description: 'O melhor das churrasqueiras direto para sua casa!',
    images: [
      {
        url: 'URL da sua imagem aqui',
        alt: 'Logo Marca Churrasqueiras Elite',
        width: 800,
        height: 800,
      },
    ],
    siteName: 'Churrasqueiras Elite',
  },
  twitter: {
    title: 'Churrasqueiras Elite',
    description: 'O melhor das churrasqueiras direto para sua casa!',
    site: 'https://churrasqueiraselite.com',
    images: [''],
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} w-screen h-screen bg-white`}>
        <PromotionBarWithFirebase />
        <div>
          <div className="my-5 xl:px-body px-8">
            <Header />
          </div>
          <Line height="1px" width="100%" />
          <main className="xl:px-body px-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
