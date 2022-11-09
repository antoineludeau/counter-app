import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

interface HomeTemplateProps {
  title: React.ReactNode;
  counter: React.ReactNode;
  footer: React.ReactNode;
}
export const HomeTemplate = ({ title, counter, footer }: HomeTemplateProps) => {
  return (
    <Container>
      <Box textAlign="center" padding={2}>
        {title}
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="400px"
        padding={2}
      >
        {counter}
      </Box>
      <Box
        textAlign="center"
        padding={2}
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      >
        {footer}
      </Box>
    </Container>
  );
};
