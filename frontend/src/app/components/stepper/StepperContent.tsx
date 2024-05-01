import { PropsWithChildren } from "react";

type StepperContentProps = {
  index: number;
  isFinal?: boolean;
};

const StepperContent: React.FC<PropsWithChildren<StepperContentProps>> = ({
  children,
}) => {
  return (
    <div  className="flex ps-3 py-5 w-full gap-8">
      <div className=" border-gray-300 border divide-x-2"></div>
      <div className="h-fit w-full">{children}</div>
    </div>
  );
};

export default StepperContent;
