import { css } from "@emotion/react";
import BeatLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #928656;
`;

function Spinner() {

  return (
    <div className="flex flex-col items-center mt-64">
      <BeatLoader color='#928656' css={override} size={100} />
      <p className="mt-2 text-gold font-poppins text-md font-semibold">Loading this item...</p>
    </div>

  );
}

export default Spinner;