1. `_component/` Directory: This directory is not a part of App Routing. Since prefix is '_' i.e. Underscore this dir gets excluded from app routing and can be used to store components.

2. `site/` Directory
    - Since we want a common `layout` for multiple pages, the `/about` and `/contact` routes are children of `/site` route.
    - `site/` contains `site/layout.jsx` encapsulating both `about` and `contact`