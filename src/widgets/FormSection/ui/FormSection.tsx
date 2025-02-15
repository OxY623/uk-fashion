import { useState } from "react";

type Props = {
  classname?: string;
};

const FormSection = ({ classname }: Props) => {
  const [value, setValue] = useState("");

  const handleEnterValue = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value) {
      alert(`Subscribed with: ${value}`);
      setValue("");
    }
  };

  return (
    <div className={`${classname}`}>
      <div>
        <h3>Subscribe to our Newsletter</h3>
        <p>
          We got the best that you can wear hat you can wear a dres a dress.{" "}
        </p>
        <form onSubmit={handleSubmit}>
          <input
            value={value}
            onChange={(e) => handleEnterValue(e)}
            type="email"
            placeholder="Enter your email address"
          />
          <input type="submit" value="Subscribe Now" />
        </form>
      </div>
    </div>
  );
};

export { FormSection };
