import React, { ChangeEvent, FunctionComponent } from "react";

type PropsType = {
  className?: string;
  onChange: (value: string) => void;
};

const InputField: FunctionComponent<PropsType> = ({ className, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={`${className} flex`}>
      <p className="pr-2">Search:</p>
      <input
        className="border border-black rounded"
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField;
