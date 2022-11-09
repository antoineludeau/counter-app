import Grid from "@mui/material/Grid";

export const Counter = () => {
  return (
    <Grid container direction="column" alignItems={"center"}>
      <Grid item xs={12}>
        Counter Display
      </Grid>
      <Grid item xs={12}>
        Buttons
      </Grid>
    </Grid>
  );
};
