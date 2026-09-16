# meeting-bot-site

**Live:** https://meetingbot.selfserved.ai

Public landing page for the Meeting Bot concept — an AI that joins meetings as a
participant and drives them under a Project Manager, Systems Architect, or Engineer
persona, producing live plans and diagrams as the conversation happens.

Full concept write-up lives in the private [meeting-bot-core](https://github.com/rickpmpers/meeting-bot-core)
repo and the shared `meeting-bot-concept/CONCEPT.md` working doc.

## Structure

- `index.html` — single-page landing site
- `styles.css` — styling

## Deploy

Deployed as a Cloudflare Worker (`worker.js`, embeds `index.html`/`styles.css` inline)
on the `selfserved.ai` Cloudflare account, served at `meetingbot.selfserved.ai` via a
Worker route and a dedicated public Access policy (bypassing the account's default
wildcard Google-SSO gate on `*.selfserved.ai`).

To redeploy after editing `index.html`/`styles.css`, update the `HTML`/`CSS` constants
in `worker.js` to match and push the script with `wrangler deploy` or the Cloudflare
API (`PUT /accounts/:id/workers/scripts/meeting-bot-site`).
