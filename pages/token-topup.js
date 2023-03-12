import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppLayout } from '../components/AppLayout';
import { getAppProps } from '../utils/getAppProps';

export default function TokenTopup() {
  const handleClick = async () => {
    const result = await fetch(`/api/addTokens`, {
      method: 'POST',
    });
    const json = await result.json();
    console.log('RESULT: ', json);
    window.location.href = json.session.url;
  };

  return (
    <div className='overflow-auto divh-full'>
      <div className='max-w-screen-sm mx-auto'>
        <br />
        <h1 className='text-center'>Unlock Credits!</h1>
        <br />
        <div className='text-lg'>
          <p className='p-4 bg-blue-100 rounded-md'>
            <span className='font-bold'> What is Owl AI?</span> Owl AI is a
            fantastic tool for content creators and aspiring writers who are
            looking to generate polished content in a &#39;ready to go&#39;
            format!
          </p>

          <p className='p-4 bg-yellow-100 rounded-md'>
            <span className='font-bold'> What are Credits?</span> Every Credit
            you use generates a high-quality piece of content at lightning fast
            speed with Owl AI.
          </p>
          <br />
          <p className='text-center'>
            Let us help you finish your work or get your creative juices
            flowing.
          </p>
          <p className='font-bold text-center'>
            Click the Add Credits button to get started!
          </p>
        </div>

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
        <br />
        <br />
        <p className='text-sm text-center text-slate-500 italic'>
          Powered by OpenAI
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
