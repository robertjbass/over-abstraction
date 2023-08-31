import {
  BeakerIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export type IconType = "search" | "beaker" | "user" | "key";

type Props = {
  type: IconType;
};

const BaseIcon = ({ type }: Props) => {
  const classValue = "h-6 w-6 my-auto";
  const icons = {
    search: <MagnifyingGlassIcon className={classValue} />,
    beaker: <BeakerIcon className={classValue} />,
    user: <UserIcon className={classValue} />,
    key: <LockClosedIcon className={classValue} />,
  };

  return icons[type];
};

export default BaseIcon;
