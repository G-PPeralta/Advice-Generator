set -e

npm run build

cd dist

git init
git checkout -b master
git add -A
git commit -m 'deploy'
git push -f git@github.com:/G-PPeralta/Advice-Generator.git master:gh-pages

cd -