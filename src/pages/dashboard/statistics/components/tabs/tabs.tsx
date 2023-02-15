import { useMemo } from "react";
import { Group, Button } from "evergreen-ui";

interface ITabs {
  value: string;
  onChange: (e: string) => void;
}

export const Tabs = ({ value, onChange }: ITabs) => {
  const options = useMemo(
    () => [
      { label: "7 Days", type: "DAY" },
      { label: "4 Weeks", type: "WEEK" },
      { label: "Year", type: "MONTH" },
    ],
    []
  );

  return (
    <Group>
      {options.map(({ label, type }) => (
        <Button
          key={label}
          isActive={value === type}
          onClick={() => onChange(type)}
        >
          {label}
        </Button>
      ))}
    </Group>
  );
};
