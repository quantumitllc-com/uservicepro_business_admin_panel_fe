import { Chip } from "components/chip";
import MyHeading from "components/heading";
import { Pane } from "evergreen-ui";
import { Search } from "../search";
import { useAssigned } from "./useAssigned";

interface IAssign {
  officeId: string;
  serviceId: string;
  list: { id: string; name: string }[];
}

export const AssignedEmployess = ({ list, officeId, serviceId }: IAssign) => {
  const { handleDelete, isLoadingDelete } = useAssigned();

  return (
    <div>
      <MyHeading marginBottom='24px' fontSize='20px'>
        ASSIGN EMPLOYEE
      </MyHeading>
      <Search list={list} officeId={officeId} serviceId={serviceId} />
      <Pane
        width='100%'
        marginTop='20px'
        display='flex'
        flexWrap='wrap'
        gap='10px 20px'
      >
        {list.map(({ id, name }) => (
          <Chip
            key={id}
            title={name}
            disabled={isLoadingDelete}
            onClick={() => handleDelete(id)}
          />
        ))}
      </Pane>
    </div>
  );
};
