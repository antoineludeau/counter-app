import Typography from "@mui/material/Typography";

interface CounterDisplayProps {
  count: number;
}

export const CounterDisplay = ({ count }: CounterDisplayProps) => {
  return (
    <Typography variant="h1" gutterBottom>
      {count}
    </Typography>
  );
};
