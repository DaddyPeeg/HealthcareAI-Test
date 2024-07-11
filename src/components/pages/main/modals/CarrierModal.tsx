import { useState } from "react";
import IconSearch from "@svgs/IconSearch";
import CheckBox from "@components/core/CheckBox";
import { useRecoilState } from "recoil";
import { settingAtom } from "@state/Setting";
import { SettingInterface } from "../../../../types/Setting";

const CarrierModal = ({
  open,
  onClose,
  className,
  selectedCarriers,
  options,
}: {
  open: boolean;
  onClose: any;
  selectedCarriers: string[];
  className: string;
  options: string[];
}) => {
  const [setting, setSetting] = useRecoilState<SettingInterface>(settingAtom);
  const [carriers, setCarriers] = useState<string[]>([...selectedCarriers]);

  const handleCheckBox = (event: any, value: string, type: string) => {
    console.log("handle event change", event, value, type);
    if (type == "selectAll") {
      if (carriers.length == options.length) {
        setCarriers([]);
      } else {
        setCarriers([...options]);
      }
    } else if (type == "carriers") {
      let idx = carriers.findIndex((carrier: string) => carrier == value);
      if (idx == -1) {
        setCarriers([...carriers, value]);
      } else {
        let newCarriers = [...carriers];
        newCarriers.splice(idx, 1);
        setCarriers([...newCarriers]);
      }
    }
  };

  const onSaveCarriers = () => {
    setSetting({
      ...setting,
      carriers: [...carriers],
    });
    onClose();
  };

  return (
    <div className={className}>
      <div
        className={`modal-container ${
          open ? "visible bg-black/20" : "invisible"
        }`}
      >
        <div className="modal-content md:w-[40%] w-full">
          <div className="flex flex-col gap-[30px]">
            <div className="w-full">
              <p className="font-bold">Add Your Carriers</p>
            </div>
            <div className="divider-x"></div>
            <div className="flex md:flex-row flex-col w-full relative">
              <div className="flex flex-1 md:w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
                <div className="absolute top-5 left-5">
                  <IconSearch />
                </div>
              </div>
              <div className="flex flex-1 items-center md:justify-center justify-start mt-4 md:w-full">
                <CheckBox
                  label="Select All"
                  checked={carriers.length == options.length}
                  type="selectAll"
                  handleChange={handleCheckBox}
                />
              </div>
            </div>
            <div className="carriers-container">
              {options.map((option: string, idx: number) => {
                return (
                  <CheckBox
                    checked={carriers.includes(option)}
                    label={option}
                    type="carriers"
                    handleChange={handleCheckBox}
                    key={idx}
                  />
                );
              })}
            </div>
            <div className="w-full">
              <div className="flex gap-[24px] justify-end content-center font-bold items-center">
                <div>
                  <button className="flex items-center" onClick={onClose}>
                    Cancel
                  </button>
                </div>
                <div>
                  <button
                    className="flex btn btn-gray"
                    onClick={onSaveCarriers}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrierModal;
