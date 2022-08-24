import Image from 'next/image';
import { MoreButton } from '@/component/molecule/MoreButton';

export const Products: React.FC = () => (
  <>
    <div className='mx-auto mt-20 w-10/12'>
      <div className='mx-auto'>
        <h2 className='title'>PRODUCTS</h2>
        <div className='mx-auto w-10/12'>
          <div className='mx-auto w-max py-6'>
            <Image src='/img/example.jpg' alt="product's photo" width={700} height={400} />
          </div>
          <div>
            <h3 className='font-bold'>デジタル人材採用を加速する採用管理システム</h3>
            <h3 className='font-2exbold text-2xl'>HERP FIRE</h3>
            <p className='py-10'>
              『HERPHire』は全社採用を推進したい経営者や人事責任者向けの採用管理システムです。複数の求人媒体からの応募情報の自動連携、SlackやChatworkとの連携による現場メンバーへのスピーディな情報共有により、現場メンバーが積極的に採用に参画できる「スクラム採用」の実現をサポートします。
            </p>
          </div>
          <MoreButton link='https://o-ream.com' />
        </div>
      </div>
    </div>
  </>
);
