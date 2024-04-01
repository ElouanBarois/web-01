# web-01
## Questions:
**1. `npm install` command also generated a package-lock.json file
   along with package.json. What is the purpose of this file?**

Le fichier package-lock.json permet de vérrouiller la version de toutes les dépendances installées. Cela permet de garantir le fait que les installations ultérieures utilisent les mêmes versions. L'objectif étant de pouvoir reproduire le projet à l'identique sur une autre machine ou environnement.

**2. By convention, all NPM dependencies use a 3-digit format for
version numbers. How do you call this?**

Cela s'appelle le Semantic Versioning. Il définit un numéro de version étant composé de trois numéros séparés par des points, avec comme format MAJOR.MINOR.PATCH..
La version MAJOR change quand il y a des modifications incompatibles.
La version MINOR change quand de nouvelles fonctionnalités sont ajoutées de manière rétrocompatible.
La version PATCH change quand il y a des corrections de bugs .

**3. What is a devDependency exactly? What are the differences with a
dependency?**

Une "devDependency" est une dépendance utilisée uniquement pour le développement et les tests d'un projet, mais qui n'est pas nécessaire pour son fonctionnement en production contrairement aux dependencies. C'est le cas par exemple pour des outils de test.
Notamment, les devDependencies ne sont pas incluses lors de la publication pour réduire la taille du package.

**4. What is a closure/iife ? What was it used for ? What replaced it?**

Un closure est une fonction qui conserve l'accès aux variables de son environnement lexical même après sa sortie. Une IIFE est une fonction qui est immédiatement exécutée après sa définition. Elles étaient utilisées pour créer des scopes et encapsuler des variables. Depuis ES6, on utilise let et const ainsi que les fonctions fléchées qui sont des alternatives plus simples et lisibles pour gérer le scope des variables.

**5. What is the difference between import * from './utils' and import
{ parseUrl } from './utils'? What can be the consequences of
using one instead of the other?**

import * from './utils' permet d'importer tous les exports de './utils' et les regroupe en 1 objet. On peut ensuite y accéder en utilisant utils.parseUrl.

import { parseUrl } from './utils' importe uniquement l'élément parseUrl. On l'utilise alors directement en écrivant parseUrl.

Si on importe un module entier, cela peut entrainer une surcharge de l'espace de noms. En important uniquement parseUrl on réduit les risques de collision de noms.

**6. Can you think of at least 2 things that are possible with Java
classes, but cannot be done with ES6 classes?**

En Java, une classe peut hériter de plusieurs classes à la fois, alors qu'avec ES6, une classe ne peut hériter que d'une seule classe. En Java, les membres d'une classe peuvent être déclarés comme publics, privés ou protégés, alors qu'avec ES6, toutes les propriétés et méthodes d'une classe sont publiques par défaut.

**7. What are the differences between var and let;**

Les variables déclarées avec var sont limitées à la fonction dans laquelle elles ont été déclarées ou à l'objet global si elles sont déclarées à l'extérieur de toute fonction. Les variable déclarées avec let sont limitées au bloc dans lequel elles ont été déclarées. Comme par exemple une boucle ou une condition if.

Avec var, on peut redéclarer la même variable dans le même scope sans erreur. Cela peut parfois causer des bugs difficiles à trouver.
 Avec let, la redéclaration de la même variable dans le même scope cause une erreur de syntaxe "SyntaxError".
On privilégie donc 'let' qui donne un meilleur controle sur le scope des variables et réduit les risques de bugs.

**8. What is the .bind(this) stuff? What happens if you delete it? Is
it needed when using an arrow function ? why ?**

La méthode .bind(this) est utilisée pour lier le contexte this d'une fonction à un objet spécifié lors de son appel ultérieur. Cela permet de s'assurer que la fonction sera exécutée dans le contexte de l'objet spécifié, indépendamment de la façon dont elle est appelée. Si on supprime '.bind(this)' d'une fonction alors le contexte 'this' de la fonction ne sera pas lié à un objet spécifique au moment de son. Cela signifie que le comportement de la fonction dépendra de la manière dont elle est appelée.

Quand on utilise les fonctions fléchées on n'en a pas besoin car ces fonctions gardent automatiquement le contexte 'this' du contexte où elles sont définies.

**9. What does the @ symbol mean in @babel/...?**

Le symbole "@" dans @babel/*** indique que le package appartient au scope @babel dans le système npm. Cela permet d'organiser les packages selon leur domaine ou leur propriétaire.

**10. What are the advantages of Promises?**

Les promesses permettent de simplifier la gestion des opérations asynchrones en permettant une meilleure lisibilité du code, une gestion des erreurs avec '.catch()', et un support intégré pour le parallélisme. Cela permet aussi d'éviter le callback hell. 

**11. What version of ECMAScript async / await was released in ?**

Les mots-clés 'async' et 'await' ont été introduits dans ES2017, soit l'ES8.

**12. Component-oriented programming for the web is considered more
maintainable. Why?**

Elle est considérée comme la plus maintenable car elle permet de décomposer le code en petites unitées autonomes, les composants. Avec chaque composant on gère une partie précise de l'interface utilisateur ou de l'application. Cela permet de faciliter la gestion, réutilisation et maintenace du code. 
On peut ainsi modifier, chaque composant sans affecter le reste de l'application. De plus les composants sont réutilisables ce qui réduit la duplication de code.

**13. What is Functional programming?**

La programmation fonctionnelle est un style de programmation qui se base sur l'utilisation de fonctions pour effectuer des opérations sur les données. Elle évite les effets de bord et privilégie les fonctions pures, qui produisent toujours le même résultat pour les mêmes entrées et ne modifient pas les données en dehors de la fonction. On utilise des fonctions comme éléments de base. La programmation fonctionnelle favorise donc la simplicité  et la prédictibilité du code.
On résoud des situations complexes à travers un enchainement de focntions simples.

**14. Explain what the map() function does ?**

La fonction map() transforme chaque élément d'un tableau en un nouvel élément, basé sur la fonction de transformation fournie, et renvoie un nouveau tableau contenant les résultats de cette transformation. Cela permet de créer rapidement des tableaux transformés sans modifier le tableau original.

**15. Explain what the filter() function does ?**

La fonction filter() crée un nouveau tableau avec uniquement les éléments du tableau d'origine qui vont satisfaire à une condition spécifiée dans une fonction de test.

**16. Explain what the reduce() function does ?**

La fonction reduce() sert à réduire un tableau à une seule valeur en appliquant une fonction de réduction à chaque élément du tableau. Cela ne modifie pas le tableau d'origine.

**17. What is the difference between .then() and async/await when
handling asynchronous functions?**

Avec await, on met en pause l'exécution de la fonction jusqu'à ce que la promesse soit résolue ou rejetée. Le code asynchrone se comporte comme du code synchrone. Avec then, le reste de la fonction continuera à s'exécuter, mais on n'exécutera pas le rappel then() jusqu'à ce que la promesse soit résolue ou rejetée.

**18. What does the _ prefix mean on a sass file?**

Le préfixe _ dans un fichier Sass indique qu'il s'agit d'un fichier partiel. Les fichiers partiels Sass contiennent des morceaux de code qui vont être inclus dans d'autres fichiers Sass, mais ils ne sont pas compilés indépendamment. On les utilise pour stocker des variables ou des fonctions partagées entre plusieurs fichiers Sass.











