import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
const Dropdown = ({...props}) => {
    const {children, title, items, setActiveContent} = props
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel className={"text-center"}>{title}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                 {items?.map((item) => <DropdownMenuItem key={item.id} onSelect={()=>setActiveContent(item.component)}>{item.item}</DropdownMenuItem>)}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Dropdown