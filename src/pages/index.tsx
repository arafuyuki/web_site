import { PageHeader } from '@/component/template/PageHeader/PageHeader';
import { Company } from '../component/template/Company/Company';

const Home: React.FC = () => (
  <>
    <main className=''>
      <PageHeader />
      <Company />
    </main>
  </>
);

export default Home;
