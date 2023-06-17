import React from "react";

import {
  Box,
  Button,
  Dialog,
  Divider,
  IconButton,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   overFlowY: "scroll",
  backgroundColor: "#2A2A29",
  height: "100vh",
  //   borderRadius: "20px",
};

const FullScreenModal = ({ open, setOpen, toggelModel }) => {
  const handleClose = () => setOpen(false);
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ overflow: "scroll" }}
    >
      <Box p={2} sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button onClick={toggelModel}>
            <CloseIcon sx={{ color: "white", fontSize: "35px" }} />
          </Button>
        </Box>
        <Box>
          <video
            // autoPlay
            crossOrigin="anonymous"
            loop
            controls
            muted
            playsInline
            preload="auto"
            role="presentation"
            tabIndex="-1"
            style={{
              borderRadius: "10px",
              height: "88vh",
              objectFit: "cover",
              marginTop: "10px",
              width: "100vw",
              zIndex: 0,
              boxShadow: "rgb(0, 0, 0) 0px 0px 35px 48px inset",
            }}
            src="/sample.mp4"
          />
        </Box>
      </Box>
    </Dialog>
  );
};

export default FullScreenModal;
