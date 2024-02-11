'use client'
import { useState } from "react"
import { Transition } from "@/components/TransitionScene"
import Scene0 from "./Scene0"
import Scene1 from "./Scene1"
import Scene2 from "./Scene2"
import PC from "./PC"
import TransitionContent from "@/components/TransitionContent"
import Mouse from "./Mouse"
import Nav from "./Nav"
import { useProgress } from "@react-three/drei"
import Loading from "./Loading"

const TrasitionStyle = { transition: 'background .5s ease-in-out' };

const Index = () => {
  const [transitionIndex, setTransitionIndex] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const [scene1ClassName, setScene1ClassName] = useState<string>('bg-transtarent');
  const [scene2ClassName, setScene2ClassName] = useState<string>('bg-my-bg-color');

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

    if (startIndex === 1 && endIndex === 2) {
      setOpen(false);
      setScene1ClassName('bg-transtarent');
      setScene2ClassName('bg-transtarent');
    }

    if (startIndex === 2 && endIndex === 1) {
      setOpen(true);
      setScene1ClassName('bg-my-bg-color');
      setScene2ClassName('bg-my-bg-color');
    }
  }

  const handleTransitionEnd = (index: number) => {
    setTransitionIndex(index);
  }

  const getIsTransitionEnd = (index: number) => {
    return index === transitionIndex;
  }

  return (
    <div className="relative size-full">
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
          </Transition>

          <TransitionContent type="fade-in-down" fadeInDelay="3s" className="absolute inset-x-0 flex items-center justify-center flex-row gap-16 bottom-8 md:right-8 md:left-auto md:inset-y-0 md:flex-col md:w-4">
            <Nav transitionIndex={transitionIndex} />
          </TransitionContent>

          <TransitionContent type={transitionIndex === 2 ? 'fade-out-up' : 'fade-in-down'} fadeInDelay="3s" className="hidden md:flex absolute w-4 items-center justify-end flex-col right-8 bottom-8">
            <Mouse />
          </TransitionContent>
        </>
        :
        <Loading />
      }
    </div>
  )
}

export default Index