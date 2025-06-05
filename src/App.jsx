import { Route, Routes } from "react-router";
import "./App.scss";
import Weather from "./components/Weather/Weather";
import RootLayout from "./layout/RootLayout";
import Home from "./components/Home/Home";
import ToDoForm from "./components/ToDo/ToDoForm";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/todo" element={<ToDoForm />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="*" element={<p>404</p>} />
      </Route>
    </Routes>
  );
}

export default App;
