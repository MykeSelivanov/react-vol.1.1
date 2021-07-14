// Show list of Articles that user added
import { useSelector } from "react-redux";

const ConnectedList = () => {
  const articles = useSelector(state => state.articles);
  return (
    <ul className="list-group list-group-flush">
      {/* map articles */}
      {articles.map(article => (
         <li key={article} className="list-group-item">{article}</li>
      ))}
    </ul>
  );
};
export default ConnectedList;
