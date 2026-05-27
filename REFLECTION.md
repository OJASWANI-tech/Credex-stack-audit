# Engineering Reflection
## Key Engineering Insights
Building a completely client-side audit engine demonstrated that complex SaaS subscription heuristics can be computed safely without the overhead of backend server synchronization. By computing matrices locally, we minimized user data exposure and dropped execution latency to sub-60ms metrics.
## Challenges & Solutions
* **The Challenge:** Handling multi-route fallbacks on static single-page deployments.
* **The Solution:** Implemented a targeted `netlify.toml` forwarding configuration to ensure all page asset requests route smoothly to the client-side compilation entry.
