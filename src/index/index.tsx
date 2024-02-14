'use client'
import { useState } from "react"
import { Transition } from "@/components/TransitionScene"
import Scene0 from "./Scene0"
import Scene1 from "./Scene1"
import Scene2 from "./Scene2"
import TransitionContent from "@/components/TransitionContent"
import Mouse from "./Mouse"
import Nav from "./Nav"
import { useProgress } from "@react-three/drei"
import Loading from "./Loading"
import Device from "./Device"

const TrasitionStyle = { transition: 'background .5s ease-in-out' };

const Index = () => {
  const [index, setIndex] = useState<number>(0);
  const [transitionIndex, setTransitionIndex] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const [scene1ClassName, setScene1ClassName] = useState<string>('bg-transtarent');
  const [scene2ClassName, setScene2ClassName] = useState<string>('bg-my-bg-color');

  const { progress } = useProgress();

  const isLoaded = progress === 100;

  const handleTransitionStart = (startIndex: number, endIndex: number) => {
    if (startIndex === endIndex) return;

    if (startIndex === 0 && endIndex === 2) {
      setIndex(1);
      setTransitionIndex(null);
      handleSceneClassName(startIndex, 1);
      return;
    };

    if (startIndex === 2 && endIndex === 0) {
      setIndex(1);
      setTransitionIndex(null);
      handleSceneClassName(startIndex, 1);
      return;
    };

    setIndex(endIndex);
    setTransitionIndex(null);
    handleSceneClassName(startIndex, endIndex);
  }

  const handleSceneClassName = (startIndex: number, endIndex: number) => {
    if (startIndex === 0 && endIndex === 1) {
      setOpen(true);
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
      return;
    }

    if (startIndex === 2 && endIndex === 1) {
      setOpen(true);
      setScene1ClassName('bg-my-bg-color');
      setScene2ClassName('bg-my-bg-color');
      return;
    }
  }

  const handleTransitionEnd = (index: number) => {
    setTransitionIndex(index);
  }

  const getIsTransitionEnd = (index: number) => {
    return index === transitionIndex;
  }

  const handleRestart = () => handleTransitionStart(1, 0);
  const handleShutDown = () => handleTransitionStart(1, 2);

  return (
    <div className="relative h-dvh w-full">
      <Device open={open} />

      {isLoaded ?
        <>
          <Transition index={index} setIndex={setIndex} onTransitionStart={handleTransitionStart} onTransitionEnd={handleTransitionEnd}>
            <Transition.Scene className={open ? "bg-my-bg-color" : "bg-transparent"} style={TrasitionStyle}>
              <Scene0 isTransitionEnd={getIsTransitionEnd(0)} />
            </Transition.Scene>
            <Transition.Scene className={scene1ClassName} style={TrasitionStyle}>
              <Scene1 isTransitionEnd={getIsTransitionEnd(1)} handleRestart={handleRestart} handleShutDown={handleShutDown} />
            </Transition.Scene>
            <Transition.Scene className={scene2ClassName} style={TrasitionStyle}>
              <Scene2 isTransitionEnd={getIsTransitionEnd(2)} />
            </Transition.Scene>
          </Transition>

          <TransitionContent type="fade-in-down" fadeInDelay="3s" className=":w-4 absolute inset-0 bottom-8 left-auto right-8 hidden flex-col items-center justify-center gap-16 md:flex">
            <Nav transitionIndex={transitionIndex} index={index} handleTransitionStart={handleTransitionStart} />
          </TransitionContent>

          <TransitionContent type={transitionIndex === 2 ? 'fade-out-up' : 'fade-in-down'} fadeInDelay="3s" className="absolute bottom-8 right-8 hidden w-4 flex-col items-center justify-end md:flex">
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