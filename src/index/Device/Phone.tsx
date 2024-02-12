interface PhoneProps {
  open: boolean;
}

const Phone = ({ open }: PhoneProps) => {
  return (
    <div className="fixed flex items-center justify-center size-full opacity-100 md:opacity-0">
      <img src="/ImgPhone.png" className={`min-h-[120px] h-[20%] ${open ? 'animate-phone-grow' : 'animate-phone-shrink'}`} style={{ transform: 'translate(0, 130%)' }} />
    </div>
  )
}

export default Phone;