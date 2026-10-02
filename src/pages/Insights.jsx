import { Img } from "../components/Img.jsx";
import { S } from "../components/Split.jsx";
const P = [
  "Growing companies rarely have a single bottleneck. A product launch stalls because the right engineer is not hired yet; a hire stalls because the platform behind the role is not ready. Treating talent and technology as separate problems is what slows teams down.",
  "At Cusdex, we work on both sides. Our staffing teams find the people, our development teams build the product, and our HR consultants help shape the processes that keep a growing team working well. One plan, one point of contact.",
  "The practical result is fewer handoffs. Requirements gathered during a search inform the software brief, and delivery timelines inform hiring plans, so each part of the work moves at the same speed.",
  "The key is starting with the outcome. Define what success looks like in six months, then choose the mix of hiring, engineering and HR support that gets you there with the least waste.",
];
export default function Insights() {
  return (
    <main className="ip ins">
      <div className="ihead">
        <h1 className="t64s">
          Talent, Technology and Delivery: Why Growing Teams Need All Three
        </h1>
        <p className="sub">
          How aligning hiring, software development and project delivery helps
          businesses move faster with less friction
        </p>
      </div>
      <div className="iwrap">
        <div className="ihero">
          <Img n="ins1" alt="Meeting" />
        </div>
        {P.map((p, i) => (
          <p className="b20" key={i}>
            {p}
          </p>
        ))}
      </div>
      <div className="g2i">
        <Img n="ins2" alt="Analysis" />
        <Img n="ins3" alt="Employee engagement" />
      </div>
      <div className="iwrap">
        <p className="b20">
          Whether you are scaling a team, shipping a product or building an HR
          function, the businesses that move fastest plan these workstreams
          together instead of in sequence.
        </p>
      </div>
      <h2 className="h32">
        <S>Related Insights</S>
      </h2>
      <div className="g3i">
        {[
          ["r1", "How to Choose Between Contract and Full-Time Hiring"],
          ["r2", "Web or Mobile First? Planning Your Product Launch"],
          ["r3", "Onboarding New Hires: A Practical Checklist"],
        ].map(([im, t]) => (
          <div className="icd" key={t}>
            <Img n={im} alt={t} />
            <h4>{t}</h4>
            <p>Cusdex Team</p>
          </div>
        ))}
      </div>
    </main>
  );
}
