---
layout: page
permalink: /git/comandos/git-rm/
title: Comando - git rm
---

Elimina archivos del árbol de trabajo y del índice

Ejemplo: git rm \<archivo\> 

``` bash
#!/usr/bin/bash

git rm file.txt
```

Debe tener en cuenta que este comando tiene opciones, algunas de estas son:

``` bash
#!/usr/bin/bash

# Permitir la eliminación recursiva cuando se proporciona un nombre de directorio principal.
git rm -r

# Elimina todos los archivos con la extension .txt  del índice que se encuentran bajo el directorio "folder" y cualquiera de sus subdirectorios.
git rm folder/\*.txt
```

&nbsp;
#### Ejecucion en una terminal:  