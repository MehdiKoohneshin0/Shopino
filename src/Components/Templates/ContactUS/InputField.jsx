const InputField = ({
  label,
  onChange,
  fullWidth,
  placeholder,
  value,
  name,
  type = "text",
}) => {
  const cardClassName = "*:block w-full space-y-2.5 ".concat(
    fullWidth ? "col-span-2" : null,
  );
  const uniqueID = crypto.randomUUID();

  return (
    <div className={cardClassName}>
      {label && (
        <label
          htmlFor={uniqueID}
          className="text-xs select-none text-neutral-500"
        >
          {label}:
        </label>
      )}
      <input
        type={type}
        value={value}
        name={name}
        placeholder={
          placeholder ? placeholder : "لطفا این فیلد را تکمیل بفرمایید."
        }
        id={uniqueID}
        onChange={onChange}
        className="contact-input-field w-full"
      />
    </div>
  );
};

export default InputField;
