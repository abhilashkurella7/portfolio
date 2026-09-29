import Reveal from './Reveal'

export default function SectionHeading({ index, eyebrow, title, sub, id }) {
  return (
    <Reveal>
      <p className="eyebrow">
        {index} — {eyebrow}
      </p>
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {sub ? <p className="section-sub">{sub}</p> : null}
    </Reveal>
  )
}
