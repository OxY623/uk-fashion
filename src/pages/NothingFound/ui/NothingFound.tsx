import { Button } from "@shared/ui/Button/Button";
import { Link } from "react-router";

const NothingFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="text-gray-800 text-4xl font-bold">Такой страницы нет</h1>
      <p className="text-gray-600 mt-2">
        Но вы можете вернуться на главную страницу.
      </p>
      <Link
        to="/"
        className="decoration-gray-700 pointer rounded-lg px-4 py-2 text-black underline-offset-2 hover:underline"
      >
        На главную
      </Link>
      <Button
        onClick={() => history.back()}
        classname="text-gray-700 ml-2 rounded-lg border px-4 py-2"
      >
        Назад
      </Button>
    </div>
  );
};
export default NothingFound;
