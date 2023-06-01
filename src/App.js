import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { Parent } from "./pages/Parent";
import { SolidOut } from "./pages/SolidOut";
import { Dashboard } from "./pages/Dashboard";
import Web3 from "web3";
import { AppContext } from "./utils";
import { useContext, useEffect, useState } from "react";
import { usePresaleContract } from "./ConnectivityAssets/hooks";

const web3 = new Web3(
  Web3.givenProvider
    ? Web3.givenProvider
    : "https://mainnet.infura.io/v3/36fc2665f5504bc18c3b7f9fab0e0c46"
);
function App() {
  const [open, setOpen] = useState(false);
  const { account, connect, signer } = useContext(AppContext);
  const presaleContract = usePresaleContract(signer);
  console.log(presaleContract, "presaleContract");
  useEffect(() => {
    let chain = async () => {
      const chainid = await web3.eth.getChainId();
      if (chainid !== 1) {
        setOpen(true);
      }
    };
    chain();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl mx-auto bg-[#000000] min-h-screen text-[#fff]">
        <Routes>
          <Route path="/" element={<Parent />}>
            <Route index element={<LandingPage />} />
            <Route path="/solidout" element={<SolidOut />} />
            <Route path="dashboard" element={<Dashboard />} />
            {/* <Route path="pricing" element={<Pricing />} />
            <Route path="about" element={<AboutUs />} /> */}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
