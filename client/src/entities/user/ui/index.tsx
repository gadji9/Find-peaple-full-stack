import { FunctionComponent } from "react";
import "./index.css";

interface IUserCardProps {
  email: string;
  number?: string;
}

export const UserCard: FunctionComponent<IUserCardProps> = ({
  email,
  number,
}) => {
  return (
    <div className="card">
      <h3>Иняормация о пользователе</h3>
      <div>
        <span>Email:</span>
        <span>{email}</span>
      </div>
      <div>
        <span>Номер:</span>
        <span>{number}</span>
      </div>
    </div>
  );
};

export const NotFoundUserCard: FunctionComponent = () => {
  return (
    <div className="card">
      <h3>Поьзователей не найдено</h3>
    </div>
  );
};
