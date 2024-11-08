import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const UserAvatar = ({ ...props }) => {
    const { userImage, userInitials } = props
    return (
        <>
            <Avatar>
                {userImage ?
                    <AvatarImage src={userImage} />
                    :
                    <AvatarFallback className={"text-black"}>{userInitials}</AvatarFallback>}
            </Avatar>
        </>
    )
}

export default UserAvatar