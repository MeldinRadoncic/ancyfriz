import { Helmet } from 'react-helmet';

function Meta(props = {}) {
  const {
    title = "Ahcy Friz Salon Ljepote samo za vas",
    description = "Ahcy Friz Salon",
    url = "https://www.ancyfriz.com/",
    icon = "./favicon.ico",
    author = "Anida Imamović",
    canonical = "https://www.ancyfriz.com/",
    ogTitle = "Ancy Friz Salon Ljepote samo za vas",
    ogDescription = "Ahcy Friz Salon",
    ogImage = "/logo.svg",
    ogUrl = "https://www.ancyfriz.com",
    ogType = "website",
    ogSiteName = "Ahcy Friz Salon",
    ogLocale = "en_US",
    ogArticleAuthor = "App Wizard",
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
