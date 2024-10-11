import { ThreeDots  } from "react-loader-spinner";
import css from "../Loader/Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div>
       <ThreeDots color="gray" height={80} width={80} wrapperClass={css.loader} />
    </div>
  );
};

export default Loader;