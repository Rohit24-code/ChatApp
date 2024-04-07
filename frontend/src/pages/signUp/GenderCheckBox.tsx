import React from "react";

type AppProps = {
  onCheckBoxChange: (gneder: string) => void;
  selectedGender: string;
};

const GenderCheckBox = ({ onCheckBoxChange, selectedGender }: AppProps) => {
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender==="male" ? "selected" :""}`}>
          <span className="text-bold label-text">male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>

      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender==="female" ? "selected" :""}`}>
          <span className="text-bold label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
