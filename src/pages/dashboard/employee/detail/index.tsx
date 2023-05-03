import MyHeading from "components/heading";
import MyText from "components/text";

import {
  Avatar,
  Button,
  ChevronLeftIcon,
  EditIcon,
  Pane,
  Spinner,
  minorScale,
} from "evergreen-ui";
import { useNavigate } from "react-router";
import { Chip } from "components/chip";
import { usePage } from "./usePage";
import { ReactComponent as Folders } from "../icons/folders.svg";
import { ReactComponent as Like } from "../icons/like.svg";
import { ReactComponent as Time } from "../icons/time.svg";
import { Edit } from "../components/edit";
import { StatusSelect } from "../components/status-select";
import styles from "./styles.module.scss";
import { AddService } from "../components/add-service";

const EmployeeDetail = () => {
  const navigate = useNavigate();
  const {
    data,
    isLoading,
    employeeId,
    handleDelete,
    isLoadingServices,
  } = usePage();

  return (
    <Pane>
      <Pane>
        <Button
          border='none'
          color='var(--grey)'
          fontFamily='var(--lexend)'
          backgroundColor='transparent'
          iconBefore={<ChevronLeftIcon size={15} color='var(--grey)' />}
          onClick={() => navigate(-1)}
          className={styles.button}
        >
          Back
        </Button>
        <MyHeading fontSize={25} fontWeight={600} marginBottom={minorScale(5)}>
          Profile
        </MyHeading>
      </Pane>
      {isLoading ? (
        <Pane
          display='flex'
          minHeight={150}
          alignItems='center'
          justifyContent='center'
        >
          <Spinner />
        </Pane>
      ) : (
        <Pane display='flex' gap={20}>
          <Pane display='flex' gap={20} flexDirection='column'>
            <Pane
              gap='30px'
              display='flex'
              width='fit-content'
              borderRadius='10px'
              whiteSpace='nowrap'
              flexDirection='column'
              padding={minorScale(7)}
              border='1px solid #E9ECF1'
              backgroundColor='var(--white)'
            >
              <Pane display='flex' alignItems='center' gap={10}>
                <MyHeading fontSize={24}>
                  Employee Details
                  <MyText marginLeft={5}>({employeeId})</MyText>
                </MyHeading>
                <Pane
                  background={data.onSite ? "var(--green)" : "var(--grey)"}
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  borderRadius='10px'
                  padding='5px'
                  color={data.onSite ? "white" : "black"}
                >
                  on site
                </Pane>
              </Pane>
              <Pane
                gap={15}
                display='flex'
                paddingBottom={20}
                borderBottom='1px solid var(--stroke-block)'
              >
                <Avatar marginRight={20} size={80} />
                <Pane gap={10} display='flex'>
                  <Pane gap={8} display='flex' flexDirection='column'>
                    <MyHeading>Employee</MyHeading>
                    <MyText>{`${data.firstName}  ${data.lastName}`}</MyText>
                    <MyText>{data.phone}</MyText>
                    <MyText>{data.email}</MyText>
                  </Pane>
                  <Pane gap={8} display='flex' flexDirection='column'>
                    <MyHeading>Status</MyHeading>
                    <StatusSelect status={data.status} />
                  </Pane>
                </Pane>
              </Pane>
              <Pane>
                <MyHeading marginBottom={20} fontSize={24}>
                  Work Experience
                </MyHeading>
                <Pane display='flex' gap={20}>
                  <Pane display='flex' alignItems='center' gap={10}>
                    <Folders />
                    <Pane display='flex' flexDirection='column'>
                      <MyHeading>6 years</MyHeading>
                      <MyText>since 2016</MyText>
                    </Pane>
                  </Pane>
                  <Pane display='flex' alignItems='center' gap={10}>
                    <Like />
                    <Pane display='flex' flexDirection='column'>
                      <MyHeading>4.33</MyHeading>
                      <MyText>of 345 reviews</MyText>
                    </Pane>
                  </Pane>
                  <Pane gap={10} display='flex' alignItems='center'>
                    <Time />
                    <Pane display='flex' flexDirection='column'>
                      <MyHeading>32K</MyHeading>
                      <MyText>work hours</MyText>
                    </Pane>
                  </Pane>
                </Pane>
              </Pane>
            </Pane>
            <Pane
              gap='30px'
              display='flex'
              borderRadius='10px'
              flexDirection='column'
              padding={minorScale(7)}
              border='1px solid #E9ECF1'
              backgroundColor='var(--white)'
            >
              <Pane>
                <MyHeading fontSize={24}>Additional Info</MyHeading>
              </Pane>
              <Edit
                ssn={data?.ssn}
                officeId={data.officeId}
                attachedFileUrl={data.attachedFileUrl}
              />
            </Pane>
          </Pane>
          <Pane display='flex' gap={20} flexDirection='column'>
            <Pane
              gap='30px'
              display='flex'
              borderRadius='10px'
              flexDirection='column'
              padding={minorScale(7)}
              border='1px solid #E9ECF1'
              backgroundColor='var(--white)'
              minWidth='350px'
            >
              <Pane>
                <MyHeading fontSize={24}>
                  Services <EditIcon />
                </MyHeading>
              </Pane>
              <Pane>
                {data.services.length > 0 ? (
                  <Pane
                    width='100%'
                    display='flex'
                    flexWrap='wrap'
                    gap='10px 20px'
                    marginBottom='20px'
                  >
                    {data.services.map(({ serviceId, serviceName }: any) => (
                      <Chip
                        key={serviceId}
                        title={serviceName}
                        disabled={isLoadingServices}
                        onClick={() => handleDelete(serviceId)}
                      />
                    ))}
                  </Pane>
                ) : (
                  <Pane textAlign='center' marginBottom='20px'>
                    There is no service
                  </Pane>
                )}
                <AddService id={data.officeId} list={data.services} />
              </Pane>
            </Pane>
          </Pane>
        </Pane>
      )}
    </Pane>
  );
};

export default EmployeeDetail;
