import * as React from "react"
import { LucideProps } from "lucide-react"
import dynamicIconImports from "lucide-react/dynamicIconImports"
import dynamic from "next/dynamic"

export interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports
}

export function Icon({ name, ...props }: IconProps) {
  const LucideIcon = React.useMemo(() => dynamic(dynamicIconImports[name]), [name])

  return <LucideIcon {...props} />
}
