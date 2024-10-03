import { useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useEthersSigner } from "./utils/ethers";
import { contractAddress, ABI } from "./utils/constant";
import { ethers } from 'ethers';
import char1 from "./assets/characters/1.jpeg"
import char2 from "./assets/characters/2.jpeg"
import char3 from "./assets/characters/3.jpeg"
import char4 from "./assets/characters/4.jpeg"
import char5 from "./assets/characters/5.jpeg"
import char6 from "./assets/characters/6.jpeg"
import char7 from "./assets/characters/7.jpeg"
import char8 from "./assets/characters/8.jpeg"
import char9 from "./assets/characters/9.jpg"
import char10 from "./assets/characters/10.jpg"
import char11 from "./assets/characters/11.jpeg"
import char12 from "./assets/characters/12.jpeg"
function App() {

  const signer = useEthersSigner();
  const mintNft = async (e) => {
    const idx = e.target.getAttribute("data-index");
    // console.log(nftmetadata[idx]);
    const contract = new ethers.Contract(
      contractAddress,
      ABI,
      signer
    );
    const transaction = await contract.mint();
      // const transaction = await contract.tokenURI(4);
      // console.log(transaction);
  }
  return (
    <div className="container">
      <div class="row">
            <h4 class="mintBtn" onClick={mintNft}>MINT</h4>
            <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              authenticationStatus,
              mounted,
            }) => {
              // Note: If your app doesn't use authentication, you
              // can remove all 'authenticationStatus' checks
              const ready = mounted && authenticationStatus !== "loading";
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === "authenticated");

              return (
                <div
                  {...(!ready && {
                    "aria-hidden": true,
                    style: {
                      opacity: 0,
                      pointerEvents: "none",
                      userSelect: "none",
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <h4 onClick={openConnectModal}>
                          {/* <RiWallet3Fill /> */}
                          Connect
                        </h4>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <h4 onClick={openChainModal} type="button">
                          Wrong network
                        </h4>
                      );
                    }

                    return (
                      <h4 onClick={openAccountModal}>
                        {/* <RiWallet3Fill /> */}
                        Disconnect
                      </h4>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom> 
        </div>
        <div className="bgCover">
<img src={char1} alt="char1" />
<img src={char2} alt="char2" />
<img src={char3} alt="char3" />
<img src={char4} alt="char4" />
<img src={char5} alt="char5" />
<img src={char6} alt="char6" />
<img src={char8} alt="char8" />
<img src={char12} alt="char12" />
<img src={char7} alt="char7" />
<img src={char9} alt="char9" />
<img src={char10} alt="char10" />
<img src={char2} alt="char2" />
</div>
    </div>
  )
}

export default App
