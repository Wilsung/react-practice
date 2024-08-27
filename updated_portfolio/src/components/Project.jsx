export default function Project({ title, description, src, stack, link, alt }) {
  return (
    <article className="flex md:flex-row flex-col justify-start *:mx-4">
      <a
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="mb-4 w-4/6 md:w-72 hover:opacity-75"
      >
        <img
          src={src}
          alt={alt}
          className="w-full"
        />
      </a>
      <div className="project_title pl-[2px] flex-1">
        <h3>
          <a href={link} target="_blank" rel="noreferrer noopener" className="hover:text-slate-500">
            {title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 mb-1 translate-y-px"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </h3>
        <p className="text-stone-200 mb-4">{description}</p>
        <div className="flex flex-wrap">
          {stack.map((technology) => (
            <span className="project_tag" key={`${title}+${technology}`}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
