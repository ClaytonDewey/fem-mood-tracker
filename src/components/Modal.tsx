import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Input } from '.';
import { Icon } from '../svg';

type ModalProps = {
  onClose: () => void;
};

const Modal = ({ onClose }: ModalProps) => {
  return (
    <motion.div
      className='modal__overlay'
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <motion.div
        className='modal__body'
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}>
        <h2>Log your mood</h2>
        <p>How was your mood today?</p>

        <div className='form-wrapper'>
          <div className='form-check'>
            <Input
              className='form-check-input'
              type='radio'
              name='mood'
              value='very-happy'
              id='very-happy'
            />
            <label htmlFor='very-happy' className='form-check-label'>
              Very Happy <Icon name='very-happy-color' />
            </label>
          </div>
          <div className='form-check'>
            <Input
              className='form-check-input'
              type='radio'
              name='mood'
              value='happy'
              id='happy'
            />
            <label htmlFor='happy' className='form-check-label'>
              Very Happy <Icon name='happy-color' />
            </label>
          </div>
        </div>

        <Button type='button' className='btn btn-primary' onClick={onClose}>
          Submit
        </Button>
      </motion.div>
    </motion.div>
  );
};

const ModalWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='modal__wrapper'>
      <Button
        type='button'
        className='btn btn-open'
        onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <AnimatePresence>
        {isOpen && <Modal onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default ModalWrapper;
