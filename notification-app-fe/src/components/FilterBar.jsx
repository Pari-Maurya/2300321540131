import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

function FilterBar({ type, setType }) {
  return (
    <FormControl sx={{ minWidth: 220, mb: 3 }}>
      <InputLabel>Notification Type</InputLabel>

      <Select
        value={type}
        label="Notification Type"
        onChange={(e) => setType(e.target.value)}
      >
        <MenuItem value="">
          All
        </MenuItem>

        <MenuItem value="Placement">
          Placement
        </MenuItem>

        <MenuItem value="Result">
          Result
        </MenuItem>

        <MenuItem value="Event">
          Event
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default FilterBar;