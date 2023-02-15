import MyText from "components/text";
import { Pane } from "evergreen-ui";
import { ReactComponent as IconEmpty } from "./icons/empty.svg";

interface IEmpty {
  text?: string;
}

export const Empty = ({ text = "There is no data" }: IEmpty) => (
  <Pane
    width="100%"
    height="300px"
    display="flex"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
  >
    <div>
      <IconEmpty />
    </div>
    <MyText marginTop="20px" fontWeight="bold">
      {text}
    </MyText>
  </Pane>
);
