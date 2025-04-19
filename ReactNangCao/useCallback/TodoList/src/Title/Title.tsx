import React from "react";
type TitleProps = {
  address: {
    street: string;
  };
  handleClickTitle: (value: string) => void;
};

function Title(props: TitleProps) {
  console.log(props.handleClickTitle);
  return (
    <div>
      <h1 className="text-2xl font-bold text-teal-600 text-center">Todo APP</h1>
    </div>
  );
}

// function equal(prevProps: TitleProps, nextProps: TitleProps) {
//   return prevProps.address.street === nextProps.address.street ? true : false;
// }
export default React.memo(Title);
