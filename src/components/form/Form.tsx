import { FC, MouseEvent, useState, ChangeEvent, useCallback } from "react";
import { observer } from "mobx-react-lite";
import { useDataStore } from "../../store/context";
import "./form.scss";

export const Form: FC = observer(() => {
  const { setFullname } = useDataStore();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const formClick = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();

      setFullname(`${name} ${surname}`);
      clearForm();
    },
    [name, surname, setFullname]
  );

  const clearForm = () => {
    setName("");
    setSurname("");
  };

  return (
    <form className="form">
      <fieldset className="form__container">
        <legend className="form__name">Форма</legend>
        <p className="form__item">
          <label className="form__item-label">Имя</label>
          <input
            className="form__item-field"
            required
            type="text"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        </p>
        <p className="form__item">
          <label className="form__item-label">Фамилия</label>
          <input
            className="form__item-field"
            required
            type="text"
            value={surname}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSurname(e.target.value)
            }
          />
        </p>
        <button className="form__button" onClick={formClick}>
          Готово
        </button>
      </fieldset>
    </form>
  );
});
