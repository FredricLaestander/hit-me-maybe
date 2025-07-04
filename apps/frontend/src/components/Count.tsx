import { cn } from '../utils/classname'

export const Count = ({
  value,
  classname,
}: {
  value: string
  classname?: string
}) => {
  return (
    <span
      className={cn(
        'flex w-18 justify-center rounded-full bg-slate-900 px-2 py-0.5 font-bold whitespace-nowrap',
        classname,
      )}
    >
      {value}
    </span>
  )
}
