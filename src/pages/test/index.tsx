import { Button, Pane, Text, majorScale } from 'evergreen-ui'

const TestPage = () => {
    return (
        <Pane display="flex" alignItems="center" marginX={majorScale(2)}>
            <Button>Email address</Button>
            <Text>This is a clickable Button</Text>
        </Pane>
    )
}

export default TestPage