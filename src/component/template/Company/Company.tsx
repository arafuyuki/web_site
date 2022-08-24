import React from 'react';

export const baseId = 'template-company';

export const Company: React.FC = () => (
  <div className='bg-white text-black'>
    <h1 className='m-auto w-4/5 py-24 text-[60px] font-bold italic'>CANPANY</h1>
    <div className='m-auto w-4/5'>
      <ul>
        <li className='border-t-2 py-4 opacity-30'></li>
        <li className='pb-6'>社名</li>
        <li className='border-t-2 py-4 opacity-30'></li>
        <li className='pb-6'>本社所在地</li>
        <li className='border-t-2 py-4 opacity-30'></li>
        <li className='pb-6'>設立</li>
        <li className='border-t-2 py-4 opacity-30'></li>
        <li className='pb-6'>代表取締役</li>
        <li className='border-t-2 py-4 opacity-30'></li>
        <li className='pb-6'>事業内容</li>
        <li className='border-t-2 py-4 opacity-30'></li>
      </ul>
    </div>
    <div className='bg-white text-black'>
      <h1 className='m-auto w-4/5 py-24 text-[60px] font-bold italic'>ACCESS</h1>
      <div className='m-auto w-4/5'></div>
      <ul className='m-auto w-4/5'>
        <li>〒兵庫県淡路市浜1ー7ホテルエビス4F</li>
        <li>バス停　大磯港・・・徒歩２分</li>
      </ul>
    </div>
    <div className='bg-white text-black'>
      <h1 className='m-auto w-4/5 py-24 text-[60px] font-bold italic'>CONTACT</h1>
      <div className='m-auto w-4/5'></div>
      <ul className='m-auto w-4/5'>
        <li className='pb-6 text-lg font-bold'>会社へのお問い合わせ</li>
        <li className='py-4'>arafuyuki2@gmail.com</li>
        <li className='py-6 text-lg font-bold'>プロダクトに関するお問い合わせ</li>
        <li>下記フォームよりお問い合わせください</li>
        <li className='border-bottom'>お問い合わせフォーム</li>
      </ul>
    </div>
  </div>
);
