/* =====================================================
   ✍️  AJOUTE TES POÈMES ICI
   Copie un bloc { ... }, colle-le à la suite, change le texte.
   type : "poesie", "slam" ou "citation" (chaque type a son étagère).
   Poème / slam : ligne vide = pause entre strophes, **mot** = mot mis en lumière.
   Citation : ajoute auteur: "..." et source: "..." (facultatif) ; titre = nom sur le dos du livre.
   nouveau: true → petit bandeau « Nouveau » sur le livre, jusqu'à ce qu'il soit ouvert (retenu dans le navigateur du lecteur).
   ===================================================== */
const POEMES = [
  {
    type: "poesie",
    etoile: true,   /* ★ dorée sur le dos du livre */
    titre: "Ta définition",
    /* **lettre** = lettre ou mot mis en lumière */
    texte: `De ta bonne humeur, le soleil en serait jaloux
Et de tes yeux, nombreux en deviendraient fous
L'hiver lui-même se réchaufferait de ton cœur
De ta présence, le temps en arrêterait ses heures

Les heures défilent comme des minutes
Ta douce voix me fait passer pour une brute
Comme une fleur au milieu d'un champ
Ta douce voix sonne comme un chant

Ton élégance rendrait jaloux les cieux étoilés
Ta tendresse caresse sans même érafler
Dans un monde si sombre, certains trouvent en toi la lumière
Moi je pense qu'en cherchant, je trouverais de quoi être fier

Je n'écris pas pour rendre beau ce qui l'est déjà
Zoé existe, tout simplement, sans qu'on en rajoute
Rien à ajouter, rien à changer, c'est comme ça
La vérité n'a pas besoin qu'on la redoute

Loin de moi l'envie du **Z**oo
Plus près de moi, une **O**asis
Le temps d'une simple **E**scale
Et voilà écrit : **Zoé**`
  },
  {
    type: "poesie",
    etoile: true,   /* ★ dorée sur le dos du livre */
    titre: "J'admire",
    nouveau: true,   /* bandeau « Nouveau » jusqu'à ce que le texte soit ouvert */
    texte: `Les heures défilent comme des secondes
À tes yeux, le monde y succombe
En ta compagnie, tout devient plus simple
Ton sourire, ton regard me poussent à rester humble

Moi je pense que les mots ne suffisent
Pour définir une aussi belle âme
Ta rencontre m'est une belle surprise
Et ta présence me réchauffe comme une flamme

Je savoure chaque instant à tes côtés
Et avec toi, je me sens léger
Tu animes chacune de mes journées
Et grâce à toi, vers l'avant je pointe mon nez

Je conclus sur le plus important
En te regardant, je me perds
Ton regard est impressionnant
Aurais-tu volé les yeux de l'univers ?

Immense est ton cœur
Mieux qu'une vaste mer
Et j'y trouve la paix, loin de toute misère`
  },
  {
    type: "slam",
    titre: "L'inconnu",
    texte: `J'ai cultivé des fruits de passion et d'amour dans mon jardin de haine
J'obéis aux mêmes lois que toi, sauf celle de la gravité
Je sens que je n'ai plus pied, je m'envole dans mes songes

Je nage, je vole, je cours en quête de lumière
Je mâche mes paroles, la foule, un quart rémunère
Je me détends, mes muscles se relâchent
Donc je reprends

J'ai hâte de dépasser ces frontières
De découvrir une faune, une flore inconnues
Fuir les décors de BD de nos libraires
Découvrir, c'est ce que j'ai au menu

Une mère nomme son fils
La mer et son vice
Ma vie ne tient qu'à un fil
Mais je n'ai d'attrait que pour des choses futiles.`
  },
  {
    type: "poesie",
    titre: "Opposé",
    date: "J'aime / Je n'aime pas / J'adore / Je déteste",
    texte: `J'aime rire et j'en ris sans raison
J'aime à en être ivre sans comparaison
Je déteste la brise qui caresse mon cou
Je déteste le vent qui agresse de Moscou

J'adore la brume, le brouillard d'automne
J'aime le bitume, les moteurs qui ronronnent
Je n'aime pas l'eau froide, la chair de poule
Je déteste tes salades et le temps qui coule

J'adore tellement l'odeur du café amer
J'aime lâcher prise et m'évader en mer
Je déteste les bruits stridents, aigus
Je déteste les brigands têtus`
  },
  {
    type: "slam",
    titre: "Un slam sans histoire",
    texte: `J'appréhende et j'en perds mes mots
J'apprends tellement que j'en ai des maux
J'reprends avec la force d'un sumo
Et j'me surprends, moi et mes vilains défauts
J'attends une carrière de Willem Dafoe

Un slam sans histoire, un slam simple
Une scie qui sépare, une âme qui s'effondre
J'en apprends et j'en reste humble
Une vie qui démarre, qui suit mon ombre`
  },
  {
    type: "citation",
    titre: "Un thé",
    auteur: "Le Menu",
    source: "film de Mark Mylod, 2022",
    texte: `Il n'y a aucun problème si grand qu'il ne puisse être atténué par une bonne tasse de thé.`
  },
  {
    type: "citation",
    titre: "Le palais",
    auteur: "Proverbe turc",
    source: "attribution courante, origine non vérifiée",
    texte: `Lorsqu'un clown entre dans un palais, il ne devient pas roi : c'est le palais qui devient un cirque.`
  },
  {
    type: "citation",
    titre: "L'abîme",
    auteur: "Friedrich Nietzsche",
    source: "Par-delà bien et mal, 1886 (traduction libre)",
    texte: `Quiconque combat les monstres doit s'assurer qu'il ne devient pas lui-même un monstre. Car, lorsque tu regardes au fond de l'abysse, l'abysse aussi regarde au fond de toi.`
  },
  {
    type: "citation",
    titre: "Le silence",
    auteur: "Wass",
    texte: `Lors d'un silence assourdissant, le temps se ralentit. Nul ne peut le supporter en compagnie de son pire ennemi. Alors, chaque élément parcourant l'horizon devient centre d'intérêt, attirant la curiosité de chacun, faisant mine de réflexion profonde pour maquiller ce mal-être.`
  },
  {
    type: "slam",
    titre: "La paix",
    texte: `La justice, c'est la paix
L'injustice, c'est la foire
On paiera tous les frais
Moi j'ai soif et tu l'vois
Tour de magie, j'disparais
Putain, il faut pas qu'ça foire

La liberté, c'est la paix
La soumission, c'est la merde
Dans ce monde y'a rien qui me plaît
Et chaque jour je deviens plus maigre
Corrompu malgré tout, moi j'resterai intègre

L'égalité, c'est la paix
Et l'inverse, c'est la mort
J'm'y vois dans chaque aspect
Et ils me diront qu'j'suis en tort
Quoi qu'il arrive, j'suis prêt
J'reste en haut, j'reste bien fort

Fais pas ces choses si ça te définit pas
Si tu sens pas que ça vient du fond de toi
Fais pas ces choses si tu l'sens pas
Fais pas si et fais pas ça
C'est pas assez chaud, j'bois pas ma soupe si elle est froide
C'est assez faux, c'qu'on dit sur moi, c'est une façade

C'est quand que tu te réveilles, t'ouvres les yeux et t'embrasses la vie
C'est con, chaque sommeil, j'en profite pas, j'm'endors à vide
C'est quoi qui me surveille, qui m'écoute sans mon avis

C'est moi qui t'observe, qui aimerais plonger à vif
C'est moi qui t'aime, qui aimerais plus qu'une simple envie
C'est quoi qui me dégoûte, qui me ferait fuir sans préavis
C'est simple, c'est compliqué à la fois, c'est la définition de la vie
C'est simple mais c'est compliqué, et je devrais m'en réjouir`
  },
  {
    type: "slam",
    titre: "Le mendiant",
    texte: `De quelle vie je suis le vivant
De ce monde médisant
Dont je suis le mendiant ?

À quel monde ai-je décidé d'adhérer
De ma main fatiguée de glaner
L'esprit appauvri des gens

Ils disent que c'est souvent couci-couça
Ou comme ci, comme ça
Moi je dis que je suis conséconscient
Et on me prend pour le fou

Non, il faut pas faire ce que font les fous
C'est trop facile de se farcir une fondue
Sans penser à son empreinte carbone
Si tu possèdes des panneaux solaires
Mais c'est aussi fou qu'une palmeraie de cyprès ou une citronnade de palme

Et c'est du haut de ma canopée que j'observerais, allongé dans mon canapé, que je butinerais cette citronnade qui débrousse mon palais`
  }
];

/* Réglages : "livresDeco" = false pour n'afficher que tes livres, sans les livres décoratifs.
   "signature" = le nom écrit à la fin de chaque poème ("" pour l'enlever). */
const REGLAGES = {
  livresDeco: true,
  signature: "Wass",
  /* Mot secret révélé quand Zoé touche l'étoile cachée de l'écran d'accueil (\n = retour à la ligne).
     Vide ("") = pas d'étoile. */
  motSecret: "T'as trouvé un petit secret, t'es trop forte :D. Gros bisous",
  /* Salutations selon l'heure sur son téléphone : aube 5h-8h, jour 8h-18h, soir 18h-21h, nuit 21h-5h */
  salutations: { aube: "Bon matin, Zoé", jour: "Bonjour Zoé", soir: "Bonsoir Zoé", nuit: "Bonne nuit, Zoé" }
};
