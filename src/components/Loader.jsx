import {loader} from "../assets"

export const Loader = ({title}) => (
  <section className="loader-sec flex align-center justify-center column">
    <img src={loader} alt="loader" />
    <h1 className="load-title">{title || "Loading..."}</h1>
  </section>
);


