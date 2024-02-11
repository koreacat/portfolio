interface ContactLinkProps {
  href: string;
  name: string;
  icon?: React.ReactNode;
}

const ContactLink = ({ href, name, icon }: ContactLinkProps) => {
  return (
    <>
      <a href={href} target="_blank" className="flex items-center justify-center gap-1 text-my-bg-color text-base">
        {icon}
        {name}
      </a>
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-my-bg-color" />
    </>
  )
}

export default ContactLink;