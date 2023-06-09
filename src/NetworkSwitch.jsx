import React from "react";
import { Dialog, DialogContent, Box, Slide } from "@mui/material";
import { withStyles } from "@mui/styles";
import { ConnectWallect } from "./Components/SmallComponent/ConnectWallect";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledModal = withStyles(() => ({
  root: {
    "& .MuiDialog-root": {
      zIndex: "1301 !important",
    },
    "&.MuiDialog-container": {
      overflowY: "hidden !important",
    },
    "& .MuiDialog-paperScrollPaper": {
      backgroundColor: "#222222 !important",
      height: "auto",
      boxShadow: "#222222 0px 0px 8px 1px",
      border: "4px solid #222222",
      borderRadius: "16px",
    },
    "& .dialoge__content__section": {
      background: "#222222 !important",
      // borderRadius: 5,
    },
    "& .MuiDialogContent-root": {
      paddingTop: "20px",
      paddingBottom: "20px",
    },
  },
}))(Dialog);

function NetworkChange({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };
  const networkHandler = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        // params: [{ chainId: "0x38" }], //BSC Mainnet
        params: [{ chainId: "0x5" }], //ARB Mainnet
      });
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="modal__main__container">
        <StyledModal
          open={open}
          keepMounted
          TransitionComponent={Transition}
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent className="dialoge__content__section">
            <Box
              borderRadius="100px"
              display="flex"
              alignItems="center"
              flexDirection="column"
            >
              <Box
                borderBottom="5px solid red"
                color="red"
                fontSize="30px"
                fontFamily="Regular"
              >
                Error!
              </Box>
              <Box fontFamily="Regular" component="h3" color="#ffffff" mt={2}>
                You are on wrong network. Please, switch your network.
              </Box>
              <Box align="center" mt={2}>
                <ConnectWallect
                  text="Switch Network"
                  onClickFun={networkHandler}
                />
              </Box>
            </Box>
          </DialogContent>
        </StyledModal>
      </div>
    </div>
  );
}

export default NetworkChange;
