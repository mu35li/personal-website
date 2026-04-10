<script setup>
import { RouterLink } from 'vue-router'
import { formatPostalAddress, legal } from '../config/legal.js'
import SiteFooter from '../components/SiteFooter.vue'

const addressLines = formatPostalAddress()
const hmbfdUrl = 'https://datenschutz-hamburg.de'
const githubPrivacyUrl = 'https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement'
</script>

<template>
  <div>
    <nav class="mb-8">
      <RouterLink
        class="inline-flex items-center gap-2 rounded border border-retro-teal/70 px-3 py-1 text-sm text-retro-teal transition-all duration-300 hover:-translate-y-0.5 hover:bg-retro-teal/15 hover:shadow-neon"
        to="/"
      >
        ← Zurück zur Startseite
      </RouterLink>
    </nav>

    <header class="mb-8 border-b-2 border-dashed border-retro-pink pb-6">
      <h1 class="font-display text-2xl text-retro-yellow text-glow md:text-3xl">Datenschutzerklärung</h1>
      <p class="mt-3 text-sm text-purple-200">Informationen gemäß Art. 13 DSGVO</p>
    </header>

    <article class="legal-content space-y-8 text-purple-100">
      <section class="retro-card rounded-xl border-2 border-retro-teal/70 bg-black/20 p-6">
        <h2 class="legal-heading">1. Verantwortlicher</h2>
        <p class="mb-4 leading-7">
          Verantwortlich für die Datenverarbeitung auf dieser persönlichen Website bin ich:
        </p>
        <address class="not-italic leading-7">
          <span v-for="(line, index) in addressLines" :key="index">
            {{ line }}<br />
          </span>
        </address>
        <p class="mt-4 leading-7">
          Telefon:
          <a class="legal-link" :href="`tel:${legal.phone}`">{{ legal.phoneDisplay }}</a
          ><br />
          E-Mail:
          <a class="legal-link" :href="`mailto:${legal.email}`">{{ legal.email }}</a>
        </p>
      </section>

      <section class="retro-card rounded-xl border-2 border-retro-pink/70 bg-black/20 p-6">
        <h2 class="legal-heading">2. Allgemeines</h2>
        <p class="leading-7">
          Diese Website dient ausschließlich der persönlichen Darstellung. Es werden keine Cookies zu
          Analyse- oder Marketingzwecken gesetzt und keine Tracking-Tools eingesetzt. Schriftarten werden
          lokal ausgeliefert; es findet keine Einbindung externer Dienste wie Google Fonts statt.
        </p>
      </section>

      <section class="retro-card rounded-xl border-2 border-retro-yellow/70 bg-black/20 p-6">
        <h2 class="legal-heading">3. Hosting</h2>
        <p class="leading-7">
          Diese Website wird über GitHub Pages bereitgestellt. Anbieter ist die GitHub, Inc., 88 Colin P.
          Kelly Jr. St, San Francisco, CA 94107, USA. Beim Aufruf der Website werden in Server-Logfiles
          insbesondere Ihre IP-Adresse, Datum und Uhrzeit der Anfrage, die aufgerufene URL, der Referrer
          sowie Browser- und Betriebssysteminformationen verarbeitet.
        </p>
        <p class="mt-4 leading-7">
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
          der technisch fehlerfreien Bereitstellung der Website). Weitere Informationen finden Sie in der
          Datenschutzerklärung von GitHub:
          <a class="legal-link" :href="githubPrivacyUrl" rel="noopener noreferrer" target="_blank">{{
            githubPrivacyUrl
          }}</a
          >. Eine Übermittlung in die USA kann auf Grundlage geeigneter Garantien gemäß Art. 46 DSGVO
          erfolgen.
        </p>
      </section>

      <section class="retro-card rounded-xl border-2 border-retro-purple/70 bg-black/20 p-6">
        <h2 class="legal-heading">4. Kontakt</h2>
        <p class="leading-7">
          Wenn Sie mich per E-Mail oder Telefon kontaktieren, verarbeite ich die von Ihnen mitgeteilten
          Daten (z. B. Name, Kontaktdaten, Inhalt der Nachricht), um Ihre Anfrage zu bearbeiten. Die
          Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht,
          sobald die Anfrage abschließend bearbeitet ist und keine gesetzliche Aufbewahrungspflicht
          entgegensteht.
        </p>
      </section>

      <section class="retro-card rounded-xl border-2 border-retro-teal/70 bg-black/20 p-6">
        <h2 class="legal-heading">5. Ihre Rechte</h2>
        <p class="leading-7">Sie haben gegenüber mir folgende Rechte:</p>
        <ul class="mt-4 list-inside list-disc space-y-2 leading-7">
          <li>Auskunft (Art. 15 DSGVO)</li>
          <li>Berichtigung (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>
            Widerspruch gegen die Verarbeitung (Art. 21 DSGVO), soweit diese auf Art. 6 Abs. 1 lit. f
            DSGVO beruht
          </li>
        </ul>
        <p class="mt-4 leading-7">
          Hierzu sowie zu weiteren Fragen zum Datenschutz können Sie sich jederzeit an mich wenden. Sie
          haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig in
          Hamburg ist der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit,
          Ludwig-Erhard-Str. 22, 7. OG, 20459 Hamburg,
          <a class="legal-link" :href="hmbfdUrl" rel="noopener noreferrer" target="_blank">{{
            hmbfdUrl
          }}</a
          >.
        </p>
      </section>
    </article>

    <SiteFooter />
  </div>
</template>
