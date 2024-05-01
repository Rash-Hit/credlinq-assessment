import { SME } from "@/app/schemas";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

function TermsConditionsForm({
  register,
  errors,
}: {
  register: UseFormRegister<SME>;
  errors: FieldErrors<FieldValues>;
}) {
  let errorMessage = "";
  let error = errors["IsTermsAccepted"];
  if (error) {
    if (typeof error === "object") {
      if (error.message) {
        errorMessage = error.message as unknown as string;
      }
    } else {
      errorMessage = error as unknown as string;
    }
  }

  return (
    <div className="p-5 w-full  flex flex-col gap-6 m-5  text-gray-500  dark:text-gray-400 text-md">
      <div className="flex gap-3">
        <input
          {...register("IsTermsAccepted", {
            required: "Please check this box ",
          })}
          type="checkbox"
          className="h-4 w-4 mt-1 border-gray-200 rounded"
          id="acceptTermsCheckbox"
        />

        <label htmlFor="acceptTermsCheckbox" className="">
          By ticking, you are confirming that you have understood and agreeing
          to the details mentioned
        </label>
      </div>
      {error && <p className="text-xs text-red-600 mt-2">{errorMessage}</p>}
      <div
        className="space-y-2 ms-5 flex flex-col gap-4"
        style={{
          listStyleImage: "url(checkmark.svg)",
        }}
      >
        <div className="flex gap-5">
          <span>✔</span>
          <div>
            I confirm that I am authorized person to upload bank statements on
            behalf of my company
          </div>
        </div>
        <div className="flex gap-5">
          <span>✔</span>
          <div>
            I assure you that bank statements provided have no mismatch, If
            there is any then report will be generated
          </div>
        </div>
        <div className="flex gap-5">
          <span>✔</span>
          <div>
            I understand that this is general report based on bank statements
            and Credling is not providing a solution or guiding me for my
            bussiness growth
          </div>
        </div>
        <div className="flex gap-5">
          <span>✔</span>
          <div>
            I have read and understood the
            <a href="https://smehealthcheck.credilinq.ai/terms-and-conditions">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsConditionsForm;
