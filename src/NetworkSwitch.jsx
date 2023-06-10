import React from "react";
import { Dialog, DialogContent, Box, Slide } from "@mui/material";
import { withStyles } from "@mui/styles";
import { error } from "./images";
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
                display="flex"
                flexDirection="column"
                alignItems="center"
                width="40%"
              >
                <img width="100%" src={error} alt="" />
              </Box>
              <Box mt={2} color="#ffffff" fontSize="30px" fontFamily="Regular">
                Wrong Network
              </Box>
              <Box
                fontFamily="Regular"
                fontWeight="300"
                color="lightGray"
                mt={1}
              >
                You are on wrong network.
                <br /> Please, switch your network.
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt={3}
                width="100%"
              >
                <button
                  style={{ fontFamily: "Regular" }}
                  onClick={networkHandler}
                  className="text-[#fff] text-lg bg-[#7900EE] hover:bg-[#3A165D] w-full  px-6 py-2 rounded-3xl  font-normal text-center"
                >
                  SWITCH NETWORK
                </button>
              </Box>
            </Box>
          </DialogContent>
        </StyledModal>
      </div>
    </div>
  );
}

export default NetworkChange;
