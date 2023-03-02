import { faFeather } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Logo = () => {
  return (
    <div className='text-3xl text-center py-4 font-heading'>
      Owl AI
      <span className='px-1'></span>
      <FontAwesomeIcon icon={faFeather} className='text-2xl text-slate-400' />
    </div>
  );
};
