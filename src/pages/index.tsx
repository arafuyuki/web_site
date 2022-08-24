import { Company } from '@/component/template/Company/Company';
import { Hero } from '@/component/template/Hero/Hero';
import { PageHeader } from '@/component/template/PageHeader/PageHeader';
import { Products } from '@/component/template/Products/products';

const Home: React.FC = () => (
  <main className=''>
    <PageHeader />
    <Hero />
    <Products />
    <Company />
  </main>
);

export default Home;
