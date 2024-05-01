import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import Input from "../base/Input";
import { SME } from "@/app/schemas";

function ApplicantInfoForm({
  register,
  errors,
}: {
  register: UseFormRegister<FieldValues & SME>;
  errors: FieldErrors<FieldValues>;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Input
        error={errors["FullName"]?.message}
        label="Full Name"
        register={register}
        registerValue="FullName"
      />
      <Input
        error={errors["PositionInCompany"]?.message}
        label="Position with company"
        register={register}
        registerValue="PositionInCompany"
      />
      <Input
        error={errors["Email"]?.message}
        type="email"
        label="Email Address"
        register={register}
        registerValue="Email"
      />

      <Input
        error={errors["ReEnterEmail"]?.message}
        type="email"
        label="Re-enter Email Address"
        register={register}
        registerValue={"ReEnterEmail"}
      />

      <Input
        error={errors["MobNumber"]?.message}
        type="tel"
        label="Mobile Number"
        register={register}
        registerValue={"MobNumber"}
      />
    </div>
  );
}

export default ApplicantInfoForm;
