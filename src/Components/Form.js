import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import TabPanel from "./TabPanel";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Form() {
  const [value, setValue] = React.useState(0);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("New value",newValue);
  };

  const PageDisplay = () => {
    if (value === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (value === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (value === 2) {
        return <PersonalInfo formData={formData} setFormData={setFormData} />;
    }
        else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };
  

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
   <Box sx={{ width: '75%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab icon={<KeyboardArrowDownIcon />} iconPosition="end" label="INCOME RELATED INFORMATION" {...a11yProps(0)}/>
        <Tab icon={<KeyboardArrowDownIcon />} iconPosition="end" label="DEDUCTIONS" {...a11yProps(1)}/>
        <Tab icon={<KeyboardArrowDownIcon />} iconPosition="end"  label="TAX RELATED INFORMATION" {...a11yProps(2)}/>
        <Tab icon={<KeyboardArrowDownIcon />} iconPosition="end"  label="INCOME TAX RATIO" {...a11yProps(2)}/>
      </Tabs>
    </Box>
    <TabPanel value={value} index={0} setIndex={setValue} PageDisplay={PageDisplay}>
      </TabPanel>
      <TabPanel value={value} index={1} setIndex={setValue} PageDisplay={PageDisplay}>
      </TabPanel>
      <TabPanel value={value} index={2} setIndex={setValue} PageDisplay={PageDisplay}>
      </TabPanel>
      <TabPanel value={value} index={3} setIndex={setValue} PageDisplay={PageDisplay}>
      </TabPanel>
    </Box>
  );
}

export default Form;
