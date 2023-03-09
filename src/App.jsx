import Carousel from './components/Carousel';

const DATA = [
  {
    bh: "linear-gradient(to top, #f46b45, #eea849)", ah: "linear-gradient(to right, #eea849, #f46b45"
  },
  {
    bh: "linear-gradient(to top, #4568dc, #b06ab3)", ah: "linear-gradient(to right, #b06ab3, #4568dc)"
  },
  {
    bh: "linear-gradient(90deg, #52c234, #54c77a)", ah: "linear-gradient(360deg, #54c77a, #52c234)"
  },
  {
    bh: "linear-gradient(to top, #37314f, #928dab)", ah: "linear-gradient(to right, #928dab, #37314f)"
  },
  {
    bh: "linear-gradient(to top, #1a2980, #26d0ce)", ah: "linear-gradient(to right, #26d0ce, #1a2980)"
  },
  {
    bh: "linear-gradient(to top, #cc2b5e, #753a88)", ah: "linear-gradient(to right, #753a88, #cc2b5e)"
  },
  {
    bh: "linear-gradient(-225deg, #7de2fc 0%, #b9b6e5 100%)", ah: "linear-gradient(225deg, #7de2fc 0%, #b9b6e5 100%)"
  },
  {
    bh: "linear-gradient(-225deg, #5271c4 0%, #b19fff 48%, #eca1fe 100%)", ah: "linear-gradient(225deg, #5271c4 0%, #b19fff 48%, #eca1fe 100%)"
  },
  {
    bh: "linear-gradient(-225deg, #ffe29f 0%, #ffa99f 48%, #ff719a 100%)", ah: ""
  },
  {
    bh: "linear-gradient(-60deg, #16a085 0%, #f4d03f 100%)", ah: "linear-gradient(60deg, #16a085 0%, #f4d03f 100%)"
  },
  {
    bh: "linear-gradient(-60deg, #ff5858 0%, #f09819 100%)", ah: "linear-gradient(60deg, #ff5858 0%, #f09819 100%)"
  },
  {
    bh: "linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)", ah: "linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)"
  },
  {
    bh: "linear-gradient(60deg, #29323c 0%, #485563 100%)", ah: "linear-gradient(-60deg, #29323c 0%, #485563 100%)"
  },
  {
    bh: "linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%),linear-gradient(to top, rgba(255, 255, 255, 0.40) 0%, rgba(0, 0, 0, 0.25) 200%)", ah: "linear-gradient(to top, #323232 0%, #3F3F3F 40%, #1C1C1C 150%),linear-gradient(to left, rgba(255, 255, 255, 0.40) 0%, rgba(0, 0, 0, 0.25) 200%)"
  },
  {
    bh: "linear-gradient(to right, #bdc3c7 0%, #2c3e50 99%)", ah: "linear-gradient(to top, #bdc3c7 0%, #2c3e50 99%)"
  },
  {
    bh: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)", ah: "linear-gradient(to top, #ffecd2 0%, #fcb69f 100%)"
  }
]

function App() {
  return (
    <>
      <Carousel DATA={DATA} />
    </>
  );
}

export default App;
