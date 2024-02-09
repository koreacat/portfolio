'use client'
import { useState } from "react"
import { Transition } from "@/components/TransitionScene"
import Scene1 from "./Scene1"
import Scene2 from "./Scene2"
import Scene3 from "./Scene3"
import PC from "./PC"
import { TransitionTextEnum } from "@/components/TransitionText"

const Index = () => {
  const [transitionIndex, setTransitionIndex] = useState<number>(0);
  const [open, setOpen] = useState(true);

  const handleTransitionStart = () => {
    setTransitionIndex(null);
  }

  const handleTransitionEnd = (index: number) => {
    setTransitionIndex(index);
    if (index === 0) return setOpen(true);
    if (index === 2) return setOpen(false);
  }

  const getTransitionType = (index: number) => {
    return index === transitionIndex ? TransitionTextEnum["fade-in"] : TransitionTextEnum["fade-out"];
  }

  return (
    <>
      <PC open={open} />

      <Transition onTransitionStart={handleTransitionStart} onTransitionEnd={handleTransitionEnd}>
        <Transition.Scene className="bg-white">
          <Scene1 transitionType={getTransitionType(0)} />
        </Transition.Scene>
        <Transition.Scene className="bg-my-bg-color">
          <Scene2 transitionType={getTransitionType(1)} />
        </Transition.Scene>
        <Transition.Scene className={open ? "bg-my-bg-color" : "transtarent"}>
          <Scene3 transitionType={getTransitionType(2)} />
        </Transition.Scene>
      </Transition>
    </>
  )
}

export default Index