import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button, Stack } from "@mui/material";

export default function ServiceRightSide() {
  const buttonsData = [
    "Engine Diagnostics",
    "Lube Oil and Filters",
    "Belts and Hoses",
    "Air Conditioning",
    "Brake Repair",
    "Tire and Wheel Services",
  ];

  return (
    <Stack sx={{ width:'100%'}}>
      <Stack sx={{ width: "100%", display: "flex",justifyContent:'center', gap: 1 }}>
        {buttonsData.map((data, index) => (
          <Button
            key={index}
            variant="contained"
            className={index === 0 ? "hovered" : ""} // İlk butona özel sınıf ekleniyor
            sx={{
              justifyContent: "space-between",
              backgroundColor: "#565acf",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "18px",
              p: "12px 15px",
              fontWeight: 500,
              textTransform: "capitalize",
              transition: "all 0.6s",
              zIndex: 1,
              "&:hover, &.hovered": {
                // Hem hover durumunda hem de .hovered sınıfı varsa
                backgroundColor: "var(--orange-color)",
              },
              "&:hover .icon, &.hovered .icon": {
                // İlk butondaki ikon hover efektini alsın
                color: "var(--orange-color)",
              },
            }}
          >
            {data}
            <ChevronRightIcon
              className="icon"
              sx={{
                p: "5px",
                fontSize: "20px",
                background: "#fff",
                borderRadius: "10px",
                color: "#565acf",
                display: "inline-block",
                height: "38px",
                textAlign: "center",
                width: "38px",
              }}
            />
          </Button>
        ))}
      </Stack>
    </Stack>
  );
}
