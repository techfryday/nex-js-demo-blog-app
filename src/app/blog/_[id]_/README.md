#### Article Component
- This component is a React Server Component (RSC)
- That means the component is getting rendered fully before it reaches to the browser.
- That means though the component is loading dynamic data yet no fetch/xhr request for the REST API is visible in the browser devtools.

#### generateMetadata() Function
- Built-in function in Next.js
- Returns a metadata object.
- Unlike exporting `const metadata` variable this function is used to generate dynamic metadata.
- In this case blog article's title, image, description, etc.

#### getArticle() Function
- This is a user-defined function which fetches the article by sending an API request.

> When multiple functions are sending the same fetch() request, Next.JS Memoises the API Request to avoid multiple calls to the API.

### Static Site Generation
If we build the app without `generateStaticParams()` and look into `.next/server/app/blog/` there will be no html file present.

#### generateStaticParams() Function
- As soon as we implement the generateStaticParams() Function and return an array of params. For all of those params the static pages will be generated in `.next/server/app/blog/` directory.
- For example: 1.html, 3.html
- These static pages can be used for CDN.