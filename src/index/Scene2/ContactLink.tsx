interface ContactLinkProps {
  href: string;
  name: string;
  icon?: React.ReactNode;
}

const ContactLink = ({ href, name, icon }: ContactLinkProps) => {
  return (
    <>
      <a href={href} target="_blank" className="flex items-center justify-center gap-1 text-base text-my-bg-color">
        {icon}
        {name}
      </a>
      <span className="block h-0.5 max-w-0 bg-my-bg-color transition-all duration-500 group-hover:max-w-full" />
    </>
  )
}

export default ContactLink;