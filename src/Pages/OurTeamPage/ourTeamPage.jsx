/* eslint-disable react-hooks/rules-of-hooks */
import OurTeamHeader from "../../Components/Header/header";
import DoctorCards from "../../Components/AboutUs/OurDoctor/DoctorCards/doctorCards";
import Footer from "../../Components/Footer/footer";
import { useEffect } from "react";

import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import doctor1 from "../../assets/doc4.jpg";
import doctor2 from "../../assets/doc2.jpg";
import doctor3 from "../../assets/doc5.jpg";
import doctor4 from "../../assets/doc1.jpg";
import doctor5 from "../../assets/doc3.jpg";
import doctor6 from "../../assets/doc6.jpg";
export default function ourTeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cardsData = [
    {
      DocImg: doctor1,
      DocName: "Dr. Addition Smith",
      specialty: "Dentist",
      icons: [faFacebook, faXTwitter, faInstagram],
    },
    {
      DocImg: doctor2,
      DocName: "Dr. Sonar Moyna",
      specialty: "Chiropractor",
      icons: [faFacebook, faXTwitter, faInstagram],
    },
    {
      DocImg: doctor3,
      DocName: "Dr. David Benjamin",
      specialty: "Cardiologist",
      icons: [faFacebook, faXTwitter, faInstagram],
    },
    {
      DocImg: doctor4,
      DocName: "Dr. John deo",
      specialty: "Cardiologist",
      icons: [faFacebook, faXTwitter, faInstagram],
    },
    {
      DocImg: doctor5,
      DocName: "Peter Packer",
      specialty: "Dentist",
      icons: [faFacebook, faXTwitter, faInstagram],
    },
    {
      DocImg: doctor6,
      DocName: "Dr. Mahfuz Riad",
      specialty: "Chiropractor",
      icons: [faFacebook, faXTwitter, faInstagram],
    },
  ];
  return (
    <>
      <OurTeamHeader ComponentName="Our Team" Path="Our-team" />
      <DoctorCards cardsData={cardsData} />
      <Footer />
    </>
  );
}
