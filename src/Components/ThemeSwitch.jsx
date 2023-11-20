import { MoonIcon } from "../assets/Images/MoonIcon";
import { SunIcon } from "../assets/Images/SunIcon";
import { VisuallyHidden, useSwitch} from "@nextui-org/react";

const ThemeSwitch = (props) => {
  const { Component, slots, isSelected, getBaseProps, getInputProps, getWrapperProps } = useSwitch(props);

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              'w-8 h-8',
              'flex items-center justify-center',
              'rounded-lg bg-default-100 hover:bg-default-200',
            ],
          })}
        >
          {isSelected ? <SunIcon /> : <MoonIcon />}
        </div>
      </Component>
      <p className="text-default-500 select-none">Lights: {isSelected ? 'on' : 'off'}</p>
    </div>
  );
};

export default ThemeSwitch;
