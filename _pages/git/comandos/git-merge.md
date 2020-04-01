---
layout: page
permalink: /git/comandos/git-merge/
title: Comando - git merge
---

une dos o más historias de desarrollo juntas. Incorpora cambios de los commits nombrados (desde el momento en que sus historias divergieron de la rama actual) en la rama actual. Este comando lo usa **[git pull](../git-pull)** para incorporar cambios desde otro repositorio y puede usarse a mano para combinar cambios de una rama a otra.

``` bash
#!/usr/bin/bash

git merge 
```

Este comando tambien ofrece algunas opciones las cuales son:

``` bash
#!/usr/bin/bash

# Realice la fusión y confirme el resultado. Esta opción se puede usar para anular --no-commit.
#
# Con --no-commit, realice la fusión, pero simule que la fusión falló y no se autocompromete, 
# para darle al usuario la oportunidad de inspeccionar y ajustar aún más el resultado de la fusión antes de confirmar.
git merge --commit, --no-commit

# Complete el mensaje de registro con descripciones de una línea de, como máximo, <n> confirmaciones reales que se fusionan.
git merge --log[=<n>], --no-log

# Produzca el árbol de trabajo y el estado del índice como si ocurriera una fusión real (excepto la información de fusión), pero en realidad no realice una 
# confirmación, mueva HEAD o registre $GIT_DIR/MERGE_HEAD (para que el siguiente git commitcomando cree una confirmación de fusión). Esto le permite crear una 
# confirmación única en la parte superior de la rama actual cuyo efecto es el mismo que fusionar otra rama (o más en el caso de un pulpo).
#
# Con --no-squash realiza la fusión y confirma el resultado. Esta opción se puede usar para anular --squash.
git merge --squash, --no-squash
```