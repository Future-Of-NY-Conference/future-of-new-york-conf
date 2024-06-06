import Head from "next/head"

const HeadMeta = ({
  title = "The Future Of New York",
  description = "An invite-only working conference for elected/appointed officials and ambitious civic thinkers.",
  img = "https://www.futureofnewyork.org/images/og-image.png",
  url = "https://www.futureofnewyork.org",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
      <meta name="description" content={description} />

      {/* OpenGraph Card */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={img} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Future Of New York Conf" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content="futureofnewyork.org" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {/* Fathom analytics */}
      <script src="https://cdn.usefathom.com/script.js" data-site="AFEXYXCV" defer></script>
    </Head>
  )
}

export default HeadMeta
