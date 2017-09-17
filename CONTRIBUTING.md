# Como contribuir

### Contribuir en desarrollo

Para realizar una contribución en el proyecto web de Vue en español, deberás seguir el proceso de instalación para tu desarrollo en local que podrás encontrar en el archivo README.md del proyecto.

Una ves que el proyecto funcione en tu equipo, podrás verificar los pendientes a realizar en los Issues disponibles del proyecto, para ello, tendrás que verificar la etiqueta que posee cada uno de los issues ya que apartir de ahí será el como definas tu branch para hacer un PR.

Por ejemplo, si tu issue posee una etiqueta `bug`, tendrás que nombrarla de la siguiente forma `fix/nombre-rama`, guiate de acuerdo a la siguiente tabla:

| Tipo         | Estructura              |
|--------------|-------------------------|
| bug          | fix/nombre-rama         |
| feature      | feature/nombre-rama     |
| enhancement  | enhancement/nombre-rama |

Todos los PR deberán ser enviados directamente apuntando a la rama `develop` del proyecto para su revisión.


### Contribuir en publicaciones

Para realizar una publicación en nuestro sitio, deberás realizar un archivo `.markdown` en la carpeta `_posts`siguiendo la estructura.

La estructura corresponde a Jekyll ya que de esta manera el identifica cada publicación. Por ejemplo, una publicación se compone por el **Año**, **Mes**, **Día**, seguido del slug que se mostrará en la url `slug-de-la-publicacion`.

Seguido esto, si nuestra publicación tendrá como título `Lo mejor de vue.js` entonces el nombre de tu publicación quedaría como `2017-09-16-lo-mejor-de-vue-js.markdown` en nuestro directorio `_posts`.

También considera que tu archivo deberá contener la siguiente estructura:

```
---
layout: post
title:  "Título de la publicación" // Título
description: "Breve descripción con 100 cáracteres" // Descripción
date: "2017-09-16 23:59:59 +0530" // Fecha de la publicación
thumbnail: http://via.placeholder.com/315x190 // Imagen destacada
categories: featured // Categorias separadas por espacio. Ej. featured images
author: Jekyll // Nombre del autor
github: jekyll // Nombre de usuario en Github
---

Contenido de la publicación
```

Esto deberá ser creado en una rama definida como `post/titulo-publicacion` y deberá ser apuntada a la rama `develop` para su revisión, una ves autorizada y revisada la publicación está será fusionada en `master`.