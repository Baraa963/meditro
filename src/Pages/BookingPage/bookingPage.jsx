import Footer from "../../Components/Footer/footer";
import BookAppointment from "../../Components/Home/BookAppointment/bookAppointment";
import BookingHeader from "../../Components/Header/header";
import { Stack } from "@mui/material";
import { useEffect } from "react";

export default function booking() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Stack sx={{display:'flex',gap:10}}>
      <BookingHeader ComponentName="Booking" />
      <BookAppointment />
      <Footer />
    </Stack>
  );
}
