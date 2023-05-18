import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const StyledChartContainer = styled(Stack)`
  display: flex;
  justify-content: center;
`;

const StyledPieChart = styled(Pie)`
  width: 300px;
  height: 300px;
`;

const Result = ({ data }) => {
  const { homeValue, loanAmount, loanTerm, interestRate } = data;

  const totalLoanMonths = loanTerm * 12;
  const interestPerMonth = interestRate / 100 / 12;
  const monthlyPayment =
    (loanAmount *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1);

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

  const pieChartData = {
    labels: ["Principle", "Interest"],
    datasets: [
      {
        label: "Ratio of Principle and Interest",
        data: [homeValue, totalInterestGenerated],
        backgroundColor: ["rgba(0, 123, 255, 0.2)", "rgba(0, 200, 83, 0.2)"],
        borderColor: ["rgba(0, 123, 255, 0.5)", "rgba(0, 200, 83, 0.5)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack gap={3}>
      <Typography textAlign="center" variant="h5">
        Monthly Payment: $ {monthlyPayment.toFixed(2)}
      </Typography>
      <StyledChartContainer>
        <StyledPieChart data={pieChartData} />
      </StyledChartContainer>
    </Stack>
  );
};

export default Result;
