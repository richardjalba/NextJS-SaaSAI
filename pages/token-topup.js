import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppLayout } from '../components/AppLayout';
import { getAppProps } from '../utils/getAppProps';

export default function TokenTopup() {
  const handleClick = async () => {
    const result = await fetch(`/api/addTokens`, { method: 'POST' });
    const json = await result.json();
    console.log('RESULT: ', json);
    window.location.href = json.session.url;
  };

  return (
    <div className='overflow-auto divh-full'>
      <div className='max-w-screen-sm mx-auto'>
        <br />
        <h1 className='text-center'>You're out of Credits!</h1>
        <br />
        <p className='text-lg'>wqerqwerqwerweqrqwereqwreqwrweqr</p>
        <br />
        <button
          className='btn bg-orange-600 hover:bg-stone-700'
          onClick={handleClick}
        >
          Add Credits
        </button>
        <p className='text-sm text-center text-slate-400'>
          All purchases are Non-Refundable.
        </p>
      </div>
    </div>
  );
}

TokenTopup.getLayout = function getLayout(page, pageProps) {
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
