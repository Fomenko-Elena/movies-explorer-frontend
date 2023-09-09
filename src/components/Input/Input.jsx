import classNames from "classnames"
import Wrapper from "../Wrapper/Wrapper"
import { Fragment } from "react"
import "./Input.css"

function Input({
  name,
  label,
  placeholder,
  type,
  wide,
  value,
  onChange,
  error,
  required,
  minLength,
  maxLength,
}) {
  return (
    <Wrapper condition={!wide} wrapper={(children) => (
      <div className="input-field">
        {children}
      </div>
    )}>
      <Fragment>
        <label for={name} className={classNames('input-label', { 'input-label_wide': wide })}>{label}</label>
        <input
          className={classNames('input', { 'input_wide': wide })}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
        />
        <span className={classNames('input-error', { 'input-error_wide': wide }, `${name}-error`)}>{error}</span>
      </Fragment>
    </Wrapper>
  )
}

export default Input