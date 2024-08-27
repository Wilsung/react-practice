export default function Skills({ title, description, color }) {
  const colorVariants = {
    'red': 'after:bg-[#ff4d5a]',
    'magenta': 'after:bg-[#c58cff]',
    'blue': 'after:bg-[#6ec1e4]',
  }

  return (
    <div className="about_list_container">
      <h3>
        <span className={`background_bar ${colorVariants[color]}`}>{title}</span>
      </h3>
      <div className="about_list_title opacity-100">
        <ul>
          {description &&
            description.map((desc) => <li key={desc}>{desc}</li>)}
        </ul>
      </div>
    </div>
  );
}
