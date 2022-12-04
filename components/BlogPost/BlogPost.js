import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Snackbar } from "@mui/material";

const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BlogPost(post) {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleShareButtonClick = () => {
    console.log(post);
    const url = window.location.toString() + "/article/" + post.url;
    setOpen(true);
    navigator.clipboard.writeText(url);
  };

  return (
    <>
      <Snackbar
        message={"Lenke kopiert 🔗"}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={1000}
        severity="success"
        onClose={() => setOpen(false)}
        open={open}
      />

      <Card sx={{ width: "35rem" }}>

        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                A
            </Avatar>
          }

          title={post.title}
          subheader={post.timestamp}
        />
        <CardMedia
          component="img"
          height="194"
          image={post?.img?.location}
          alt={post?.img?.altText}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.subTitle}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={handleShareButtonClick}
            aria-label="share">
            <ShareIcon/>
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              <span dangerouslySetInnerHTML={{ __html: post.content }}></span>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>

  );
}
