import { useState } from "react";
import HorizontalSlideShow from "./HorizontalSlideShow";
import "./scss/Reset.scss";
import "./scss/Style.scss";

function App() {
  const [data, setData] = useState([
      {
        url: "https://images.unsplash.com/photo-1677697752978-2741925ea212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
        id: 1,
        desc: "My name is shadow-sm",
      },
      {
        url: "https://images.unsplash.com/photo-1679237349883-6ef8429caf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        id: 2,
        desc: "My name is shadow-md",
      },
      {
        url: "https://images.unsplash.com/photo-1679775912570-202aa997b326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        id: 3,
        desc: "My name is shadow-lg",
      },
      {
        url: "https://images.unsplash.com/photo-1679766826593-738e9b6338c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        id: 4,
        desc: "My name is shadow-xl",
      },
      {
        url: "https://images.unsplash.com/photo-1677697752978-2741925ea212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
        id: 5,
        desc: "My name is shadow-xxl",
      },
      {
        url: "https://images.unsplash.com/photo-1679499067430-106da3ba663a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        id: 6,
        desc: "My name is shadow-xxl",
      },
      {
        url: "https://images.unsplash.com/photo-1640700807522-66ec930dbaee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        id: 7,
        desc: "My name is shadow-xxl",
      },
      {
        url: "https://images.unsplash.com/photo-1622462281019-f6118fc42e46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        id: 8,
        desc: "My name is shadow-xxl",
      },
      {
        url: "https://images.unsplash.com/photo-1622462281019-f6118fc42e46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        id: 9,
        desc: "My name is shadow-xxl",
      },
      {
        url: "https://images.unsplash.com/photo-1677697752978-2741925ea212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
        id: 10,
        desc: "My name is shadow-xxl",
      },
    ]),
    [page, setPage] = useState(0),
    maxPage = Math.ceil(data.length / 5),
    onNextPage = () => setPage((page + 1) % maxPage),
    onPrevPage = () => setPage((page + 5 - 1) % maxPage);
  return (
    <div className="wrapper">
      <h1 className="wrapper__title">Slideshow</h1>
      <button className="wrapper__next" onClick={onNextPage}>Next</button>
      <HorizontalSlideShow data={data.slice(page * 5, 5 * (page + 1))} />
    </div>
  );
}

export default App;
