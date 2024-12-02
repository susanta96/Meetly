"use client";

import React from 'react';
import {CalendarCheck, HomeIcon, LucideProps, Settings, Users2} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";


interface Props {
    id: number;
    name: string;
    href: string;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
}

export const dashboardLinks: Props[] = [
    {
        id: 0,
        name: "Event Types",
        href: "/dashboard",
        icon: HomeIcon,
    },
    {
        id: 1,
        name: "Meetings",
        href: "/dashboard/meetings",
        icon: Users2,
    },
    {
        id: 2,
        name: "Availability",
        href: "/dashboard/availability",
        icon: CalendarCheck,

    },
    {
        id: 3,
        name: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    }
]

export  const DashboardLinks = () => {
    const pathname = usePathname();

    return (
        <div>
            {dashboardLinks.map((link) => (
                <Link key={link.id} href={link.href} className={cn(
                    pathname === link.href ? "text-primary bg-primary/10" : "text-muted-foreground",
                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary"
                )}>
                    <link.icon className={"size-4"} />
                    {link.name}
                </Link>
            ))}
        </div>
    );
};