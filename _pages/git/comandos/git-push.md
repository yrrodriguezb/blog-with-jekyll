---
layout: page
permalink: /git/comandos/git-push/
title: Comando - git push
---

Actualiza las referencias remotas utilizando referencias locales, mientras envía los objetos necesarios para completar las referencias dadas.

Ejemplo: git push \<alias-origen\> \<rama\>

``` bash
#!/usr/bin/bash

git push origin gh-pages
git push origin master
git push heroku master
git push --tags
```

Debe tener en cuenta que este comando tiene opciones, algunas de estas son:

``` bash
#!/usr/bin/bash
 
# Empuje todas las ramas.
# Es decir, referencias debajo refs/heads/; no se puede usar con otras <refspec>.
git push --all

# Todas las referencias bajo refs/tagsson empujadas, 
# Además de las especificaciones explícitamente escritas en la línea de comando.
git push --tags

# Para cada rama que esté actualizada o que se haya enviado correctamente, 
# agregue una referencia ascendente (seguimiento), utilizada por git-pull sin argumentos y otros comandos. 
git push -u, --set-upstream
```

Para mas información ejecute el comando **git push --help**

#### Ejecución en una terminal: 