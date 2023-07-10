import { FunctionComponent, useRef } from "react";
import InputMaska from "react-input-mask";
import { InputMask } from "@react-input/mask";
import "./index.css";
type inputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

interface IInputProps {
  label: string;
  register?: any;
  type: inputType;
  error?: string;
}

export const Input: FunctionComponent<IInputProps> = ({
  label,
  register,
  type,
  error,
}) => {
  return (
    <>
      {(() => {
        switch (type) {
          case "email":
            return (
              <EmailInput
                type={type}
                label={label}
                register={register}
                error={error}
              />
            );
          case "tel":
            return (
              <TelInput
                label={label}
                type={type}
                register={register}
                error={error}
              />
            );
        }
      })()}
      {}
    </>
  );
};

const EmailInput: FunctionComponent<IInputProps> = ({
  label,
  register,
  error,
}) => {
  return (
    <>
      <div className="input">
        <ErrorMessage error={error} />
        <label className="input-label">
          {label}
          <input {...register} />
        </label>
      </div>
    </>
  );
};

const TelInput: FunctionComponent<IInputProps> = ({
  label,
  register,
  error,
}) => {
  return (
    <>
      <div className="input">
        <ErrorMessage error={error} />
        <label className="input-label">
          {label}
          <InputMask
            mask="__-__-__"
            replacement={{ _: /\d/ }}
            showMask
            {...register}
          />
        </label>
      </div>
    </>
  );
};

const ErrorMessage: FunctionComponent<{ error?: string }> = ({ error }) => {
  return (
    <>
      <span className={`input-error ${error && "visible"}`}>{error}</span>
    </>
  );
};
