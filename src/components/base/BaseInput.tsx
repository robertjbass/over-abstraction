import BaseIcon, { IconType } from "@/components/base/BaseIcon";

type Props = {
  value: string;
  setValue: (searchTerm: string) => void;
  icon: IconType | null;
  valueType: "text" | "password";
};

const BaseInput = ({ value, setValue, icon, valueType }: Props) => {
  return (
    <div className="flex bg-gray-700 px-2 py-1 rounded">
      {icon && <BaseIcon type={icon} />}
      <input
        type={valueType}
        className={[
          "my-1 p-2 ring-0 focus:ring-0 bg-gray-700 rounded-md text-white w-full outline-0 text-xl",
          icon && "mx-2",
        ].join(" ")}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default BaseInput;
