import React from "react"
import { Button } from "@/components/ui/button"

const GeneralButton = React.memo(({ children, ...props }) => {
    return (
        <Button {...props}>
            {children}
        </Button>
    );
});

export default GeneralButton