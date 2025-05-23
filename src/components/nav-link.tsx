import { Link, LinkProps, useLocation } from "react-router-dom";

export type NavlinkProps  = LinkProps

export function NavLink(props: NavlinkProps){
    const {pathname} = useLocation()
    return (
    <Link 
    data-current={pathname == props.to}
    className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground" 
    {...props}
    />
)}