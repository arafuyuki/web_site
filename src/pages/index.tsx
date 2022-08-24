import { Hero } from '@/component/template/Hero/Hero';
import { PageHeader } from '@/component/template/PageHeader/PageHeader';
import { Products } from '@/component/template/Products/products';

const Home: React.FC = () => (
  <main className=''>
    <PageHeader />
    <Hero />
    <Products />
  </main>
);

export default Home;
