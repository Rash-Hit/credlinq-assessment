type StepperItemProps = {
  index: number;
  title: string;
};

function StepperItem({ index, title }: StepperItemProps) {
  return (
    <div className="flex justify-start" data-hs-stepper-nav-item={`{ "index": ${index} }`}>
      <div className="flex-col">
        <span className="hs-stepper-active:bg-purple-600 hs-stepper-active:text-white flex-purple-600 hs-stepper-error:bg-red-600 size-6 flex justify-center items-center flex-shrink-0 bg-[#a7a7a7] font-normal text-sm text-white rounded-full mt-3">
          <span className="">
            {index}
          </span>
          <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block">
            <use href="check.svg#default" />
          </svg>
        </span>
      </div>
      <div className="grow py-2 ms-4 bg-[#601a79] text-white rounded-md">
        <span className="block text-lg font-medium ps-3">{title}</span>
      </div>
    </div>
  );
}

export default StepperItem;
