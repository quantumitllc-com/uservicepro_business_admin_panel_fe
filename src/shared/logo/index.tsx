import React from "react"
import { Pane, Text } from "evergreen-ui"
import { ReactComponent as MySvg } from "./logo.svg"

const Logo = () => {
    return (
        <Pane
            display="flex"
            alignItems="center"
        >
            <MySvg />
            <Text>
                Service App
            </Text>
        </Pane>
    )
}

export default Logo