import Reveal from './Reveal'

export default function SectionHeading({ index, eyebrow, title, sub, id, accentWord }) {
  return (
    <div className="sec-head">
      <Reveal>
        <p className="sec-tag" aria-hidden="true">
          <span className="num">{index}</span>
          <span className="rule" />
          <span className="name">{eyebrow}</span>
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="sec-title" id={id} style={{ margin: 0 }}>
          {title} {accentWord ? <span className="accent">{accentWord}</span> : null}
        </h2>
      </Reveal>
      {sub ? (
        <Reveal delay={140}>
          <p className="sec-sub">{sub}</p>
        </Reveal>
      ) : null}
    </div>
  )
}
