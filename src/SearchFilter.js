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

function SearchFilter({ data, searchTerm, setSearchTerm, newData }) {
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
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

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
          // value={searchTerm}
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
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          endAdornment={
            <IconButton>
              <ClearIcon
                className="clear-icon"
                onClick={() => setSearchTerm("")}
              />
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
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          endAdornment={
            <IconButton>
              <ClearIcon
                className="clear-icon"
                onClick={() => setSearchTerm("")}
              />
            </IconButton>
          }
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
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
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          endAdornment={
            <IconButton>
              <ClearIcon
                className="clear-icon"
                onClick={() => setSearchTerm("")}
              />
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
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          endAdornment={
            <IconButton>
              <ClearIcon
                className="clear-icon"
                onClick={() => setSearchTerm("")}
              />
            </IconButton>
          }
        >
          {/* {basePayItems &&
            basePayItems.map((name) => (
              <MenuItem value={name}>{name} USD</MenuItem>
            ))} */}
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
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></TextField>
      </FormControl>
    </div>
  );
}

export default SearchFilter;
