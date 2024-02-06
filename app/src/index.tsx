'use client';
import {Transition} from "./TransitionScene";

const Index = () => {
  return (
    <Transition>
      <Transition.Scene className="bg-my-bg-color"/>
      <Transition.Scene className="bg-my-bg-color"/>
      <Transition.Scene className="bg-my-bg-color"/>
    </Transition>
  );
};

export default Index;