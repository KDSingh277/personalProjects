# Find Film Website

I have my own API KEY in the code( I know not the best practice)

Once you download the ZIP file, you need to install the dependencies in the package.json file.

Steps to run the app:   
1 . Open the terminal   
2 . Navigate to the folder that has package.json    
3 . In the terminal run `npm install` command   
4 . Next, type in `npm start` and the app should run on localhost:3000    

Missing:    
NODE MODULES    
TMDB API KEY in script.js     

## GitHub Pages (this repo)

The app is static files under `public/`. This repository deploys them to the same GitHub Pages site as the portfolio:

- **URL:** `https://<your-username>.github.io/personalProjects/film-finder/`

### TMDB key on Pages

`public/js/script.js` ships with an empty `tmdbKey` for safety. For the hosted demo to call TMDB, add a repository secret:

1. GitHub repo → **Settings** → **Secrets and variables** → **Actions**
2. **New repository secret** → name: `TMDB_API_KEY`, value: your TMDB v3 API key
3. Push a change (or re-run the **Deploy GitHub Pages** workflow). The workflow injects the key into `script.js` only in the published artifact (the file in git stays empty).

Register a key at [TMDB API settings](https://www.themoviedb.org/settings/api) if you do not have one.

