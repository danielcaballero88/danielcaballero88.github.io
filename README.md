# Daniel Caballero Personal Website

This is just my personal website, which I implemented using Angular mainly to avoid code repetition.
Otherwise the website is simple enough that I could have written it in plain HTML, CSS, and JS.
Also I could have used another simpler framework than Angular, but Angular is the one that I really know my way around so it was the fastest option for me (and, being so simple a website, the end result is good no matter what framework I'd choose).

## Deploy to github pages

https://dev.to/danielcaballero88/how-to-deploy-angular-website-to-github-pages-jhb

1. Merge changes to branch `gh-pages`
2. `npm run build:prod`
3. Copy `dist/dc-website` to `docs`
4. Copy `docs/index.html` to `docs/404.html`
5. Push.
