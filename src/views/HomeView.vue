<script setup>
import SiteFooter from '../components/SiteFooter.vue'
</script>

<template>
  <div>
    <header class="mb-10 border-b-2 border-dashed border-retro-pink pb-8 animate-fade-in-up [animation-delay:120ms]">
      <p class="mb-4 text-sm uppercase tracking-[0.3em] text-retro-teal animate-neon-pulse">
        Senior Software Engineer
      </p>
      <h1 class="font-display text-3xl leading-relaxed text-retro-yellow md:text-4xl text-glow animate-title-shimmer">
        Julian Deinert
      </h1>
      <p class="mt-6 max-w-2xl text-base text-purple-100">
        Senior Software Engineer based in Hamburg, building scalable products that solve real user
        problems and create measurable business value.
      </p>
    </header>

    <section class="grid gap-6 md:grid-cols-2">
      <article class="retro-card retro-card-entry retro-card-entry-1 rounded-xl border-2 border-retro-teal/70 bg-black/20 p-6">
        <h2 class="mb-4 font-display text-lg text-retro-teal">About Me</h2>
        <p class="leading-7 text-purple-100">
          I work across the stack from discovery and technical design to delivery, iteration, and
          long-term maintainability. I make pragmatic architecture decisions and collaborate closely with
          product, business, and design teams to ship reliable software efficiently.
        </p>
      </article>

      <article class="retro-card retro-card-entry retro-card-entry-2 rounded-xl border-2 border-retro-pink/70 bg-black/20 p-6">
        <h2 class="mb-4 font-display text-lg text-retro-pink">Core Skills</h2>
        <ul class="skills-grid grid grid-cols-2 gap-3 text-sm text-purple-100">
          <li class="rounded border border-retro-purple/50 px-3 py-2">JavaScript</li>
          <li class="rounded border border-retro-purple/50 px-3 py-2">TypeScript</li>
          <li class="rounded border border-retro-purple/50 px-3 py-2">Node.js</li>
          <li class="rounded border border-retro-purple/50 px-3 py-2">Vue.js</li>
          <li class="rounded border border-retro-purple/50 px-3 py-2">React.js</li>
          <li class="rounded border border-retro-purple/50 px-3 py-2">Tailwind CSS</li>
          <li class="rounded border border-retro-purple/50 px-3 py-2">AWS + Terraform</li>
          <li class="rounded border border-retro-purple/50 px-3 py-2">REST APIs</li>
        </ul>
      </article>
    </section>

    <section class="mt-8 animate-fade-in-up [animation-delay:420ms]">
      <h2 class="mb-4 font-display text-lg text-retro-yellow">Professional Highlights</h2>
      <div class="grid gap-4 md:grid-cols-3">
        <article class="retro-card rounded-xl border border-retro-yellow/60 bg-black/25 p-5">
          <h3 class="font-bold text-retro-yellow">Raan GmbH (2024-Present)</h3>
          <p class="mt-2 text-sm text-purple-100">
            Tech lead for a 3-engineer team on Circular-Pro, delivering real-time payments and online
            notary workflows that increased conversion rates.
          </p>
        </article>
        <article class="retro-card rounded-xl border border-retro-yellow/60 bg-black/25 p-5">
          <h3 class="font-bold text-retro-yellow">Freelance (2022-2024)</h3>
          <p class="mt-2 text-sm text-purple-100">
            Audited and secured production web apps, and led monolith-to-microservice migrations on AWS
            with a focus on high availability and low operational cost.
          </p>
        </article>
        <article class="retro-card rounded-xl border border-retro-yellow/60 bg-black/25 p-5">
          <h3 class="font-bold text-retro-yellow">Exporo AG (2019-2021)</h3>
          <p class="mt-2 text-sm text-purple-100">
            Automated legal document generation, built event-driven audit logs for compliance, and improved
            performance while reducing infrastructure costs with serverless AWS.
          </p>
        </article>
      </div>
    </section>

    <section class="mt-8 grid gap-6 md:grid-cols-2 animate-fade-in-up [animation-delay:520ms]">
      <article class="retro-card rounded-xl border-2 border-retro-teal/70 bg-black/20 p-6">
        <h2 class="mb-4 font-display text-lg text-retro-teal">Education & Languages</h2>
        <ul class="space-y-2 text-purple-100">
          <li>M.Sc. Computer Science, University of Hamburg (1.47)</li>
          <li>B.Sc. Computer Science, University of Hamburg</li>
          <li>German (native) and English (fluent)</li>
        </ul>
      </article>
      <article class="retro-card rounded-xl border-2 border-retro-pink/70 bg-black/20 p-6">
        <h2 class="mb-4 font-display text-lg text-retro-pink">Earlier Experience</h2>
        <ul class="space-y-2 text-purple-100">
          <li>Full-Stack Developer at Zinsland / Civum (2018-2019)</li>
          <li>Co-founder & CTO at Jobshift UG (2017-2019)</li>
          <li>Software Developer at Statusgreen GmbH (2014-2017)</li>
        </ul>
      </article>
    </section>

    <SiteFooter show-tagline />
  </div>
</template>
