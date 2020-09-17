import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function Presentation(props) {
const{
  handleFirstName,
  handleLastName,
  handleDateOfBirth,
  handleEmail,
  handlePhoneNumber,
  handleGender,
  handleEducation,
  handlePercentage,
  handleCollegeName,
  handleCity,
  handleHobbies,
  handleSkills ,
}=props
const classes = useStyles();
const [open, setOpen] = React.useState(false);

        return (
        <div className="Resume">
          <h2>Create Your Resume</h2>
<form className={classes.root} style={{display:"flex"}} noValidate autoComplete="off">
    <div>
    <TextField id="outlined-basic" label="First Name" variant="outlined" onChange={handleFirstName} fullWidth /><br/><br/>
    <TextField id="outlined-basic" label="Last Name" variant="outlined" onChange={handleLastName} fullWidth/><br/><br/>
    <TextField id="outlined-basic" label="Date of Birth" variant="outlined" onChange={handleDateOfBirth} fullWidth/><br/><br/>
    <TextField id="outlined-basic" label="Email" variant="outlined" onChange={handleEmail} fullWidth/><br/><br/>
    <TextField id="outlined-basic" label="Phone Number" variant="outlined" onChange={handlePhoneNumber} fullWidth/><br/><br/>
    <TextField id="outlined-basic" label="Gender" variant="outlined" onChange={handleGender} fullWidth/><br/><br/>
    </div>
    <div>
    <TextField id="outlined-basic" label="Education" variant="outlined" onChange={handleEducation} fullWidth/><br/><br/>
    <TextField id="outlined-basic" label="Percentage" variant="outlined" onChange={handlePercentage} fullWidth/><br/><br/>
    <TextField id="outlined-basic" label="College Name" variant="outlined" onChange={handleCollegeName} fullWidth/><br/><br/>
    <TextField id="outlined-basic" label="City" variant="outlined" onChange={handleCity} fullWidth/><br/><br/>
    <TextField id="outlined-basic" label="Hobbies" variant="outlined" onChange={handleHobbies} fullWidth/><br/><br/>
    <TextField id="outlined-basic" label="Skills" variant="outlined" onChange={handleSkills} fullWidth/><br/><br/>
    </div>
</form>
        </div>
        );
    } 
