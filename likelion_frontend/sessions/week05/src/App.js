import "./App.css";
import InlineButton from "./InlineButton";
import ExternalButton from "./ExternalButton";
import Logo from "./Logo";
import LikeButton from "./LikeButton";
import FunnyButton from "./FunnyButton";

function App() {
  return (
    <>
      <Logo />
      {/* <h3>멋사 프론트 5주차 세미나</h3>
      <InlineButton />
      <ExternalButton /> */}
      <h3>오늘 5주차 세미나 내용 ㅈㄱㄴ</h3>
      <p>저는 비록 5주차 세미나 못 갔지만...자료 퀄리티 머선일 굿굿굿</p>
      <LikeButton />
      <FunnyButton />
      <hr />
      <h4>댓글</h4>
      <small>익명 1 완전 재밌을 것 같아요</small>
    </>
  );
}

export default App;
