import { Hero } from '@/component/template/Hero/Hero';
import { PageHeader } from '@/component/template/PageHeader/PageHeader';

const Home: React.FC = () => (
  <main className=''>
    <PageHeader />
    <Hero />
    <Company />
  </main>
);

export default Home;
