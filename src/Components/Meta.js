import { Helmet } from 'react-helmet';

function Meta(props = {}) {
  const {
    title = "Profesionalno Stiliziranje i Farbanje Kose u Sarajevu | Ancy Friz",
    description = "Otkrijte stručne frizerske usluge u Sarajevu sa Ancy Friz. Nudimo balayage, farbanje kose i moderne frizure za žene, muškarce i djecu. Posjetite nas na Paromlinskoj 33 već danas!",
    url = "https://www.ancyfriz.com/",
    icon = "./favicon.ico",
    author = "Anida Imamović",
    canonical = "https://www.ancyfriz.com/",
    ogTitle = "Profesionalno Stiliziranje i Farbanje Kose u Sarajevu | Ancy Friz",
    ogDescription = "Otkrijte stručne frizerske usluge u Sarajevu sa Ancy Friz. Nudimo balayage, farbanje kose i moderne frizure za žene, muškarce i djecu. Posjetite nas na Paromlinskoj 33 već danas!",
    ogImage = "/logo.svg",
    ogUrl = "https://www.ancyfriz.com",
    ogType = "website",
    ogSiteName = "Ancy Friz Salon",
    ogLocale = "en_US",
    ogArticleAuthor = "Ancy Friz",
    index = "index",
    follow = "follow",
  } = props;

  return (
    <Helmet>
      <meta name="organization" content="Ancy Friz Salon" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="url" content={url} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={icon} />
      <link rel="canonical" href={canonical || url} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content={ogType} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:creator" content={ogArticleAuthor} />
      <meta name="twitter:image:alt" content={ogTitle} />
      <meta name="robots" content={`${index}, ${follow}`} />
    </Helmet>
  );
}

export default Meta;
