import { useState } from "react";
import Grid from "@mui/material/Grid";
import { CounterDisplay, CounterButtons } from "../atoms";

type handleAddRemoveCountAction = "add" | "remove";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleAddRemoveCount = (action: handleAddRemoveCountAction) => {
    action === "add"
      ? setCount((prev) => prev + 1)
      : setCount((prev) => prev - 1);
  };

  return (
    <Grid container direction="column" alignItems={"center"}>
      <Grid item xs={12}>
        <CounterDisplay count={count} />
      </Grid>
      <Grid item xs={12}>
        <CounterButtons handleAddRemoveCount={handleAddRemoveCount} />
      </Grid>
    </Grid>
  );
};
