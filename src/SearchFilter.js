import React from "react";
import {
  Select,
  MenuItem,
  OutlinedInput,
  Chip,
  FormControl,
  useTheme,
  InputLabel,
  Box,
  Autocomplete,
  Stack,
  Input,
  TextField
} from "@mui/material";
import "./index.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["Oliver Hansen", "Van Henry", "April Tucker", "Ralph Hubbard"];

const getStyles = (name, personName, theme) => {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};

function SearchFilter() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 120 }} size="small">
        <InputLabel id="roles">Roles</InputLabel>
        <Select
          labelId="roles"
          label="Roles"
          id="roleId"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Roles" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
        <InputLabel id="demo-simple-select-label">
          Number of Employees
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Number of Employees"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
        <InputLabel id="experience">Experience</InputLabel>
        <Select
          labelId="experience"
          id="experienceId"
          // value={age}
          label="Experience"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
        <InputLabel id="remote">Remote</InputLabel>
        <Select
          labelId="remote"
          id="remoteId"
          // value={age}
          label="Remote"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
        <InputLabel id="basePay">Minimum Base Pay Salary</InputLabel>
        <Select
          labelId="basePay"
          id="basePayId"
          // value={age}
          label="Minimum Base Pay Salary"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <TextField className="text-field" placeholder="Search Company Name"></TextField>
      </FormControl>
    </div>
  );
}

export default SearchFilter;

// {
/* <div className="card">
  <div className="card-logo">
    <img src="#" />
  </div>
  <div>
    <div className="card-info-container">
      <h3 className="MuiBox-root css-rulwqv">Homework App</h3>
      <h2>Jr Fullstack</h2>
    </div>
    <p className="card-subtext">India</p>
  </div>
  <p className="card-salary">
    Estimated Salary: ₹15 - 20 LPA ✅
    <br />
  </p>
  
  
  <div className="card-body">
    <p className="about-company">About Company</p>
    <p>
      <strong>About us</strong>
    </p>
    <p>
      This is a sample job and you must have displayed it to understand
      that its not just some random lorem ipsum text but something which
      was manually written. Oh well, if random text is what you were
      looking for then here it is: Lorem Ipsum is simply dummy text of the
      printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the
      leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages and now in this assignment
    </p>
  </div>
  <div className="experience">
    <h3>Minimum Experience</h3>
    <h3>1 years</h3>
  </div>
  <button>⚡ Easy Apply</button>
  </div> */
//   }
