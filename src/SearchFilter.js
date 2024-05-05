import React, { useState } from "react";
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
  TextField,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
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

const getStyles = (name, personName, theme) => {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};
const names = ["Oliver Hansen", "Van Henry", "April Tucker", "Ralph Hubbard"];

function SearchFilter({
  data,
  filter,
  newData,
  handleFilterChange,
  handleClearFilter,
}) {
  const theme = useTheme();

  const menuItems = [...new Set(newData && newData.map((val) => val.location))];
  const basePayItems = [
    ...new Set(newData && newData.map((val) => val.minJdSalary)),
  ];
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  console.log("filter", filter);

  return (
    <div>
      <FormControl sx={{ m: 2, width: 200 }} size="small">
        <InputLabel className="filter-title" id="roles">
          Roles
        </InputLabel>
        <Select
          className="select-role"
          labelId="roles"
          label="Roles"
          id="roleId"
          multiple
          // value={filter}
          endAdornment={
            <IconButton>
              <ClearIcon
                className="clear-icon"
                onClick={() => setPersonName("")}
              />
            </IconButton>
          }
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
          {names &&
            names.map((name) => (
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
      <FormControl sx={{ m: 2, width: 200 }} size="small">
        <InputLabel className="filter-title" id="location">
          Location
        </InputLabel>
        <Select
          className="select-role"
          labelId="location"
          id="locationId"
          label="Location"
          value={filter}
          onChange={handleFilterChange}
          endAdornment={
            <IconButton>
              <ClearIcon className="clear-icon" onClick={handleClearFilter} />
            </IconButton>
          }
        >
          {menuItems &&
            menuItems.map((name) => <MenuItem value={name}>{name}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 2, width: 200 }} size="small">
        <InputLabel className="filter-title" id="experience">
          Min Experience
        </InputLabel>
        <Select
          labelId="experience"
          id="experienceId"
          label="Experience"
          value={filter}
          onChange={handleFilterChange}
          endAdornment={
            <IconButton>
              <ClearIcon className="clear-icon" onClick={handleClearFilter} />
            </IconButton>
          }
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
          <MenuItem value="6">6</MenuItem>
          <MenuItem value="7">7</MenuItem>
          <MenuItem value="8">8</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 2, width: 200 }} size="small">
        <InputLabel className="filter-title" id="remote">
          Remote
        </InputLabel>
        <Select
          labelId="remote"
          id="remoteId"
          label="Remote"
          value={filter}
          onChange={handleFilterChange}
          endAdornment={
            <IconButton>
              <ClearIcon className="clear-icon" onClick={handleClearFilter} />
            </IconButton>
          }
        >
          <MenuItem value="remote">Remote</MenuItem>
          <MenuItem value="in-office">In-Office</MenuItem>
          <MenuItem value="hybrid">Hybrid</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 2, width: 205 }} size="small">
        <InputLabel className="filter-title" id="basePay">
          Minimum Base Pay Salary
        </InputLabel>
        <Select
          labelId="basePay"
          id="basePayId"
          label="Minimum Base Pay Salary"
          value={filter}
          onChange={handleFilterChange}
          endAdornment={
            <IconButton>
              <ClearIcon className="clear-icon" onClick={handleClearFilter} />
            </IconButton>
          }
        >
          <MenuItem value="0">0L</MenuItem>
          <MenuItem value="10">10L</MenuItem>
          <MenuItem value="20">20L</MenuItem>
          <MenuItem value="30">30L</MenuItem>
          <MenuItem value="40">40L</MenuItem>
          <MenuItem value="50">50L</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ mb: 1, ml: 2, width: 200 }}>
        <TextField
          size="small"
          className="search-company"
          placeholder="Search Company Name"
          onChange={handleFilterChange}
        ></TextField>
      </FormControl>
    </div>
  );
}

export default SearchFilter;
