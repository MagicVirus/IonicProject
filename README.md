Comment installer votre application pour le développement :

-  git clone https://github.com/MagicVirus/IonicProject.git
- cd IonicProject 
- npm install
- ionic serve

Ce que vous avez réalisé (des phrases courtes)

- Une page login avec pour identifiants Bob/toto
- Un message d'erreur si les identifiants sont erronés
- Des sécurités ( Guards ) sur les routes si on n'est pas connecté 

- Une liste des Randonnées
- Une page détail accessible en cliquant sur la div de la randonées 
- Un Compteur pour la randonnée en cours

Ce que vous n’avez pas réalisé et pourquoi :

- Les test fonctionnels :

Aprés avoir lancé les commandes nécessaire pour lancer les tests fonctionnels , la fenetre Chrome pour le test charge indéfiniment et protractor lance une erreur au timeout qui est de 30 secondes.

 - Les tests unitaires:

la commande ng test renvoie des erreurs que je n'arrive pas à résoudre malgré avoir recherché sur internet.
Error: StaticInjectorError(DynamicTestModule)[Storage]: 
  StaticInjectorError(Platform: core)[Storage]: 
    NullInjectorError: No provider for Storage!
    
 - Affichage de la hike en cour sur la page de la liste : 
    Difficultés pour récupérer le chronomètre depuis notre service après plusieurs heures de tentatives.
    
  J'ai essaye d'injecter Storage/IonicStorageModule dans les composants sans succés.
    
 Les éléments supplémentaires ajoutés au projet
