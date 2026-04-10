<script setup>
import { RouterLink } from 'vue-router'
import { formatPostalAddress, legal } from '../config/legal.js'
import SiteFooter from '../components/SiteFooter.vue'

const addressLines = formatPostalAddress()
const odrUrl = 'https://ec.europa.eu/consumers/odr/'
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
      <h1 class="font-display text-2xl text-retro-yellow text-glow md:text-3xl">Impressum</h1>
      <p class="mt-3 text-sm text-purple-200">Angaben gemäß § 5 TMG und § 18 Abs. 2 MStV</p>
    </header>

    <article class="legal-content space-y-8 text-purple-100">
      <section class="retro-card rounded-xl border-2 border-retro-teal/70 bg-black/20 p-6">
        <h2 class="legal-heading">Anbieter</h2>
        <address class="not-italic leading-7">
          <span v-for="(line, index) in addressLines" :key="index">
            {{ line }}<br />
          </span>
        </address>
      </section>

      <section class="retro-card rounded-xl border-2 border-retro-pink/70 bg-black/20 p-6">
        <h2 class="legal-heading">Kontakt</h2>
        <p class="leading-7">
          Telefon:
          <a class="legal-link" :href="`tel:${legal.phone}`">{{ legal.phoneDisplay }}</a
          ><br />
          E-Mail:
          <a class="legal-link" :href="`mailto:${legal.email}`">{{ legal.email }}</a>
        </p>
      </section>

      <section class="retro-card rounded-xl border-2 border-retro-purple/70 bg-black/20 p-6">
        <h2 class="legal-heading">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <address class="not-italic leading-7">
          <span v-for="(line, index) in addressLines" :key="`mstv-${index}`">
            {{ line }}<br />
          </span>
        </address>
      </section>

      <section class="retro-card rounded-xl border-2 border-retro-teal/70 bg-black/20 p-6">
        <h2 class="legal-heading">EU-Streitschlichtung</h2>
        <p class="leading-7">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
          <a class="legal-link" :href="odrUrl" rel="noopener noreferrer" target="_blank">{{ odrUrl }}</a
          >. Meine E-Mail-Adresse findest du oben im Impressum.
        </p>
      </section>

      <section class="retro-card rounded-xl border-2 border-retro-pink/70 bg-black/20 p-6">
        <h2 class="legal-heading">Verbraucherstreitbeilegung</h2>
        <p class="leading-7">
          Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section class="retro-card rounded-xl border-2 border-retro-yellow/70 bg-black/20 p-6">
        <h2 class="legal-heading">Haftung für Inhalte</h2>
        <p class="leading-7">
          Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach
          den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter
          jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
          oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p class="mt-4 leading-7">
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
          allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
          ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
        </p>
      </section>

      <section class="retro-card rounded-xl border-2 border-retro-teal/70 bg-black/20 p-6">
        <h2 class="legal-heading">Haftung für Links</h2>
        <p class="leading-7">
          Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen
          Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für
          die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
          verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
          Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
          erkennbar.
        </p>
        <p class="mt-4 leading-7">
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
          Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
          Rechtsverletzungen werde ich derartige Links umgehend entfernen.
        </p>
      </section>

      <section class="retro-card rounded-xl border-2 border-retro-pink/70 bg-black/20 p-6">
        <h2 class="legal-heading">Urheberrecht</h2>
        <p class="leading-7">
          Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
          außerhalb der Grenzen des Urheberrechts bedürfen meiner schriftlichen Zustimmung. Downloads
          und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p class="mt-4 leading-7">
          Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden, werden die Urheberrechte
          Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Solltest du
          trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte
          umgehend entfernen.
        </p>
      </section>
    </article>

    <SiteFooter />
  </div>
</template>
