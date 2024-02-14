import React from "react";
import TransitionContent, { TransitionContentEnum } from "@/components/TransitionContent";
import IconMail from "../../components/icon/IconMail";
import IconGit from "../../components/icon/IconGit";
import IconNotion from "../../components/icon/IconNotion";
import ContactLink from "./ContactLink";

interface Scene2Props {
  isTransitionEnd: boolean;
}

export default function Scene2({ isTransitionEnd }: Scene2Props) {
  const getTransitionType = () => {
    return isTransitionEnd ? TransitionContentEnum["fade-in-down"] : TransitionContentEnum["fade-out"];
  }

  return (
    <div className="flex size-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-8">
        <TransitionContent className="text-4xl text-my-bg-color md:text-6xl" type={getTransitionType()} fadeInDelay=".75s">
          CONTACT
        </TransitionContent>

        <div className="mt-3 flex flex-col flex-wrap gap-1">
          <TransitionContent className="group w-fit" type={getTransitionType()} onTransitionEnd={e => e.stopPropagation()} fadeInDelay="1.50s">
            <ContactLink href="mailto:koreacat0w0@gmail.com" name="koreacat0w0@gmail.com" icon={<IconMail />} />
          </TransitionContent>

          <TransitionContent className="group w-fit" type={getTransitionType()} onTransitionEnd={e => e.stopPropagation()} fadeInDelay="1.75s">
            <ContactLink href="https://github.com/koreacat" name="github" icon={<IconGit />} />
          </TransitionContent>

          <TransitionContent className="group w-fit" type={getTransitionType()} onTransitionEnd={e => e.stopPropagation()} fadeInDelay="2s">
            <ContactLink href="https://koreacat.notion.site/Front-end-Developer-d4b6fda2d59c4c4682d3f43dabf87479" name="notion" icon={<IconNotion />} />
          </TransitionContent>
        </div>
      </div>

      <TransitionContent className="text-sm text-my-bg-color md:text-xl" type={getTransitionType()} fadeInDelay="2.5s">
        함께 좋은 프로젝트를 만들고 싶어요!
      </TransitionContent>
    </div>
  )
}
