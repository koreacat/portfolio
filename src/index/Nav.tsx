
interface NavProps {
  transitionIndex: number;
}

const Nav = ({ transitionIndex }: NavProps) => {

  const getClassName = (index: number) => {
    return `point ${transitionIndex === index && 'animate-pulse scale-150'}`;
  }

  return (
    <div className="pointArea flex flex-row md:flex-col items-center justify-center gap-8">
      <span className={getClassName(0)} />
      <span className={getClassName(1)} />
      <span className={getClassName(2)} />
      <span className={getClassName(3)} />
    </div>
  )
}

export default Nav;