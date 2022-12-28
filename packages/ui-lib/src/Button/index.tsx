// type ButtonProps = {
//     children:any,
//     functionCall:()=>void;
// }

// function Button({children,...props}:ButtonProps){
//     return (
//         <button type={"button"} className="bg-green-500 font-bold text-xl p-3" {...props}>
//            {children}
//         </button>
//     )
// }

import * as React from 'react';

interface ButtonProps {
  onClick: () => void;
  children:string
}

class Button extends React.Component<ButtonProps> {
  render() {
    const { onClick, children } = this.props;
    return (
      <button onClick={onClick} className="bg-green-500 font-bold text-xl p-3">
        {children}
      </button>
    );
  }
}

export default Button;

