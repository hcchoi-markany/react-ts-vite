import { useState } from 'react';

const useSitesTitle = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return { open, setOpen, handleClose };
};

export default useSitesTitle;
