import { Routes, Route } from "react-router-dom";
import { AppRoute } from "./libs/enums/enums";
import { Header } from "./libs/components/components";
import { Feed } from "./pages/feed/feed";
import { Details } from "./pages/details/details";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={AppRoute.ROOT} element={<Feed />} />
        <Route path={`${AppRoute.DETAILS}/:id`} element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
