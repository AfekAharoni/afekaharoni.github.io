import Reveal from "./Reveal";

type Props = { index: string; label: string; title: string; subtitle?: string };

export default function SectionHeading({ index, label, title, subtitle }: Props) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">
        <span className="eyebrow-index">{index}</span>
        <span className="eyebrow-line" />
        {label}
      </p>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </Reveal>
  );
}
