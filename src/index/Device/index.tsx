import TransitionContent from "@/components/TransitionContent";
import PC from "./PC";
import Phone from "./Phone";

interface DeviceProps {
  open: boolean;
}

const Device = ({ open }: DeviceProps) => {
  return (
    <TransitionContent type="fade-in-down" fadeInDelay="2.5s" className="absolute inset-x-0 flex h-dvh w-full items-center justify-center">
      <Phone open={open} />
      <PC open={open} />
    </TransitionContent>
  )
}

export default Device;