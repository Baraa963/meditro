import { Box } from "@mui/material";
import ServiceLeftSide from "./ServiceLeftSide/serviceLeftSide";
import ServiceRightSide from "./ServiceRightSide/serviceRightSide";
export default function serviceDetails() {
  return (
    <Box className="border" sx={{width:'100%',p:'40px 40px'}}>
      <ServiceLeftSide />
      <ServiceRightSide />
    </Box>
  );
}
