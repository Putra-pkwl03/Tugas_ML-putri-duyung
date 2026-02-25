import mlbbHeroData from "./data.jsx";  
import MLCard from "./MLCard.jsx";

function App() {
  return (
    <div className="d-flex flex-wrap gap-3">
      {mlbbHeroData.map((hero) => (
        <MLCard key={hero.id} data={hero} />
      ))}
    </div>
  );
}

export default App;