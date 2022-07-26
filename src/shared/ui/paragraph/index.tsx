import React, { FC } from "react"
import { Paragraph, ParagraphProps } from "evergreen-ui"

const MyParagraph: FC<ParagraphProps> = (props) => {
    return <Paragraph color="var(--black)" {...props} />
}

export default MyParagraph
