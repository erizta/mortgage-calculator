import { Slider, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledSlider = styled(Slider)`
  color: #00bcd4; // Custom slider color
`;

const SliderComponent = ({
  defaultValue,
  min,
  max,
  label,
  unit,
  steps,
  amount,
  onChange,
  value,
}) => {
  return (
    <Stack my={1.4}>
      <Stack gap={1}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {unit} {amount}
        </Typography>
      </Stack>
      <StyledSlider
        min={min}
        max={max}
        defaultValue={defaultValue}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={onChange}
        value={value}
        marks
        step={steps}
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="text.secondary">
          {unit} {min}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {unit} {max}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponent;
