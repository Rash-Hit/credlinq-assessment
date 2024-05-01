"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import ApplicantInfoForm from "../forms/ApplicantInfoForm";
import CompanyInfoForm from "../forms/CompanyInfoForm";
import TermsConditionsForm from "../forms/TermsConditionsForm";
import UploadDocumentForm from "../forms/UploadDocumentForm";
import StepperContent from "./StepperContent";
import StepperItem from "./StepperItem";
import { SME, SMEZodSchema } from "@/app/schemas";
import { DevTool } from "@hookform/devtools";

function Form() {
  const form = useForm<SME>({
    resolver: zodResolver(SMEZodSchema),
  });

  const { register, handleSubmit, formState, control } = form;

  const { errors } = formState;

  const onSubmit = (data: SME) => {
    console.log("are we reaching here ", data);
  };

  return (
    <div className="max-w-6xl py-5 px-7  border bg-[#ffffff] shadow-xl rounded-md">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Company Information */}
        <StepperItem index={1} title="Company Information" />
        <StepperContent index={1}>
          <CompanyInfoForm register={register} errors={errors} />
        </StepperContent>

        {/* Application Information */}
        <StepperItem index={2} title="Applicant Infomation" />
        <StepperContent index={2}>
          <ApplicantInfoForm register={register} errors={errors} />
        </StepperContent>

        {/* Upload Document */}
        <StepperItem index={3} title="Upload Document" />
        <StepperContent index={3}>
          <UploadDocumentForm
            errors={errors}
            control={control}
            register={register}
          />
        </StepperContent>

        {/* Terms & Condition */}
        <StepperItem index={4} title="Terms & Conditions" />
        <TermsConditionsForm register={register} errors={errors} />

        {/* Submit Button */}
        <div className="text-right mt-4">
          <input
            type="submit"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
