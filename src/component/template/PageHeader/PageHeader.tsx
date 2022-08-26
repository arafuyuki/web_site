export const PageHeader: React.FC = () => (
  <>
    <div className='mx-auto flex h-[75px] w-11/12 items-center justify-between text-black'>
      <div className='text-2xl'>Logo</div>
      <div className='flex w-7/12 justify-around'>
        <a className='text-lg' href='#home'>
          home
        </a>
        <a className='text-lg' href='#product'>
          product
        </a>
        <a className='text-lg' href='#company'>
          company
        </a>
        <a className='text-lg' href='#access'>
          access
        </a>
        <a className='text-lg' href='#contact'>
          contact
        </a>
      </div>
    </div>
  </>
);
