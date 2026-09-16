const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Meeting Bot — an AI that runs the meeting, not just notes it</title>
<meta name="description" content="A meeting bot that joins as a real participant and drives the meeting under a Project Manager, Systems Architect, or Engineer persona — building live plans and diagrams as the team talks.">
<link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="hero">
    <nav>
      <div class="brand">Meeting Bot</div>
      <a class="cta-link" href="#contact">Get in touch</a>
    </nav>
    <div class="hero-content">
      <p class="eyebrow">A participant, not a transcript</p>
      <h1>It doesn't just listen to the meeting. It runs it.</h1>
      <p class="lede">
        Most meeting bots summarize after the fact. This one joins live, picks a role —
        Project Manager, Systems Architect, or Engineer — and does what a sharp person in
        that seat would do: push for commitments, draw the diagram as you talk, and call out
        the gaps before they become rework.
      </p>
      <a class="cta-primary" href="#personas">See the personas</a>
    </div>
  </header>

  <main>
    <section id="personas" class="personas">
      <h2>Three personas. One bot.</h2>
      <p class="section-intro">Same underlying engine — listens, models the conversation, produces a live artifact, asks pointed questions. What it asks and what it builds changes with the hat it's wearing.</p>

      <div class="persona-grid">
        <article class="persona-card">
          <div class="persona-tag">01 — Project Manager</div>
          <h3>Forces the plan into the open</h3>
          <p>Builds a live Gantt chart and task list as the team talks. Pushes vague commitments
             into real dates. Interrogates dependencies instead of accepting them:</p>
          <blockquote>"You've marked B as dependent on A — is that fully sequential, can part of it run in parallel, or should A split into A.1/A.2 so B can start after the first milestone?"</blockquote>
          <p>Flags overload before it bites: <em>"Joe now has six open items across three workstreams — is that realistic?"</em></p>
        </article>

        <article class="persona-card">
          <div class="persona-tag">02 — Systems Architect</div>
          <h3>Draws it while you describe it</h3>
          <p>Turns spoken system/interface descriptions into a live architecture diagram. Take
             corrections mid-call, out loud:</p>
          <blockquote>"That arrow should go from A to C, not B." · "Name that interface get_customer_info."</blockquote>
          <p>Catches architectural gaps as they're spoken: <em>"You said B isn't the system of record for customer data — but you're calling get_customer_info directly on it. Where's that data actually coming from?"</em></p>
        </article>

        <article class="persona-card">
          <div class="persona-tag">03 — Engineer</div>
          <h3>Pressure-tests the design, one level down</h3>
          <p>Takes the architect's diagram and the PM's plan and asks the implementation-level
             questions: edge cases, failure modes, test coverage gaps, library/rate limits —
             then turns agreed scope into a task breakdown that feeds straight back into the plan.</p>
        </article>
      </div>
    </section>

    <section class="how">
      <h2>How it works in the room</h2>
      <ol class="how-steps">
        <li><strong>Listens</strong> — real-time transcription and semantic parsing of the conversation.</li>
        <li><strong>Builds</strong> — maintains a live structured model (task graph, component graph) and renders it as the meeting happens.</li>
        <li><strong>Questions</strong> — asks the persona-appropriate clarifying question at natural pauses, not mid-sentence.</li>
        <li><strong>Takes correction</strong> — anyone in the room can redirect it by name, and the artifact updates immediately.</li>
        <li><strong>Hands off</strong> — the meeting ends with a real artifact: a plan, a diagram, a decision log — not just a transcript.</li>
      </ol>
    </section>

    <section id="contact" class="contact">
      <h2>This is a concept in active development.</h2>
      <p>We're validating the idea with a handful of teams before building. If driving your
         planning and architecture meetings like this sounds useful, we'd like to hear from you.</p>
      <a class="cta-primary" href="mailto:hello@example.com">Get in touch</a>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Meeting Bot. Concept stage.</p>
  </footer>
</body>
</html>`;

const CSS = `:root {
  --ink: #14161a;
  --paper: #faf8f4;
  --accent: #d1502f;
  --accent-soft: #f2d9cf;
  --line: #dcd7cd;
  --muted: #5b5952;
  font-size: 17px;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: "Iowan Old Style", "Palatino Linotype", Georgia, serif;
  color: var(--ink);
  background: var(--paper);
  line-height: 1.55;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1040px;
  margin: 0 auto;
  padding: 28px 24px 0;
}

.brand {
  font-weight: 700;
  letter-spacing: 0.02em;
  font-size: 1.15rem;
}

.cta-link {
  color: var(--ink);
  text-decoration: none;
  border-bottom: 1px solid var(--ink);
  font-size: 0.95rem;
}

.hero {
  border-bottom: 1px solid var(--line);
}

.hero-content {
  max-width: 760px;
  margin: 0 auto;
  padding: 80px 24px 96px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.78rem;
  color: var(--accent);
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  margin: 0 0 18px;
}

h1 {
  font-size: 2.6rem;
  line-height: 1.15;
  margin: 0 0 24px;
  font-weight: 600;
}

.lede {
  font-size: 1.15rem;
  color: var(--muted);
  max-width: 620px;
}

.cta-primary {
  display: inline-block;
  margin-top: 32px;
  padding: 14px 28px;
  background: var(--ink);
  color: var(--paper);
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 2px;
}

main { max-width: 1040px; margin: 0 auto; padding: 0 24px; }

.personas { padding: 96px 0; border-bottom: 1px solid var(--line); }

.personas h2, .how h2, .contact h2 {
  font-size: 1.9rem;
  margin: 0 0 12px;
}

.section-intro {
  color: var(--muted);
  max-width: 620px;
  margin-bottom: 56px;
}

.persona-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.persona-card {
  border: 1px solid var(--line);
  background: white;
  padding: 32px;
  border-radius: 4px;
}

.persona-tag {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 14px;
}

.persona-card h3 {
  margin: 0 0 14px;
  font-size: 1.3rem;
}

.persona-card blockquote {
  margin: 18px 0;
  padding: 14px 18px;
  background: var(--accent-soft);
  border-left: 3px solid var(--accent);
  font-style: italic;
  font-size: 0.95rem;
}

.how { padding: 96px 0; border-bottom: 1px solid var(--line); }

.how-steps {
  max-width: 640px;
  padding-left: 24px;
}

.how-steps li { margin-bottom: 16px; font-size: 1.05rem; }

.contact { padding: 96px 0; text-align: center; }

.contact p {
  max-width: 560px;
  margin: 0 auto 32px;
  color: var(--muted);
}

footer {
  text-align: center;
  padding: 32px 24px;
  color: var(--muted);
  font-size: 0.85rem;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}

@media (max-width: 600px) {
  h1 { font-size: 2rem; }
  .hero-content { padding: 56px 20px 72px; }
}`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/styles.css") {
      return new Response(CSS, { headers: { "content-type": "text/css; charset=utf-8" } });
    }
    return new Response(HTML, { headers: { "content-type": "text/html; charset=utf-8" } });
  },
};
