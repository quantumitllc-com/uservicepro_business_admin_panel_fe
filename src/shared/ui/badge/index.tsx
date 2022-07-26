import { FC } from "react"
import { Badge, BadgeProps } from "evergreen-ui"

const MyBadge: FC<BadgeProps> = (props) => {
    return (
        <Badge
            // @ts-ignore
            color="var(--white)"
            borderRadius="30px"
            paddingX="8px"
            paddingY="4px"
            height="24px"
            textTransform="none"
            fontFamily="var(--lexend)"
            fontSize="14px"
            fontWeight="500"
            {...props}
        />
    )
}

export default MyBadge
