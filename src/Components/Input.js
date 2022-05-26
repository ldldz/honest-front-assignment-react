export default function Input({
  value,
  type,
  name,
  maxLength,
  pattern,
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
        maxLength={maxLength}
        pattern={pattern}
        placeholder={placeholder}
        onChange={onChange}
      />
      {children}
    </div>
  );
}
