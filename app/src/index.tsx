'use client';
import Scene1 from "./Scene1";
import Scene2 from "./Scene2";
import Scene3 from "./Scene3";
import TransitionScene from "./TransitionScene";

const Index = () => {
  return (
    <TransitionScene>
      <Scene1 />
      <Scene2 />
      <Scene3 />
    </TransitionScene>
  );
};

export default Index;