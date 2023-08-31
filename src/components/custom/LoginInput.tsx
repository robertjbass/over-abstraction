import BaseInput from "@/components/base/BaseInput";
import { IconType } from "@/components/base/BaseIcon";

type Props = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  valueType: "text" | "password";
  icon: IconType;
};

const LoginInput = ({ input, setInput, valueType, icon }: Props) => {
  return (
    <BaseInput
      valueType={valueType}
      icon={icon}
      value={input}
      setValue={setInput}
    />
  );
};

export default LoginInput;
