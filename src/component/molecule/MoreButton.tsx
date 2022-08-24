import Image from 'next/image';

export const MoreButton: React.FC<{ link: string }> = ({ link }) => (
  <a href={link}>
    <div className='flex w-max items-center border shadow-lg'>
      <div className='px-4 pt-2'>
        <Image src={'/img/magnifying-glass.png'} width={30} height={30} />
      </div>
      <p className='pr-10 text-lg font-extrabold'>MORE</p>
    </div>
  </a>
);
