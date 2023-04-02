import { ThreeDots } from 'react-loader-spinner';
import { LoaderInnerWrap } from './Loader.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Loader = () => {
  return createPortal (
    <LoaderInnerWrap>
      <ThreeDots
        height="100"
        width="100"
        radius="9"
        color="#5372F0"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderInnerWrap>, 
    modalRoot
  );
};
