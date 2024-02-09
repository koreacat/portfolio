'use client'
import { useState } from "react"
import { Transition } from "@/components/TransitionScene"
import Scene1 from "./Scene1"
import Scene2 from "./Scene2"
import Scene3 from "./Scene3"
import PC from "./PC"

const Index = () => {
  const [index, setIndex] = useState<number>(0);
  const [open, setOpen] = useState(true);

  const handleTransitionEnd = () => {
    if (index === 0) return setOpen(true);
    if (index === 2) return setOpen(false);
  }

  return (
    <>
      <PC open={open} />

      <Transition index={index} setIndex={setIndex} onTransitionEnd={handleTransitionEnd}>
        <Transition.Scene className="bg-white">
          <Scene1 />
        </Transition.Scene>
        <Transition.Scene className="bg-my-bg-color">
          <Scene2 />
        </Transition.Scene>
        <Transition.Scene className={open ? "bg-my-bg-color" : "transtarent"}>
          <Scene3 />
        </Transition.Scene>
      </Transition>
    </>
  )
}

export default Index