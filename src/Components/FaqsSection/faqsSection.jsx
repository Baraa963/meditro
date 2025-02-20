import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function faqsSection() {
  const AccordionData1 = [
    {
      title: "How Doctor Can Ease Your Pain?",
      decsription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "How do I withdraw from a subject?",
      decsription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Understand Doctor Before You Regret?",
      decsription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "What types of systems do you support?",
      decsription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "How Can I Contact You?",
      decsription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  const AccordionData2 = [
    {
      title: "What’s a payment statement?",
      decsription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "How Can I Contact You?",
      decsription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "How Doctor Can Ease Your Pain?",
      decsription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "We Teach You How To Feel Better?",
      decsription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  return (
    <Container sx={{ display: "flex", flexDirection: "row", gap: 5, py: 10 }}>
      <Box sx={{ width: "50%" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {AccordionData1.map((data, index) => {
            return (
              <Accordion
                key={index}
                defaultExpanded={index === 0} // Sadece ilk Accordion açık olacak
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "var(--btn-color)", // Varsayılan arka plan rengi
                  "&.Mui-expanded": {
                    backgroundColor: "var(--orange-color)",
                  }, // Açıkken arka plan rengi
                  transition: "background-color 0.5s ease-in-out",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />} // Expand icon rengi beyaz
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <Typography
                    component="span"
                    sx={{
                      color: "#fff",
                      fontWeight: "600",
                      padding: "2px 2px",
                      transition: "all .5s",
                    }}
                  >
                    {data.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#eeeefa" }}>
                  {data.decsription}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Box>

      <Box sx={{ width: "50%" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {AccordionData2.map((data, index) => {
            return (
              <Accordion
                key={index}
                defaultExpanded={index === AccordionData2.length - 1} // Sadece ilk Accordion açık olacak
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "var(--btn-color)", // Varsayılan arka plan rengi
                  "&.Mui-expanded": {
                    backgroundColor: "var(--orange-color)",
                  }, // Açıkken arka plan rengi
                  transition: "background-color 0.5s ease-in-out",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />} // Expand icon rengi beyaz
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <Typography
                    component="span"
                    sx={{
                      color: "#fff",
                      fontWeight: "600",
                      padding: "2px 2px",
                      transition: "all .5s",
                    }}
                  >
                    {data.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#eeeefa" }}>
                  {data.decsription}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
}
