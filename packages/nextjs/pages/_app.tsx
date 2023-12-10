import { useEffect } from "react";
import type { AppProps } from "next/app";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
import { WagmiConfig } from "wagmi";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import deployedContracts from "~~/contracts/deployedContracts";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
import { appChains } from "~~/services/web3/wagmiConnectors";
import "~~/styles/globals.css";

const ScaffoldEthApp = ({ Component, pageProps }: AppProps) => {
  const price = useNativeCurrencyPrice();
  const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);
  const setDataSets = useGlobalState(state => state.setDataSets);
  const targetNetwork = useGlobalState(state => state.targetNetwork);

  const data = useScaffoldContractRead({ contractName: "DeSetsFactory", functionName: "getDataSetNFTs" });

  function getDeSetsFactoryContract(chainId: any) {
    return deployedContracts[chainId as keyof typeof deployedContracts].DeSetsFactory;
  }

  useEffect(() => {
    const getDatasets = async () => {
      console.log("targetNetwork", targetNetwork.name, targetNetwork.id);
      const result = getDeSetsFactoryContract(targetNetwork.id);
      console.log("DeSetsFactory Contract", result);

      setDataSets(data.data);
    };
    getDatasets();
  }, [data]);

  useEffect(() => {
    if (price > 0) {
      setNativeCurrencyPrice(price);
    }
  }, [setNativeCurrencyPrice, price]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* <Header /> */}
        <main className="relative flex flex-col flex-1">
          <Component {...pageProps} />
        </main>
        {/* <Footer /> */}
      </div>
      <Toaster />
    </>
  );
};

const ScaffoldEthAppWithProviders = (props: AppProps) => {
  // This variable is required for initial client side rendering of correct theme for RainbowKit

  return (
    <WagmiConfig config={wagmiConfig}>
      <NextNProgress />
      <RainbowKitProvider chains={appChains.chains} avatar={BlockieAvatar} theme={lightTheme()}>
        <ScaffoldEthApp {...props} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default ScaffoldEthAppWithProviders;
