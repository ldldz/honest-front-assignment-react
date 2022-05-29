export default function Input({ inputProps, children }) {
  return (
    <div className="inputWrapper">
      <input {...inputProps} />
      {children}
    </div>
  );
}
