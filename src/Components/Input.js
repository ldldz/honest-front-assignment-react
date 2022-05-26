export default function Input({ value, type, name, placeholder, children }) {
  return (
    <div className="inputWrapper">
      <input value={value} type={type} name={name} placeholder={placeholder} />
      {children}
    </div>
  );
}
