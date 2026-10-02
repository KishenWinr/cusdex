const Page = ({ title, items }) => (
  <main className="ip legal">
    <h1 className="t64">{title}</h1>
    <p className="sub">
      Last updated: 2026. This is a template - have it reviewed before you
      publish.
    </p>
    {items.map(([h, t]) => (
      <section key={h}>
        <h3>{h}</h3>
        <p className="b20">{t}</p>
      </section>
    ))}
  </main>
);
export const Terms = () => (
  <Page
    title="Terms & Conditions"
    items={[
      [
        "Acceptance",
        "By using this website you agree to these terms. If you do not agree, please do not use the site.",
      ],
      [
        "Use of the site",
        "You agree to use the site lawfully and not to misuse, disrupt or attempt to gain unauthorized access to it or its accounts.",
      ],
      [
        "Accounts",
        "You are responsible for keeping your login details safe and for all activity under your account.",
      ],
      [
        "Intellectual property",
        "All content, logos and designs belong to Cusdex Global Services unless stated otherwise and may not be copied without permission.",
      ],
      [
        "Disclaimer",
        "The site is provided as is. We do not guarantee job placements or hiring outcomes.",
      ],
      [
        "Contact",
        "Questions about these terms can be sent to the contact details in the footer.",
      ],
    ]}
  />
);
export const Privacy = () => (
  <Page
    title="Privacy Policy"
    items={[
      [
        "Information we collect",
        "Details you give us, such as your name, e-mail address and messages sent through our forms or when you create an account.",
      ],
      [
        "How we use it",
        "To respond to enquiries, provide account access, improve the site and connect employers with candidates.",
      ],
      [
        "Cookies and storage",
        "We store your theme choice and login state in your browser. You can clear this at any time in your browser settings.",
      ],
      [
        "Sharing",
        "We do not sell your personal information. We share it only with service providers and hiring partners where needed, or when the law requires.",
      ],
      [
        "Security",
        "We take reasonable steps to protect your data, but no online service is completely secure.",
      ],
      [
        "Your rights",
        "You may ask to access, correct or delete your personal information by contacting us.",
      ],
    ]}
  />
);
