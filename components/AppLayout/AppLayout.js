import { useUser } from '@auth0/nextjs-auth0/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { Logo } from '../Logo/Logo';
import { useContext, useEffect } from 'react';
import PostsContext from '../../context/postsContext';

export const AppLayout = ({
  children,
  availableTokens,
  posts: postsFromSSR,
  postId,
  postCreated,
}) => {
  const { user } = useUser();

  const { setPostsFromSSR, posts, getPosts, noMorePosts } =
    useContext(PostsContext);

  useEffect(() => {
    setPostsFromSSR(postsFromSSR);
    if (postId) {
      const exists = postsFromSSR.find((post) => post._id === postId);
      if (!exists) {
        getPosts({ getNewerPosts: true, lastPostDate: postCreated });
      }
    }
  }, [postsFromSSR, setPostsFromSSR, postId, postCreated, getPosts]);

  return (
    <div className='grid grid-cols-[300px_1fr] h-screen max-h-screen'>
      <div className='flex flex-col text-white overflow-hidden'>
        <div className='bg-zinc-800 px-2'>
          <Logo />
          <Link href='/post/new' className='btn'>
            CREATE NEW
          </Link>
          <Link href='/token-topup' className='block mt-2 text-center'>
            <FontAwesomeIcon icon={faCoins} className='text-yellow-500' />
            <span className='pl-1'> {availableTokens} Credits Available </span>
          </Link>
        </div>

        <div className='px-4 flex-1 overflow-auto bg-gradient-to-b from-zinc-800 to-stone-900'>
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/post/${post._id}`}
              className={`py-1 border border-white/0 block text-ellipsis overflow-hidden whitespace-nowrap my-1 px-2 bg-white/10 cursor-pointer rounded-sm ${
                postId === post._id ? 'bg-white/20 border-white' : ''
              }`}
            >
              {post.topic}
            </Link>
          ))}
          {!noMorePosts && (
            <div
              onClick={() => {
                getPosts({ lastPostDate: posts[posts.length - 1].created });
              }}
              className='hover:underline text-sm text-slate-400 text-center cursor-pointer mt-4'
            >
              -Show More-
            </div>
          )}
        </div>
        <div className='bg-stone-900 flex items-center gap-2 border-t border-t-black/50 h-20 px-2'>
          {!!user ? (
            <>
              {' '}
              <div className='min-w-[50px]'>
                <Image
                  src={user.picture}
                  alt={user.name}
                  height={50}
                  width={50}
                  className='rounded-full'
                />
              </div>
              <div className='flex-1'>
                <div className='font-bold'>{user.email}</div>
                <Link className='text-sm' href='/api/auth/logout'>
                  Logout
                </Link>
              </div>
            </>
          ) : (
            <Link href='/api/auth/login'>Login</Link>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};
