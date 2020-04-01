---
layout: page
permalink: /git/comandos/git-pull/
title: Comando - git pull
---

Este comando recupera e integra con otro repositorio o una rama local.

Incorpora cambios desde un repositorio remoto en la rama actual. En su modo predeterminado, **git pull** es la abreviatura de **[git fetch](../git-fetch)** seguido de **[git merge](../git-merge)**.

``` bash
#!/usr/bin/bash

git pull 
```

Este comando tambien ofrece algunas opciones las cuales son:

``` bash
#!/usr/bin/bash

# Realice la fusión y confirme el resultado. Esta opción se puede usar para anular --no-commit.
#
# Con --no-commit, realice la fusión, pero simule que la fusión falló y no se autocompromete, 
# para darle al usuario la oportunidad de inspeccionar y ajustar aún más el resultado de la fusión antes de comprometerse.
git merge --commit, --no-commit

# Cuando la fusión se resuelva como un avance rápido, solo actualice el puntero de rama, sin crear una confirmación de fusión.
# Este es el comportamiento predeterminado.
git pull --ff

# Cree una confirmación de fusión incluso cuando la fusión se resuelva como un avance rápido.
# Este es el comportamiento predeterminado al fusionar una etiqueta anotada (y posiblemente firmada) 
# que no se almacena en su lugar natural en jerarquía refs/tags/.
git pull --no-ff

# Negarse a fusionar y salir con un estado distinto de cero a menos que el HEAD actual ya esté actualizado 
# o la fusión pueda resolverse como un avance rápido.
git pull --ff-only
```