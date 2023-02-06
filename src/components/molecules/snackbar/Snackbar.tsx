import * as React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import 'styled-components/macro';
import styled from 'styled-components';
import tw from 'twin.macro';
import { AnimatePresence, motion } from 'framer-motion';
import IconButton from '../buttons/IconButton';

export interface ISnackbarProps {
  title?: string;
  message?: string;
  onClose?: () => void;
  open?: boolean;
  color?: 'success';
  autoHide?: boolean;
  timeShowing?: number;
}

const StyledSnackbar = styled(motion.div)(({ color }) => [
  tw`fixed bottom-10 bg-gray-300 text-sm rounded-sm w-5/6 mx-auto`,
  color === 'success' && tw`bg-green-500`,
]);

const Snackbar: React.FC<ISnackbarProps> = ({
  onClose,
  message,
  title,
  open,
  color,
  autoHide = true,
  timeShowing = 5000,
}) => {
  React.useEffect(() => {
    const closeInterval = setInterval(() => {
      if (onClose && autoHide) {
        onClose();
      }
    }, timeShowing);

    return () => clearInterval(closeInterval);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <StyledSnackbar
          color={color}
          initial={{ y: 100, x: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.1 }}
          exit={{ y: 100 }}
        >
          <div className='relative p-6'>
            <IconButton
              className='absolute right-4 top-4'
              icon={<XMarkIcon className='w-5 h-5 m-1' />}
              onClick={onClose}
              variant='icon'
            />
            <div className='flex items-center'>
              {color === 'success' && (
                <CheckCircleIcon className='w-5 h-5 mr-1' />
              )}
              <p className='font-medium'>{title}</p>
            </div>
            {message && <p className='mt-2'>{message}</p>}
          </div>
        </StyledSnackbar>
      )}
    </AnimatePresence>
  );
};

export default Snackbar;
