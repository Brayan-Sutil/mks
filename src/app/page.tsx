import Wapper from "./components/Wapper/Wapper";
import "../app/global.css";
import { MksProvider } from "./Context/MksProvider";

export default function Home() {
  return (
    <MksProvider>
      <Wapper />
    </MksProvider>
  );
}
