import {ReactNode} from "react";

const styles = {
    title: "text-4xl font-medium lg:text-5xl",
    subtitle: "text-2xl text-accent-foreground font-semibold",
}

export function Title({ children, className }: { children: ReactNode, className?: string }) {
    return <h1 className={`${styles.title} ${className}`}>{children}</h1>
}

export function Subtitle({ children, className }: { children: ReactNode, className?: string }) {
    return <h2 className={`${styles.subtitle} ${className}`}>{children}</h2>
}