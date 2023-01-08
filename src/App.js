import "./App.css";
import { WagmiConfig, createClient } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from "connectkit";
import { Chat } from "@pushprotocol/uiweb";
import { useAccount } from "wagmi";

const client = createClient(
  getDefaultClient({
    appName: "Push Protocol Chat",
  })
);

const App = () => {
  const { address } = useAccount();
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <Chat
          account={address}
          supportAddress="0xfC001B20Db6195b148cfc4F7685091931D93cD93"
          apiKey={process.env.REACT_APP_PUSH_API_KEY}
          env="staging"
        />
        <div className="App">
          <ConnectKitButton />
        </div>
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

export default App;
