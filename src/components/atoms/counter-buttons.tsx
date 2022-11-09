import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface CounterButtonsProps {
  handleAddRemoveCount: any;
}

export const CounterButtons = ({
  handleAddRemoveCount,
}: CounterButtonsProps) => {
  return (
    <ButtonGroup size="small" aria-label="small button group">
      <IconButton
        onClick={() => handleAddRemoveCount("remove")}
        aria-label="remove one to counter"
      >
        <RemoveIcon />
      </IconButton>
      <IconButton
        onClick={() => handleAddRemoveCount("add")}
        aria-label="add one to counter"
      >
        <AddIcon />
      </IconButton>
    </ButtonGroup>
  );
};
