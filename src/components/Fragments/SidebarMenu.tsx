import { useEffect, useState } from "react";
import { getSidebarMenus } from "@/services/data";
import { Card } from "@/components/Elements/card";
import { Link } from "react-router-dom";
import Image from "next/image";
import { SidebarMenuItem, SidebarMenuProps } from "@/services/types";

export const SidebarMenu: React.FC<SidebarMenuProps> = (props) => {
    const {activeMenu} = props
    const [sidebarMenus, setSidebarMenus] = useState<SidebarMenuItem[]>([]);
    useEffect(() => {
        setSidebarMenus(getSidebarMenus());
    }, []);
    return (
        <Card varian="md:mr-4">
            {sidebarMenus.length > 0 && sidebarMenus.map((menu) => (
                <Link to={menu.url} key={menu.url}>
                    <div 
                        className={`grid grid-cols-12 ... mt-2 p-2 ${
                            activeMenu === menu.url
                                ? "text-orange-400 bg-orange-50 border-orange-400 border rounded-sm"
                                : ""
                        }`} 
                        key={menu.id}>
                        <div className="col-span-2 md:col-span-3 ... mx-3">
                            <Image className="object-cover" src={activeMenu === menu.url ? menu.activeIcon : menu.icon} alt="" />
                        </div>
                        <div className="col-span-10 md:col-span-9 ...">{menu.name}</div>
                    </div>
                </Link>
            ))}
        </Card>
    )
}