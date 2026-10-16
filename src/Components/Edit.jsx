import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaUserEdit } from "react-icons/fa";
import { FormControl, TextField } from '@mui/material';
import { FiFileText } from "react-icons/fi";
import { IoMdRefreshCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import Preview from '../Components/Preview';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Edit() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button style={{ color: '#4d321d' }} className='btn' onClick={handleOpen}><FaUserEdit />Edit CV</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit resume deatils
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <h3>Personal details</h3>
              <div className='row p-3' >
                <TextField id="standard-basic-fullname" label="Full name" variant="standard" />
                <TextField id="standard-basic-loc" label="Location" variant="standard" />
                <FormControl variant='standard'>
                  <InputLabel id="demo-simple-select-label">Choose job title</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Job"
                  >
                    <MenuItem value={"job"}>job</MenuItem>

                  </Select>
                </FormControl>
              </div>
              <h3>Contact details</h3>
              <div className='row p-3'>
                <TextField id="standard-basic-email" label="E-mail" variant="standard" />
                <TextField id="standard-basic-contact" label="Contact number" variant="standard" />
                <TextField id="standard-basic-linkedin" label="LinkedIn Link" variant="standard" />
                <TextField id="standard-basic-github" label="Githb Link" variant="standard" />
              </div>
              <h3>Educational details</h3>
              <div className='row p-3'>
                <TextField id="standard-basic-degree" label="Bachelors Degree" variant="standard" />
                <TextField id="standard-basic-college" label="University/college" variant="standard" />
                <TextField id="standard-basic-year" label="Year of graduation" variant="standard" />
              </div>
            </div>
          </Box>
        </Box>
      </Modal>

    </div>
  )
}

export default Edit
