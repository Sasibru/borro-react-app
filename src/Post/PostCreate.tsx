
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Logo from '../Logo';
import Checkbox from '@mui/material/Checkbox';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Range, DateRange, DateRangeProps } from 'react-date-range';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function PostCreate() {
  const [openDialog, setOpenDialog] = useState(false);
  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get('title'),
      description: data.get('description'),
    });
  };

  return (
    <>
    
      <Container component="main" maxWidth="xs">
      
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Logo height={70}width={70}/>
          <Typography component="h1" variant="h5">
            Create an add
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              name="title"
              label="Title of your add"
              type="title"
              id="title"
              autoComplete="add title"
            />
          
            <TextField
              margin="normal"
              required
              fullWidth
              id="description"
              label="Describe the item you want to lend out"
              name="description"
              autoComplete="Description"
              autoFocus
            />
            If the Item is free please check the box
            <Checkbox></Checkbox>


            <Stack spacing={{ xs: 1, sm: 2 }} direction="row" alignItems="center" style={{ flexGrow: 1 }}>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon/>}  >
            Upload a picture of your item
            <VisuallyHiddenInput type="file" />
            </Button>
            </Stack>
           
            
            <Stack spacing={{ xs: 1, sm: 2 }} direction="row" alignItems="center" style={{ flexGrow: 1 }}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                onClick={handleDialogOpen}
                sx={{ mt: 4, mb: 2 }}
              >
                Choose dates
              </Button>
            </Stack>

            
          </Box>
        </Box>

         {/* Calendar Dialog */}
        <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogContent>
          <Calendar />
        </DialogContent>
      </Dialog>
      </Container>
     
    </>
  );
}

{/* <Stack spacing={{xs:1, sm: 2}} direction='row' alignItems="center">
            <Link to={"/Calendar"} style={{ flexGrow: 1 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 4, mb: 2}}
              >
              Choose dates 
            </Button>
            </Link>
            </Stack> */}

              function Calendar() {
              const [dateRange, setDateRange] = useState<Range[]>([
                {
                  startDate: new Date(),
                  endDate: new Date(),
                  key: 'selection'
                }
              ]);
            
              const handleDateChange = (item) => {
                // Update the state when the date range changes
                setDateRange([item.selection]);
              };
            
              return (
                  <div style={calendarContainerStyle}>
                <DateRange
                  editableDateInputs={true}
                  onChange={handleDateChange}
                  moveRangeOnFirstSelection={false}
                  ranges={dateRange}
                  weekStartsOn={1}
          
                />
                </div>
              );
            }
            const calendarContainerStyle = {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '50vh',
            };