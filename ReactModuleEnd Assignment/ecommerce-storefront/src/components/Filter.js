export default function Filter({ category, setCategory, products }) {
  // Create a unique list of categories
  const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
  const categories = ['All', ...uniqueCategories];

  // Capitalize category names for display
  const formatLabel = (label) =>
    label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();

  return (
    <div>
      <label htmlFor="category-select" style={{ marginRight: '8px' }}>
        Filter by Category:
      </label>
      <select
        id="category-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          padding: '0.5rem',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {formatLabel(c)}
          </option>
        ))}
      </select>
    </div>
  );
}
