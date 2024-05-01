import { SME } from "@/app/schemas";
import Input from "../base/Input";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  useForm,
} from "react-hook-form";

function CompanyInfoForm({
  register,
  errors,
}: {
  register: UseFormRegister<SME>;
  errors: FieldErrors<FieldValues>;
}) {
  return (
    <div className="flex w-full justify-between gap-10">
      <Input
        register={register}
        error={errors["UEN"]?.message}
        registerValue="UEN"
        label="UEN"
      />
      <Input
        register={register}
        error={errors["CompanyName"]?.message}
        registerValue="CompanyName"
        label="Company Name"
      />
    </div>
  );
}

export default CompanyInfoForm;
