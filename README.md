# Daniel Caballero Personal Website

This is just my personal website, which I implemented using Angular mainly to avoid code repetition.
Otherwise the website is simple enough that I could have written it in plain HTML, CSS, and JS.
Also I could have used another simpler framework than Angular, but Angular is the one that I really know my way around so it was the fastest option for me (and, being so simple a website, the end result is good no matter what framework I'd choose).

## Deploy to github pages

https://dev.to/danielcaballero88/how-to-deploy-angular-website-to-github-pages-jhb

1. Merge changes to branch `gh-pages` by doing:
```bash
$ git checkout gh-pages
$ git merge --squash main
$ git commit -m "..."
```
2. Build with `npm run build:prod`, this:
   1. Builds the project with configuration=production.
   2. Copies the contents of `dist` into `docs`
   3. Copies `index.html` into `404.html` to have one.

3. Commit and push, and then it's done.
