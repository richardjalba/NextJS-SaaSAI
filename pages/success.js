import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppLayout } from '../components/AppLayout';
import { getAppProps } from '../utils/getAppProps';

export default function Success() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1 className='text-center'>Thank you for your purchase!</h1>
      <br />
      <p className='text-center text-lg'>
        Click the Create New button to get started!{' '}
      </p>
    </div>
  );
}

Success.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const props = await getAppProps(ctx);
    return {
      props,
    };
  },
});
