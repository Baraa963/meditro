import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import BlueLineImg from "../../../assets/footerBlueLine.png";
import PostImg1 from "../../../assets/newsImg1.jpg";
import PostImg2 from "../../../assets/newsImg2.jpg";
import PostImg3 from "../../../assets/newsImg3.jpg";
import PostImg4 from "../../../assets/newsImg4.jpg";
import PostImg5 from "../../../assets/newsImg5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
export default function BlogDetailsRightSide() {
  const RecentPostsData = [
    {
      img: PostImg1,
      title: "Precious Tips To Help You Get Better.",
      date: "21 July 2021",
    },
    {
      img: PostImg2,
      title: "Ten Doubts You Should Clarify About.",
      date: "20 July 2021",
    },
    {
      img: PostImg3,
      title: "The 10 Steps Needed For Putting.",
      date: "19 July 2021",
    },
  ];
  const OurGalleryData = [PostImg1, PostImg2, PostImg3, PostImg4, PostImg5];
  const TagsData = [
    "Improvement",
    "Health",
    "Life",
    "Covid",
    "Healthy",
    "Growth",
    "Education",
    "Manage",
    "General",
  ];
  return (
    <>
      {/*Recent Posts Box */}
      <Box
        sx={{
          width: {md:'80%',lg:"100%"},
          height: "auto",
          p: 3,
          backgroundColor: "#fff",
          border: "1px solid rgba(86, 90, 207, .2)",
          borderBottom: "3px solid #565acf",
          borderRadius: "6px 6px 4px 4px",
          boxShadow: "0 10px 30px 0 rgba(0, 0, 0, .06)",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "24px",
              color: "rgb(31, 34, 120)",
              lineHeight: "1.3",
              fontWeight: "600",
              mb: "10px",
            }}
          >
            Recent Posts
          </Typography>
          <Box
            component="img"
            src={BlueLineImg}
            sx={{ width: "120px", height: "6px", mb: "30px" }}
          />
        </Box>

        <Stack sx={{ width: "100%", gap: 2 }}>
          {RecentPostsData.map((data, index) => {
            return (
              <>
                <Box
                  key={index}
                  sx={{ width: "100%", display: "flex", gap: 2 }}
                >
                  <Box
                    component="img"
                    src={data.img}
                    sx={{ width: "100px", height: "80px", borderRadius: "8px" }}
                  />
                  <Box sx={{ width: "60%" }}>
                    <Typography
                      sx={{
                        width: "100%",
                        fontSize: "16px",
                        color: "rgb(31, 34, 120)",
                        lineHeight: "1.3",
                        fontWeight: "600",
                        mb: "10px",
                      }}
                    >
                      {data.title}
                    </Typography>

                    <Typography sx={{ color: "#f17732", textAlign: "start" }}>
                      <FontAwesomeIcon
                        style={{ marginRight: "5px" }}
                        icon={faCalendarDays}
                      />
                      {data.date}
                    </Typography>
                  </Box>
                </Box>
                <Divider
                  sx={{
                    borderColor:
                      index === RecentPostsData.length - 1
                        ? "white"
                        : "#0000006e",
                  }}
                />
              </>
            );
          })}
        </Stack>
      </Box>

      {/*Our Gallery Box */}
      <Box
        sx={{
          width: {md:'80%',lg:"100%"},
          height: "auto",
          p: 3,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 0.5,
          backgroundColor: "#fff",
          border: "1px solid rgba(86, 90, 207, .2)",
          borderBottom: "3px solid #565acf",
          borderRadius: "6px 6px 4px 4px",
          boxShadow: "0 10px 30px 0 rgba(0, 0, 0, .06)",
          transition: "all .5s",
        }}
      >
        {OurGalleryData.map((data, index) => {
          return (
            <Box
              key={index}
              component="img"
              src={data}
              sx={{
                transition: "all .5s",
                width: "32.5%",
                "&:hover": {
                  transform: "scale(0.9)",
                  opacity: 0.8,
                },
              }}
            />
          );
        })}
      </Box>

      {/*Tags Box */}
      <Box
        sx={{
          width: {md:'80%',lg:"100%"},
          height: "auto",
          p: 3,
          backgroundColor: "#fff",
          border: "1px solid rgba(86, 90, 207, .2)",
          borderBottom: "3px solid #565acf",
          borderRadius: "6px 6px 4px 4px",
          boxShadow: "0 10px 30px 0 rgba(0, 0, 0, .06)",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "24px",
              color: "rgb(31, 34, 120)",
              lineHeight: "1.3",
              fontWeight: "600",
              mb: "10px",
            }}
          >
            Tags
          </Typography>
          <Box
            component="img"
            src={BlueLineImg}
            sx={{ width: "120px", height: "6px", mb: "30px" }}
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 0.3,
          }}
        >
          {TagsData.map((data, index) => {
            return (
              <Button
                key={index}
                sx={{
                  borderRadius: "8px",
                  color: "#fff",
                  fontWeight: "600",
                  margin: "0 1px 6px",
                  padding: 1.3,
                  transition: "all .5s",
                  width: "fit-content",
                  fontSize: "12px",
                  backgroundColor: "var(--btn-color)",
                  textTransform: "capitalize",

                  "&:hover": {
                    backgroundColor: "var(--orange-color)",
                    opacity: "0.9",
                    transition: ".3s ease-in-out",
                  },
                }}
                variant="contained"
              >
                {data}
              </Button>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
