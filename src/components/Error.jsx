const Error = ({children}) => {
  return (
    <div className="bg-red-700 text-white font-bold p-3 rounded-lg uppercase mb text-center">
      <p>{children}</p>
    </div>
  );
};

export default Error;
