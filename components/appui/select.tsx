import { cn } from "@/lib";
import { FC } from "react";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  Select as SelectUI,
  SelectValue,
} from "@/components/ui";

export interface SelectOptions {
  label: string;
  value: string;
}

interface SelectProps {
  data: SelectOptions[];
  value: string;
  onChange: (a: string) => void;
}

export const Select: FC<SelectProps> = ({ data, value, onChange }) => {
  return (
    <SelectUI value={value} onValueChange={onChange}>
      <SelectTrigger
        className={cn(
          "w-[200px] h-12",
          "data-[placeholder]:text-xs shadow-lg px-5"
        )}
      >
        <SelectValue placeholder="Filter by Region" />
      </SelectTrigger>
      <SelectContent>
        {data.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectUI>
  );
};
