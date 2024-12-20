const FormInput = ({label, name, type, defaultValue, size}) => {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        name={name} 
        defaultValue={defaultValue}
        className={`input input-bordered w-full max-w-xs ${size}`}
      />

    </label>
  );
};

export default FormInput;
