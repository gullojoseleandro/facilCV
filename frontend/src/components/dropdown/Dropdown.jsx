import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useContext } from 'react';
import { AuthContext } from '@/auth/authContext';

const Dropdown = ({ ...props }) => {

    const { handleLogout } = useContext(AuthContext);

    const { children, title, items, handleChangeTab } = props
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel className={"text-center"}>{title}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {items?.map((item) => <DropdownMenuItem key={item.id} onSelect={() => item.id === 5 ? handleLogout() : handleChangeTab(item.component)}>{item.item}</DropdownMenuItem>)}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Dropdown