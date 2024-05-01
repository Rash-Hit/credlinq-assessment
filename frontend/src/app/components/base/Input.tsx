import { SME } from "@/app/schemas";
import { forwardRef } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegister,
} from "react-hook-form";

type InputProps = {
  label: string;
  error:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  register: UseFormRegister<SME>;
  registerValue: string;
  type?: string;
};

function Input({
  label,
  error,
  register,
  registerValue,
  type = "text",
}: InputProps) {
  let errorMessage = "";
  if (error) {
    if (typeof error === "object") {
      if (error.message) {
        errorMessage = error.message as string;
      }
    } else {
      errorMessage = error as string;
    }
  }


  return (
    <div className="w-full">
      <div className="relative w-full">
        <input
          type={type}
          className={`block px-2.5 pb-5 pt-4 text-sm mb-3 text-gray-300 bg-transparent rounded-md border ${error && "border-red-500"} peer w-full outline-none`}
          placeholder=""
          {...register(registerValue as any, {
            required: `${label} is required`,
          })}
          id={registerValue}
        />
        <label
          htmlFor={registerValue}
          className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          {label}
        </label>
      </div>
      {error && <p className="text-xs text-red-600 mt-2">{errorMessage}</p>}
    </div>
  );
}

export default Input;
