'use client'
import { useState } from "react"
import { Transition } from "@/components/TransitionScene"
import Scene0 from "./Scene0"
import Scene1 from "./Scene1"
import Scene2 from "./Scene2"
import Scene3 from "./Scene3"
import PC from "./PC"
import TransitionContent from "@/components/TransitionText"
import Mouse from "./Mouse"
import Nav from "./Nav"
import { useProgress } from "@react-three/drei"

const TrasitionStyle = { transition: 'background .5s ease-in-out' };

const Index = () => {
  const [transitionIndex, setTransitionIndex] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const [scene1ClassName, setScene1ClassName] = useState<string>('bg-transtarent');
  const [scene2ClassName, setScene2ClassName] = useState<string>('bg-my-bg-color');
  const [scene3ClassName, setScene3ClassName] = useState<string>('bg-my-bg-color');

  const { progress } = useProgress();

  const isLoaded = progress === 100;

  const handleTransitionStart = (startIndex: number, endIndex: number) => {
    setOpen(true);
    setTransitionIndex(null);
    handleSceneClassName(startIndex, endIndex);
  }

  const handleSceneClassName = (startIndex: number, endIndex: number) => {
    if (startIndex === 0 && endIndex === 1) {
      setScene1ClassName('bg-my-bg-color');
      return;
    }

    if (startIndex === 1 && endIndex === 0) {
      setOpen(false);
      setScene1ClassName('bg-transparent');
      return;
    }

    if (startIndex === 2 && endIndex === 3) {
      setOpen(false);
      setScene2ClassName('bg-transtarent');
      setScene3ClassName('bg-transtarent');
    }

    if (startIndex === 3 && endIndex === 2) {
      setOpen(true);
      setScene2ClassName('bg-my-bg-color');
      setScene3ClassName('bg-my-bg-color');
    }
  }

  const handleTransitionEnd = (index: number) => {
    setTransitionIndex(index);
  }

  const getIsTransitionEnd = (index: number) => {
    return index === transitionIndex;
  }

  return (
    <div className="relative w-full h-full">
      <PC open={open} />

      {isLoaded ?
        <>
          <Transition onTransitionStart={handleTransitionStart} onTransitionEnd={handleTransitionEnd}>
            <Transition.Scene className={open ? "bg-my-bg-color" : "bg-transparent"} style={TrasitionStyle}>
              <Scene0 isTransitionEnd={getIsTransitionEnd(0)} />
            </Transition.Scene>
            <Transition.Scene className={scene1ClassName} style={TrasitionStyle}>
              <Scene1 isTransitionEnd={getIsTransitionEnd(1)} />
            </Transition.Scene>
            <Transition.Scene className={scene2ClassName} style={TrasitionStyle}>
              <Scene2 isTransitionEnd={getIsTransitionEnd(2)} />
            </Transition.Scene>
            <Transition.Scene className={scene3ClassName} style={TrasitionStyle}>
              <Scene3 isTransitionEnd={getIsTransitionEnd(3)} />
            </Transition.Scene>
          </Transition>

          <TransitionContent type="fade-in-down" fadeInDelay="3s" className="absolute right-0 left-0 flex items-center justify-center flex-row gap-16 bottom-8 md:right-8 md:left-auto md:top-0 md:bottom-0 md:flex-col md:w-4">
            <Nav transitionIndex={transitionIndex} />
          </TransitionContent>

          <TransitionContent type={transitionIndex === 3 ? 'fade-out-up' : 'fade-in-down'} fadeInDelay="3s" className="hidden md:flex absolute w-4 items-center justify-end flex-col right-8 bottom-8">
            <Mouse />
          </TransitionContent>
        </>
        :
        <div className="absolute flex flex-col w-full h-full items-center justify-center">
          <div className="loader" />
        </div>
      }
    </div>
  )
}

export default Index