import { BrowserRouter } from "react-router-dom";
import { Provider} from "react-redux";
import store from "./redux/store/store";
import RouterContainer from "./routes";

function App() {
  return <Provider store={store}>
    <BrowserRouter>
      <RouterContainer />
    </BrowserRouter>
  </Provider>
}
export default App;
