import { Button } from "./Button";

type Props = {
  subTitle: string;
  title: string;
  description: string;
  btnText: string;
};

export const UspsColBox = ({
  subTitle,
  title,
  description,
  btnText,
}: Props) => {
  return (
    <div className="">
      <p className="text-xl mb-3">{subTitle}</p>
      <h1 className="mb-3">{title}</h1>
      <p className="text-subTextGray text-base font-normal leading-6 mb-4 ">
        {description}
      </p>
      <Button size="medium">{btnText}</Button>
    </div>
  );
};
