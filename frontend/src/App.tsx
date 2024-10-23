import { Routes, Route } from "react-router-dom";
import { AppRoute } from "./enums/enums";
import { Feed } from "./pages/feed/feed";
import { Details } from "./pages/details/details";

function App() {
  return (
    <>
      <header>Hello</header>
      <Routes>
        <Route path={AppRoute.ROOT} element={<Feed />} />
        <Route path={`${AppRoute.DETAILS}/:id`} element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
