import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

export type SubmitButtonsProps = {
  isSubmitMode: boolean;
  setIsSubmitMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const SubmitButtons = ({ isSubmitMode, setIsSubmitMode }: SubmitButtonsProps) => {
  if (isSubmitMode) {
    return (
      <>
        <IconButton title='cancle' onClick={() => setIsSubmitMode(!isSubmitMode)}>
          <CloseIcon fontSize='small' />
        </IconButton>
        <IconButton title='submit' type='submit'>
          <SendIcon fontSize='small' />
        </IconButton>
      </>
    );
  } else {
    return (
      <>
        <IconButton title='edit' onClick={() => setIsSubmitMode(!isSubmitMode)}>
          <EditIcon fontSize='small' />
        </IconButton>
      </>
    );
  }
};

export default SubmitButtons;
