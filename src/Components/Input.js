export default function Input({
  value,
  type,
  name,
  placeholder,
  children,
  onChange,
}) {
  return (
    <div className="inputWrapper">
      <input
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      {children}
    </div>
  );
}
