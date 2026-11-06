import { HeartHandshake } from "lucide-react";
import { VOLUNTEER } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Volunteer() {
  return (
    <section id="volunteer" className="section container">
      <SectionHeading index="06" label="Volunteering" title="Giving back." />
      {VOLUNTEER.map((v) => (
        <Reveal key={v.title}>
          <div className="card volunteer-card">
            <div className="edu-icon">
              <HeartHandshake size={20} />
            </div>
            <div>
              <div className="exp-head">
                <div>
                  <h3 className="card-title">{v.title}</h3>
                  <p className="card-sub">{v.organization}</p>
                </div>
                <span className="period mono">{v.period}</span>
              </div>
              <p className="card-body">{v.description}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
