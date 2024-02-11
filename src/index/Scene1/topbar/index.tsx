function formatDate(date: Date): string {
  const options = {
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Asia/Seoul",
  } as Intl.DateTimeFormatOptions;
  return date.toLocaleString("ko-KR", options);
}

const Topbar = () => {
  return (
    <div className='absolute top-0 inset-x-0 flex items-center justify-end w-full h-6 bg-white bg-opacity-5 text-sm pr-4'>
      <div>
        {formatDate(new Date())}
      </div>
    </div>
  )
}

export default Topbar;