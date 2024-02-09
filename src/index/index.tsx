'use client'

import { Transition } from "@/components/TransitionScene"
import Scene1 from "./Scene1"
import Scene2 from "./Scene2"
import Scene3 from "./Scene3"

const Index = () => {
  return (
    <Transition>
      <Transition.Scene className="bg-my-bg-color">
        <Scene1 />
      </Transition.Scene>
      <Transition.Scene >
        <Scene2 />
      </Transition.Scene>
      <Transition.Scene className="bg-my-bg-color">
        <Scene3 />
      </Transition.Scene>
    </Transition>
  )
}

export default Index