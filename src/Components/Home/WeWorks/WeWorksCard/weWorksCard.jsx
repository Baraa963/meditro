import { Box, Button, Typography } from "@mui/material";

export default function weWorksCard({ number, title, description }) {
  return (
    <Box
      className="border"
      sx={{
        width: "290px",
        height: "370px",
        backgroundColor: "#fff",
        borderRadius: "20px",
        boxShadow: "0 10px 60px 0 rgba(31, 34, 120, .1)",
        overflow: "hidden",
        padding: "40px 30px",
        position: "relative",
        transition: "all 0.5s",
        mb:{xs:number == '02'? '40px':'0px',sm:number == '02'? '0px':'0px'}, 
        mt:{xs:number == '02'? '40px':'0px',sm:number == '02'? '0px':'40px'}, 
        zIndex: 1,
        "&::after": {
          content: '""',
          backgroundColor: "#f17732",
          height: number === "02" ? "100%" : 0,
          position: "absolute",
          right: 0,
          bottom: 0,
          transformOrigin: "top",
          transition: "all 0.5s",
          width: "100%",
          zIndex: -1,
        },
        "&:hover::after": {
          height: "100%",
        },
        "&:hover .text": {
          color: "#fff !important",
        },
        "&:hover .big-text": {
          WebkitTextStroke: "2px #ffffff",
        },
        "&:hover .btn-text": {
          backgroundColor: "#ffffff",
          color: "var(--orange-color)",
          border: "1px solid var(--orange-color)",
        },
      }}
    >
      <Typography
        className="big-text"
        sx={{
          WebkitTextStroke: number == '02' ?"2px #ffffff" :'2px #ffe3d3' ,
          color: "transparent",
          fontSize: "80px",
          fontWeight: 900,
          lineHeight: "80px",
          mb: "30px",
          textShadow: "0 10px 0 #ffe3d3",
          transition: "all 0.5s",
          zIndex: 9,
        }}
      >
        {number}
      </Typography>

      <Typography
        variant="h6"
        className="text"
        sx={{
          color: number == "02" ? "#fff" : "var(--orange-color)",
          transition: "all 0.5s",
          mb: "10px",
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="h6"
        className= 'text'
        sx={{
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "24px",
          marginBottom: "30px",
          transition: "all 0.5s",
          color: number == '02' ? '#fff' : '#000'
        }}
      >
        {description}
      </Typography>

      <Button
        className= "btn-text"
        sx={{
          borderRadius: "8px",
          border: "1px solid #e1e2f6",
          fontSize: "14px",
          fontWeight: 600,
          lineHeight: "1.2",
          padding: "15px 30px",
          transition: "all 0.5s",
          backgroundColor: number === "02" ? '#fff' : "#e1e2f6",
          color: number === "02" ? "#f17732" : "#565acf",
          "&:hover": {
            backgroundColor: "#fff",
            borderColor: "#fff",
            color: "#f17732",
          },
        }}
      >
        View More
      </Button>
    </Box>
  );
}
