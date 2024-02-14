interface PhoneProps {
  open: boolean;
}

const Phone = ({ open }: PhoneProps) => {
  return (
    <div className="fixed flex size-full items-center justify-center opacity-100 md:opacity-0">
      <img src="/ImgPhone.png" className={`h-[20%] min-h-[120px] ${open ? 'animate-phone-grow' : 'animate-phone-shrink'}`} style={{ transform: 'translate(0, 130%)' }} />
    </div>
  )
}

export default Phone;