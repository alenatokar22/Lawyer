import Data from "../data.json";

const list = Data;
const search = list.physical.physical__title;

const Physical = () => {
  return (
    <div className="container">
      <h1 id="physical">{search.title}</h1>
      <div className="physical">
        <div className="family">
          <h2 className="family__title">{search.family.title}</h2>
          <ul className="family__item">
            {search.family.name.map((familyElement, index) => (
              <li className="family__list" key={"family" + index}>
                {familyElement}
              </li>
            ))}
          </ul>
        </div>
        <div className="land">
          <h2 className="land__title">{search.land.title}</h2>
          <ul className="land__item">
            {search.land.name.map((landElement, index) => (
              <li className="land__list" key={"land" + index}>
                {landElement}
              </li>
            ))}
          </ul>
        </div>
        <div className="working">
          <h2 className="working__title">{search.working.title}</h2>
          <ul className="working__item">
            {search.working.name.map((workingElement, index) => (
              <li className="working__list" key={"working" + index}>
                {workingElement}
              </li>
            ))}
          </ul>
        </div>
        <div className="private">
          <h2 className="private__title">{search.private.title}</h2>
          <ul className="private__item">
            {search.private.name.map((privateElement, index) => (
              <li className="private__list" key={"private" + index}>
                {privateElement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Physical;
