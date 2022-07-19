=== React flags ===

A library that adds react flags in 2 form factors on the client side:

```
import Flag from 'react-flagsy'

<Flag formFactor='normal|square' countryCode='AU' size=24/>
```

Defaults to normal of size 24

Issues:

SSR not supported at the moment taking PRs
ISO2 Country code only
