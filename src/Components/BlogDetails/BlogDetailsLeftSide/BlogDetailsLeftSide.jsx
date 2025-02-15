import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import BlogDetailsImg1 from "../../../assets/blogDeatils1.jpg";
import BlogDetailsImg2 from "../../../assets/doc3.jpg";
import BlogDetailsImg3 from "../../../assets/BlogDetailsImg3.jpg";
import BlogDetailsImg4 from "../../../assets/BlogDetailsImg4.jpg";
import qouteImg from "../../../assets/qoute.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function BlogDetailsLeftSide() {
  const ListItem1 = ["Share:", "Health", "Growth", "Life"];
  const ListItem2 = [faFacebook, faInstagram, faLinkedin, faTwitter];

  return (
    <Stack className="border" sx={{ width: "68%", display: "flex", gap: 2.5 }}>
      <Box
        component="img"
        src={BlogDetailsImg1}
        sx={{
          borderStyle: "none",
          height: "auto",
          width: "100%",
          maxWidth: "100%",
          verticalAlign: "middle",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirectionL: "row",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={BlogDetailsImg2}
          sx={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            mr: "7px",
          }}
        />
        <Typography sx={{ color: "#f17732" }}>Sonar Monya</Typography>

        <Typography sx={{ color: "#f17732" }}>
          <FontAwesomeIcon
            style={{ marginRight: "5px", marginLeft: "15px" }}
            icon={faCalendarDays}
          />
          19 July 2021
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            color: "var(--main-color)",
            fontSize: "36px",
            wordSpacing: 1,
            fontWeight: "600",
            mb: 1,
          }}
        >
          Precious Tips To Help You Get Better.
        </Typography>

        <Typography
          sx={{
            fontSize: "18px",
            wordSpacing: 1,
            fontWeight: "400",
          }}
        >
          You just need to enter the keyword and select the keyword type to
          generate a list of 6 title ideas and suggestions. If you’re not
          satisfied with the results, you can always hit the refresh button to
          generate a new list of unique titles.
        </Typography>
      </Box>

      <Box
        sx={{
          background: "#f17732",
          borderRadius: "10px",
          boxShadow: "0 7px 50px -20px #f17732",
          clear: "both",
          color: "#fff",
          lineHeight: 1.7,
          margin: "25px 0",
          padding: "25px 30px 25px 140px",
          position: "relative",
          "&::before": {
            backgroundImage: `url(${qouteImg})`,
            backgroundSize: "cover",
            content: '""',
            height: "90px",
            width: "90px",
            position: "absolute",
            top: "30px",
            left: "30px",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "22px",
            color: "inherit",
            fontStyle: "italic",
            fontWeight: "600",
            mb: 0,
            position: "relative",
          }}
        >
          Once you’ve gotten all the titles and have chosen the best one, the
          next thing you need to do is to craft a magnetic content. Great
          content marketers excel at creating content.
        </Typography>
      </Box>

      <Typography
        sx={{
          fontSize: "18px",
          wordSpacing: 1,
          fontWeight: "400",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Typography>

      <Box
        sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}
      >
        <Box component="img" src={BlogDetailsImg3} sx={{ width: "49%" }} />
        <Box component="img" src={BlogDetailsImg4} sx={{ width: "49%" }} />
      </Box>

      <Typography
        sx={{
          fontSize: "18px",
          wordSpacing: 1,
          fontWeight: "400",
        }}
      >
        You just need to enter the keyword and select the keyword type to
        generate a list of 6 title ideas and suggestions. If you’re not
        satisfied with the results, you can always hit the refresh button to
        generate a new list of unique titles.
      </Typography>

      <Typography
        sx={{
          fontSize: "18px",
          wordSpacing: 1,
          fontWeight: "400",
        }}
      >
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
      </Typography>

      <Box>
        <Divider />
        <Box>
          <List
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <List sx={{ display: "flex", flexDirection: "row" }}>
              {ListItem1.map((item, index) => {
                return (
                  <ListItemButton
                    key={index}
                    sx={{
                      color: index === 0 ? "black" : "var(--btn-color)",
                      mr: "-14px",
                    }}
                  >
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{ sx: { fontWeight: "600" } }}
                    />
                  </ListItemButton>
                );
              })}
            </List>

            <List
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography>Tags:</Typography>
              {ListItem2.map((item, index) => {
                return (
                  <ListItemButton key={index} sx={{ p: 1 }}>
                    <FontAwesomeIcon
                      icon={item}
                      style={{
                        fontSize: "1.4rem",
                        marginRight: "10px",
                        backgroundColor: "var(--btn-color)",
                        padding: "8px",
                        borderRadius: "8px",
                        color:'#fff'
                      }}
                    />
                  </ListItemButton>
                );
              })}
            </List>
          </List>
        </Box>
        <Divider />
      </Box>
    </Stack>
  );
}
