import {
  Box,
  Button,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

import BlogDetailsImg1 from "../../../assets/blogDeatils1.jpg";
import BlogDetailsImg2 from "../../../assets/doc3.jpg";
import BlogDetailsImg3 from "../../../assets/BlogDetailsImg3.jpg";
import BlogDetailsImg4 from "../../../assets/BlogDetailsImg4.jpg";
import qouteImg from "../../../assets/qoute.png";
import docImg from "../../../assets/doc2.jpg";
import docImg1 from "../../../assets/doc1.jpg";
import docImg2 from "../../../assets/doc3.jpg";
import docImg3 from "../../../assets/doc4.jpg";
import docImg4 from "../../../assets/doc5.jpg";
import BlueLineImg from "../../../assets/footerBlueLine.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function BlogDetailsLeftSide() {
  const ListItem1 = ["Health", "Growth", "Life"];
  const ListItem2 = [faFacebook, faInstagram, faLinkedin, faTwitter];
  const conmmentsData = [
    { name: "George", img: docImg1, date: "May 09, 2021 at 10:33 am" },
    { name: "Falikaz", img: docImg2, date: "May 11, 2021 at 90:04 am" },
    { name: "Sonar", img: docImg3, date: "May 14, 2021 at 00:45 am" },
    { name: "Michel", img: docImg4, date: "May 19, 2021 at 19:22 am" },
  ];

  return (
    <>
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

      {/*Orange Card */}
      <Box
        sx={{
          width: "100%",
          background: "#f17732",
          borderRadius: "10px",
          boxShadow: "0 7px 50px -20px #f17732",
          clear: "both",
          color: "#fff",
          lineHeight: 1.7,
          padding: '25px',
          display:'flex',
          flexDirection:'row',
          gap:2
          
          // "&::before": {
          //   backgroundImage: `url(${qouteImg})`,
          //   backgroundSize: "cover",
          //   content: '""',
          //   // height: "90px",
          //   width: "90px",
          //   position: "absolute",
          //   top: "30px",
          //   left: "30px",
          // },
        }}
      >
       <Box
        component="img"
        src={qouteImg}
        sx={{
          borderStyle: "none",
          width: {xs:'25px',sm:'50px',md:'75px',lg:"100px"},
          height:{xs:'25px',sm:'50px',md:'75px',lg:"100px"},
        }}
      />
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

      {/*Social media Lists */}
      <Box>
        <Divider sx={{ border: 1 }} />
        <Box>
          <List
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "space-between",
              },
            }}
          >
            <List
              sx={{
                width: { xs: "100%", sm: "300px", md: "300px" },
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Share:</Typography>
              {ListItem1.map((item, index) => {
                return (
                  <ListItemButton
                    key={index}
                    sx={{
                      width: "40%",
                      color: "var(--btn-color)",
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
                width: { xs: "100%", sm: "300px", md: "300px" },
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
                        color: "#fff",
                      }}
                    />
                  </ListItemButton>
                );
              })}
            </List>
          </List>
        </Box>

        <Divider sx={{ border: 1 }} />
      </Box>

      {/*Sonar Z. Moyna Card */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: 3,
          width: "100%",
          backgroundColor: "#fff",
          border: "1px solid rgba(86, 90, 207, .2)",
          borderBottom: "3px solid #565acf",
          borderRadius: "6px 6px 4px 4px",
          boxShadow: " 0 10px 30px 0 rgba(0, 0, 0, .06)",
          marginBottom: "50px",
          padding: "30px",
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={docImg}
          sx={{ width: "100px", height: "100px", borderRadius: "8px" }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography
            sx={{
              fontSize: "22px",
              color: "var(--main-color)",
              lineHeight: 1.3,
              fontWeight: "600",
            }}
          >
            Sonar Z. Moyna
          </Typography>

          <Typography
            sx={{
              lineHeight: 1.3,
              fontWeight: "500",
            }}
          >
            Aenean sollicitudin, lorem quis biber idum auctor anisi elit
            consequat happ quam vel enim augue.
          </Typography>

          <List
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "230px",
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
                      color: "#fff",
                    }}
                  />
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </Box>

      {/* Comments Text */}
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
          {conmmentsData.length + " Comments"}
        </Typography>
        <Box
          component="img"
          src={BlueLineImg}
          sx={{ width: "120px", height: "6px", mb: "30px" }}
        />
      </Box>

      {/* Comments Cards  */}
      {conmmentsData.map((data, index) => {
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              alignItems: "start",
              justifyContent: "start",
              gap: 3,
              width: "100%",
              backgroundColor: "#fff",
              border: "1px solid rgba(86, 90, 207, .2)",
              borderBottom: "3px solid #565acf",
              borderRadius: "6px 6px 4px 4px",
              boxShadow: " 0 10px 30px 0 rgba(0, 0, 0, .06)",
              marginBottom: "50px",
              padding: "30px",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={data.img}
              sx={{ width: "100px", height: "100px", borderRadius: "8px" }}
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                sx={{
                  fontSize: "22px",
                  color: "var(--main-color)",
                  lineHeight: 1.3,
                  fontWeight: "600",
                }}
              >
                {data.name}
              </Typography>

              <Typography
                sx={{
                  fontSize: "15px",
                  color: "var(--btn-color)",
                  lineHeight: 1.3,
                  fontWeight: "600",
                }}
              >
                {data.date}
              </Typography>

              <Typography
                sx={{
                  lineHeight: 1.3,
                  fontWeight: "500",
                }}
              >
                Aenean sollicitudin, lorem quis biber idum auctor anisi elit
                consequat happ quam vel enim augue.
              </Typography>

              <Button
                sx={{
                  width: "75px",
                  background: "var(--btn-color)",
                  borderRadius: "8px",
                  color: "#fff",
                  display: "inline-block",
                  fontSize: "12px",
                  fontWeight: "600",
                  padding: "6px 14px",
                  textTransform: "uppercase",
                }}
              >
                Replay
              </Button>
            </Box>
          </Box>
        );
      })}

      {/*Leave a Reply section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          p: 5,
          border: "1px solid rgba(86, 90, 207, .2)",
          borderBottom: "3px solid #565acf",
          borderRadius: "6px 6px 4px 4px",
          boxShadow: " 0 10px 30px 0 rgba(0, 0, 0, .06)",
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
            Leave a Reply
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
            gap: 3,
          }}
        >
          <TextField
            sx={{ width: "50%" }}
            id="outlined-basic"
            label="Author"
            variant="outlined"
          />
          <TextField
            sx={{ width: "50%" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
        </Box>

        <TextField
          id="outlined-multiline-static"
          label="Comment"
          multiline
          rows={4}
          placeholder="Write a comment"
        />

        <Button
          sx={{
            width: "75px",
            height: "40px",
            background: "var(--btn-color)",
            borderRadius: "8px",
            color: "#fff",
            display: "inline-block",
            fontSize: "12px",
            fontWeight: "600",
            padding: "6px 14px",
            textTransform: "uppercase",
          }}
        >
          Send
        </Button>
      </Box>
    </>
  );
}
