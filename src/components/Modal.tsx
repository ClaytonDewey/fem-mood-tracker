import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '.';
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
        <h2>Modal Title</h2>
        <p>This is the modal content.</p>
        <Button type='button' className='btn btn-close' onClick={onClose}>
          <Icon name='close' />
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
