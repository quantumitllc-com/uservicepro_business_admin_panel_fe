import React from "react"
import {
    Text,
    Pane,
    Heading,
    Button,
    TextInput
} from "evergreen-ui"

import Logo from "shared/logo"

// import styles from "./styles.module.scss"

const SignIn = () => {
    return (
        <Pane
            height="100vh"
            width="100wh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            <Logo />
            <Heading>
                Sign in
            </Heading>
            <TextInput placeholder="Email address" />
            <TextInput placeholder="Password" />
            <Button appearance="primary">
                Sign in
            </Button>
            <Text>
                Forgot password?
            </Text>
            <Heading size={400}>
                Don’t have an account?
            </Heading>
            <Button appearance="">
                Create new account
            </Button>
        </Pane>
    )
}

export default SignIn