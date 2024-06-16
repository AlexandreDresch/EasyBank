import { Progress } from "@/components/ui/progress"

export default function ProgressBar({title, value}: ProgressBarProps) {
  return (
    <div className="flex w-full flex-col gap-1">
        <p>{title}</p>
        <Progress value={value} className="w-full bg-slate-200 h-2" />

    </div>)
}
