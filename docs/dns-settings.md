# Configuring Emory Hacks Domain

Render will automatically assign a URL to your new website (e.g. <https://emory-hacks-2025-fall.onrender.com>), but you would want to use the Emory Hacks domain (`emoryhacks.com`) for better accessibility and SEO. Here’s how to assign the domain to your new website:

If `emoryhacks.com` is already assigned to another website, you need to remove it from that website first. Go to the Render Dashboard, select the website, and click on "Settings". Under "Custom Domains", remove the existing domain.

Then, go to the new website's settings, scroll down to "Custom Domains", and add `emoryhacks.com` as a custom domain. Render will show the instructions to verify the domain ownership. The domain is managed on Vercel, so you need to go to the Vercel dashboard (log in with Emory Hacks Google account), select the domain, and make the changes instructed by Render.

Typically, you would be instructed to add a `ALIAS` or `A` record to the domain's DNS settings. Go to the Vercel dashboard, select the domain, and navigate to the DNS settings.

![Vercel DNS Settings](/assets/images/vercel-dns-settings.png)

The `ALIAS` record is already pointing to the previous website's Render URL ([emory-hacks-2025-fall.onrender.com](emory-hacks-2025-fall.onrender.com) here). Click on the three dots on the right of the record and select "Edit". Change the value to the new website's Render URL.

Render may take a few minutes to propagate the changes. Once done, you should be able to access your new website using the Emory Hacks domain.
