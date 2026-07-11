import Sidebar from "../Components/Sidebar";

export default function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Dashboard</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "15px",
          }}
        >
          <div
            style={{
              background: "#2563eb",
              color: "white",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>Total Observations</h3>
            <h1>0</h1>
          </div>

          <div
            style={{
              background: "#059669",
              color: "white",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>Average Value</h3>
            <h1>0.00</h1>
          </div>
        </div>
      </div>
    </div>
  );
}