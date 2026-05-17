#!/usr/bin/env bash
# Run on the server. Pulls latest, builds all sites, rsyncs to /var/www/
set -euo pipefail

REPO_DIR="/srv/habitual-backlinks"
cd "$REPO_DIR"

git fetch origin
git reset --hard origin/main

npm install
npm run build:all

# Rsync each site's dist into /var/www
for site in ashwa seamoss shilajit kreatin; do
  if [ -d "sites/$site/dist" ]; then
    rsync -a --delete sites/$site/dist/ /var/www/$site/dist/
    echo "Deployed: $site"
  fi
done

systemctl reload caddy
echo "Deploy complete: $(date -u)"
