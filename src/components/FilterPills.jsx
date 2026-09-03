import './FilterPills.css';

export default function FilterPills({ options, active, onChange }) {
  return (
    <div className="filter-pills" role="group" aria-label="Filter by category">
      {options.map(option => (
        <button
          key={option}
          className={`filter-pill ${active === option ? 'filter-pill--active' : ''}`}
          onClick={() => onChange(option)}
          aria-pressed={active === option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
