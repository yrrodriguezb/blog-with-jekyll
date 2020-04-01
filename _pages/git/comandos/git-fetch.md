---
layout: page
permalink: /git/comandos/git-fetch/
title: Comando - git fetch
---

Descarga objetos y referencias de otro repositorio. Estas referencias pueden ser ramas y/o etiquetas.

Este comando tambien puede buscar en un único repositorio con el nombre o URL, o desde varios repositorio a la
vez si se proporciona **\<grupo\>** y una entrada remota.

``` bash
#!/usr/bin/bash

git fetch 
```

Este comando tambien ofrece algunas opciones las cuales son:

``` bash
#!/usr/bin/bash

# Obtiene todos los cambios remotos
git fetch --all

# Muestra lo que se haría sin realizar ningún cambio.
git fetch --dry-run

# Obtenga todas las etiquetas del control remoto. 
# Es decir, busque etiquetas remotas refs/tags/*en etiquetas locales con el mismo nombre
git fetch --tags
```