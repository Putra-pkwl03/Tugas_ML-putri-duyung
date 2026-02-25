export default function MLCard({ data }) {
  return (
    <div className="card mb-4" style={{ width: "12rem" }}>
      <img
        src={data.image}       
        className="card-img-top"
        alt={data.name}
      />
      <div className="card-body">
        <h5>{data.name}</h5>
        <p>{data.description}</p>
      </div>
    </div>
  );
}