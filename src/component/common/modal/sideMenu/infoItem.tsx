// InfoItem.tsx
import React from "react"

export type InfoItemProps = {
    icon: string
    alt: string
    children: React.ReactNode
}

const InfoItem = ({ icon, alt, children }: InfoItemProps) => {
    return (
        <div className="flex flex-row gap-2 items-center my-1">
            <img src={icon} alt={alt} className="w-8" />
            <div className="text-sm">{children}</div>
        </div>
    )
}

export default InfoItem
