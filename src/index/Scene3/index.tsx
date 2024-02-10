import TransitionText, { TransitionTextType } from "@/components/TransitionText";
import IconGit from "./IconGit";
import IconMail from "./IconMail";
import IconNotion from "./IconNotion";

interface Scene3Props {
  transitionType: TransitionTextType;
}

export default function Scene3({ transitionType }: Scene3Props) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full h-full md:flex-row md:gap-8">
      <TransitionText className="text-black text-4xl md:text-6xl" type={transitionType} fadeInDelay="1s">
        CONTACT
      </TransitionText>

      <div className="flex flex-wrap flex-col gap-1 mt-3">
        <TransitionText className="group w-fit" type={transitionType} fadeInDelay="1.50s">
          <a href="mailto:koreacat0w0@gmail.com" className="flex items-center justify-center gap-1 text-black text-base">
            <IconMail />
            koreacat0w0@gmail.com
          </a>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black" />
        </TransitionText>

        <TransitionText className="group w-fit" type={transitionType} fadeInDelay="1.75s">
          <a href="https://github.com/koreacat" className="flex items-center justify-center gap-1 text-black text-base">
            <IconGit />
            github
          </a>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black" />
        </TransitionText>

        <TransitionText className="group w-fit" type={transitionType} fadeInDelay="2s">
          <a href="https://koreacat.notion.site/Front-end-Developer-d4b6fda2d59c4c4682d3f43dabf87479" className="flex items-center justify-center gap-1 text-black text-base">
            <IconNotion />
            notion
          </a>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black" />
        </TransitionText>
      </div>
    </div>
  )
}
