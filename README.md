Recueil de poèmes — Pour Zoé
Site statique (aucune installation) : poésie, slam et citations, avec la Gymnopédie n°1 en fond.
Fichiers
`index.html` : la page (design, animations, musique)
`poems.js` : tous tes textes — c'est le seul fichier à modifier
`gymnopedie.mp3` : la musique (bouton pause en bas à droite)
Mettre en ligne (GitHub Pages)
Crée un dépôt sur github.com (ex. `recueil`), public.
Clique sur « Add file » → « Upload files », dépose les 4 fichiers à la racine, puis « Commit changes ».
Va dans « Settings » → « Pages » → « Build and deployment » : Source = « Deploy from a branch », Branch = `main`, dossier `/ (root)` → « Save ».
Après ~1 minute, le site est disponible sur `https://TON-PSEUDO.github.io/recueil/`.
Écris cette adresse sur le tag NFC (app « NFC Tools » → Écrire → Ajouter un enregistrement → URL).
Astuce : `.../recueil/#1` ouvre directement le premier livre au lieu de la bibliothèque.
Le site n'est pas référencé par les moteurs de recherche (`noindex`), mais toute personne qui a le lien peut le voir.
Ajouter un texte
Ouvre `poems.js`, copie un bloc `{ ... }` et colle-le à la suite :
```js
{
  type: "poesie",          // "poesie", "slam" ou "citation"
  titre: "Mon titre",      // écrit sur le dos du livre
  texte: `Premier vers
Deuxième vers

Nouvelle strophe`
},
```
Ligne vide = pause entre deux strophes ; `**mot**` = mot en doré.
Citation : ajoute `auteur: "..."` et `source: "..."` (sinon « Auteur inconnu »).
`etoile: true` : ajoute une étoile dorée sur le livre.
`nouveau: true` : ajoute un bandeau « Nouveau » sur le livre. Il disparaît dès que le texte a été ouvert, sur le navigateur du lecteur (mémorisé automatiquement, rien à faire de son côté). Une fois qu'un texte n'est plus nouveau, tu peux retirer la ligne.
`REGLAGES` (en bas du fichier) : `signature` (nom en fin de texte), `livresDeco` (livres décoratifs).
Commit le fichier modifié : le site se met à jour tout seul en 1 minute.
Musique
Ne pas ouvrir `index.html` en double-cliquant depuis l'ordinateur pour tester la musique : passe par l'adresse GitHub Pages (ou un petit serveur local). Si le mp3 est introuvable, une version synthétisée de la Gymnopédie prend le relais.
