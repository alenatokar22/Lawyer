import Data from "../data.json";

const list = Data;
const search = list.law.law__title;

const Law = () => {
  return (
    <div>
      <h1 id="law">{search.title}</h1>
      <div className="container">
        <div className="content">
          <div className="law__help">
            <h2 className="law__help-title">{search.help.title}</h2>
            <ul className="law__help-item">
              {search.help.name.map((helpElement, index) => (
                <li className="help__list" key={"help" + index}>{helpElement}</li>
              ))}
            </ul>
          </div>
          <div className="economic__affairs">
            <h2 className="economic__affairs-title">{search.title}</h2>
            <ul className="economic__affairs-item">
              {search.economic.name.map((economicElement, index) => (
                <li className="economic__list" key={"economic" + index}>{economicElement}</li>
              ))}
            </ul>
          </div>
          <div className="tax">
            <h2 className="tax__title">Податкові та митні спори</h2>
            <ul className="tax__item">
              {search.tax.name.map((taxElement, index) => (
                <li className="tax__list" key={"tax" + index}>
                  {taxElement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Law;
