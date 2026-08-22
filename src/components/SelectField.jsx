import { isNil } from "lodash";
import { useEffect, useState } from "react";
import Select from "react-select";

// const SelectField = ({
//   id,
//   options,
//   title,
//   isRequired,
//   name,
//   value,
//   onChange,
//   isMulti = false,
// }) => {
//   // This is for changing arrow direction in select
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleDropdownOptionSelect = (e) => {
//     onChange(e.target.value);
//     setIsDropdownOpen(false);
//   };

//   const handleSelectClick = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleSelectBlur = () => {
//     setIsDropdownOpen(false);
//   };

//   useEffect(() => {
//     const downArrow = document.getElementById(`${id}-${title}`);
//     if (!isDropdownOpen) {
//       downArrow.classList.remove("rotate-180");
//       return;
//     }
//     downArrow.classList.add("rotate-180");
//   }, [isDropdownOpen]);

//   return (
//     <div className="flex flex-col gap-2 items-stretch relative w-full">
//       {!isNil(title) && (
//         <p className="font-SubTitle text-base sm:text-lg font-bold text-black">
//           {title} {isRequired ? <span className="text-red-400">*</span> : ""}
//         </p>
//       )}
//       <select
//         id={id}
//         name={name}
//         value={value}
//         onBlur={handleSelectBlur}
//         onChange={handleDropdownOptionSelect}
//         onClick={handleSelectClick}
//         className="col-span-6 border rounded-xl bg-white appearance-none p-4 pr-12 w-full flex-1 outline-none"
//       >
//         {options.map((opt) => {
//           return (
//             <option key={opt.value} value={opt.value}>
//               {opt.label}
//             </option>
//           );
//         })}
//       </select>
//       <i
//         id={`${id}-${title}`}
//         className="fa-solid fa-chevron-down absolute right-4 top-[70%] -translate-y-1/2 text-primary "
//       />
//     </div>
//   );
// };

const SelectField = ({
  id,
  options,
  title,
  isRequired,
  name,
  value,
  onChange,
  isMulti = false,
}) => {
  return (
    <div className="flex flex-col gap-2 items-stretch relative w-full">
      {!isNil(title) && (
        <p className="font-SubTitle text-base sm:text-lg font-bold text-black">
          {title} {isRequired ? <span className="text-red-400">*</span> : ""}
        </p>
      )}
      <Select
        id={id}
        options={options}
        name={name}
        value={value}
        onChange={onChange}
        isMulti={isMulti}
        placeholder="Select subjects"
        styles={{
          control: (provided) => ({
            ...provided,
            outline: "none",
            borderRadius: "16px",
            padding: "12px",
            border: "1px solid #000000",
          }),
          container: (provided) => ({
            ...provided,
            borderRadius: "16px",
          }),
          input: (provided) => ({
            ...provided,
            width: "100%",
          }),
        }}
        className="bg-white appearance-none w-full flex-1 outline-none"
      />
    </div>
  );
};

export default SelectField;
