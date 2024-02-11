interface NavProps {
  transitionIndex: number;
  index: number;
  handleTransitionStart: (startIndex: number, endIndex: number) => void;
}

const Nav = ({ transitionIndex, index, handleTransitionStart }: NavProps) => {
  const getClassName = (i: number) => {
    return `point size-2.5 rounded-full bg-gray-400 bg-opacity-50  ${transitionIndex === i && 'scale-150 animate-pulse'}`;
  }

  return (
    <div className="flex flex-row md:flex-col items-center justify-center gap-8">
      <button className={getClassName(0)} onClick={() => handleTransitionStart(index, 0)} />
      <button className={getClassName(1)} onClick={() => handleTransitionStart(index, 1)} />
      <button className={getClassName(2)} onClick={() => handleTransitionStart(index, 2)} />
    </div>
  )
}

export default Nav;