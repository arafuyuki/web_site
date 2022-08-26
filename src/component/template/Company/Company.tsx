export const Company: React.FC = () => (
  <>
    {' '}
    <div className='bg-white text-black'>
      <h1 className='m-auto w-4/5 py-24 text-[60px] font-bold italic'>CANPANY</h1>
      <div className='m-auto w-4/5'>
        <ul>
          <li className='border-t py-4 opacity-30'></li>
          <li className='pb-6'>社名</li>
          <li className='border-t py-4 opacity-30'></li>
          <li className='pb-6'>本社所在地</li>
          <li className='border-t py-4 opacity-30'></li>
          <li className='pb-6'>設立</li>
          <li className='border-t py-4 opacity-30'></li>
          <li className='pb-6'>代表取締役</li>
          <li className='border-t py-4 opacity-30'></li>
          <li className='pb-6'>事業内容</li>
          <li className='border-t py-4 opacity-30'></li>
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
          <li className='pb-36'>お問い合わせフォーム</li>
        </ul>
      </div>
      <div className='m-auto bg-black text-white '>
        <ul>
          <div className='flex justify-between pr-24'>
            <div className='pl-36'>
              <li className='py-4'>HERP Hire</li>
              <li>HERP Nurture</li>
            </div>
            <div className='pl-36'>
              <li className='py-4'>HERP Lab</li>
              <li>note</li>
              <li className='py-4'>HERP TechHub</li>
            </div>
            <div className='pl-36'>
              <li className='py-4'>プライバシーポリシー</li>
              <li>個人情報の取り扱いについて</li>
              <li className='py-4'>個人情報保護方針</li>
              <li className='pb-8'>情報セキュリティ方針</li>
            </div>
          </div>
          <div className='border'></div>
          <div className='pb-12 text-center text-white'>
            <h6 className='text-12px'>&copy;2022.KIKAGAKU.Inc、KIKAGAKU.Inc.,All right reservd.</h6>
          </div>
        </ul>
      </div>
    </div>
    );
  </>
);
