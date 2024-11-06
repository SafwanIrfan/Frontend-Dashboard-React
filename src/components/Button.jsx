const Button = ({
   color,
   bgColor,
   size,
   text,
   borderRadius,
   customFunction,
}) => {
   return (
      <button
         style={{ color, backgroundColor: bgColor, borderRadius }}
         className={`text-${size} p-3 hover:drop-shadow-xl`}
         onClick={customFunction}
      >
         {text}
      </button>
   );
};

export default Button;
