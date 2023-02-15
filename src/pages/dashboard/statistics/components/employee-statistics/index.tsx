import MyBadge from "components/badge";
import MyHeading from "components/heading";
import { Pane, TextInput } from "evergreen-ui";
import { useNavigate } from "react-router";
import { useEmployee } from "./useEmployee";

export const EmployeeStatistics = () => {
  const { isLoading } = useEmployee();
  const navigate = useNavigate();
  return (
    <Pane
      width="50%"
      padding={10}
      borderRadius={10}
      background="white"
      border="1px solid #E9ECF1"
    >
      <MyHeading>Employees</MyHeading>
      <Pane
        gap={10}
        display="flex"
        marginTop={10}
        marginBottom={10}
        alignItems="center"
        justifyContent="space-between"
      >
        <TextInput max={50} defaultValue={5} type="number" maxWidth={100} />
        <MyBadge
          height={30}
          display="flex"
          paddingLeft={15}
          cursor="pointer"
          paddingRight={15}
          alignItems="center"
          borderRadius={20}
          justifyContent="center"
          backgroundColor="var(--black)"
          onClick={() => navigate("/employee")}
        >
          See more
        </MyBadge>
      </Pane>
    </Pane>
  );
};
