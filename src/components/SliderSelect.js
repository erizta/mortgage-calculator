import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
// COMPONENTS
import SliderComponent from "./Common/SliderComponent";

const StyledSliderSelect = styled(Box)`
  padding: 24px;
  margin-bottom: 24px;
  border-radius: 8px;
  box-shadow: 4px 8px 36px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled(Typography)`
  margin-bottom: 16px;
  color: #333;
`;

const SliderSelect = ({ data, setData }) => {
  const bank_limit = 10000;
  return (
    <StyledSliderSelect>
      <StyledTitle variant="h6">Select your options:</StyledTitle>
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            homeValue: value.toFixed(0),
            downPayment: (0.2 * value).toFixed(0),
            loanAmount: (0.8 * value).toFixed(0),
          });
        }}
        defaultValue={data.homeValue}
        min={1000}
        max={bank_limit}
        steps={100}
        unit="$"
        amount={data.homeValue}
        label="Home Value"
        value={data.homeValue}
      />

      <SliderComponent
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: value.toFixed(0),
            loanAmount: (data.homeValue - value).toFixed(0),
          })
        }
        defaultValue={data.downPayment}
        min={0}
        max={data.homeValue}
        steps={100}
        unit="$"
        amount={data.downPayment}
        label="Down Payment"
        value={data.downPayment}
      />

      <SliderComponent
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: value.toFixed(0),
            downPayment: (data.homeValue - value).toFixed(0),
          })
        }
        defaultValue={data.loanAmount}
        min={0}
        max={data.homeValue}
        steps={100}
        unit="$"
        amount={data.loanAmount}
        label="Loan Amount"
        value={data.loanAmount}
      />

      <SliderComponent
        onChange={(e, value) =>
          setData({
            ...data,
            interestRate: value.toFixed(0),
          })
        }
        defaultValue={data.interestRate}
        min={2}
        max={18}
        steps={0.5}
        unit="%"
        amount={data.interestRate}
        label="Interest Rate"
        value={data.interestRate}
      />
    </StyledSliderSelect>
  );
};

export default SliderSelect;
