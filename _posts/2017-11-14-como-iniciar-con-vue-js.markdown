---
layout: post
title:  "Como iniciar con Vue.js"
description: "Vue.js es uno de los frameworks más populares actualmente, aprenderlo resulta bastante sencillo gracias a su corta curva de aprendizaje"
date: 2017-11-14 19:00:00 +0530"
thumbnail: assets/img/como-iniciar-con-vue-js.jpg
categories: coding
tags: vue vuejs howtocode
author: Javier Diaz
github: coderdiaz
---

**Vue.js** es un framework de Javascript encargado de construir interfaces de usuario. Actualmente, se encuentra dentro del top de los mejores frameworks del año.

Sin embargo, Vue.js se encuentra creciendo a pasos agigantados pisándole los talones a frameworks como [React](https://reactjs.org/) y [Angular](https://angular.io/). Esto, debido a que a diferencia de muchos de los anteriores frameworks su curva de aprendizaje es bastante corta, facilitando así, que pueda ser incorporado rápidamente en proyectos pequeños y grandes.

Comenzar a aprender y utilizar Vue.js resulta sencillo, lo único que tienes que hacer, es dirigirte al sitio web oficial de Vue, acceder a la guía de cómo empezar y seguir la introducción.

[Como iniciar con Vue.js - Introducción](https://vuejs.org/v2/guide/index.html)

A partir de aquí irás poco a poco conociendo las propiedades y flujo de trabajo de Vue, pero no te preocupes, nosotros te mostraremos las características principales que debes conocer para comenzar a usarlo.

### Reactividad y enlace de datos

Lo primero que debes saber es que Vue, es un framework `reactivo` lo que significa que trabajo a través de estados, cuando un estado es modificado este se ve reflejado de manera instantánea en el sitio, para ello, Vue implementa `two-way data binding` en español: enlace de datos en dos direcciones, ósea entre la vista y el modelo.

![Two-way data binding](/assets/img/binding.png)

Recordemos que Vue.js está enfocado para trabajar con la vista, lo que nos permite utilizarlo en cualquier parte del proyecto.

### Directivas

Al igual que Angular, Vue posee de forma predeterminada directivas que nos permitirán realizar actividades dentro de nuestra plantilla como, por ejemplo, realizar ciclos, especificar condiciones y mostrar datos.

### Instalación

Incluir Vue dentro de nuestro proyecto es bastante fácil, lo primero que debemos hacer es dentro de nuestro archivo `.html` agregar el script en la cabecera del archivo `<head>`: 

```html
<script src="https://unpkg.com/vue"></script>
```

posteriormente dentro del cuerpo del sitio, solo debes agregar el contenedor en el que se incluirá Vue:

```html
<div id="app">
  {{ "{{ message " }}}}
</div>
```

Una vez hecho lo anterior solo debemos generar una instancia de Vue para inicializar el framework:

```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

y listo, con esto tendremos carga Vue dentro de nuestro proyecto.

No olvides que el aprender a utilizar una nueva herramienta implica invertir un poco de tiempo, no te frustres si al principio lo ves un complicado, date tiempo para entenderlo y apóyate con la comunidad para dudas que lleguen a surgirte al comenzar tu travesía. 

[Únete a la comunidad de Vue en español](https://slack.vue-es.org)

A continuación, podrás encontrar algunas referencias para poder aprender desde 0 sobre este increíble framework.

- [Curso de Vue 2 - Styde.net](https://styde.net/curso-de-vue-2/)
- [Learn Vue 2 step by step - Laracast](https://laracasts.com/series/learn-vue-2-step-by-step)
- [Learn Vue step by step - Codesmart](https://codesmart.academy/p/vue-js-2-academy-learn-vue-step-by-step)
- [Aprende Vue 2 y Firebase paso a paso - Teachable](https://wmedia.teachable.com/p/aprende-vue2-y-firebase-paso-a-paso)

Si conoces algún otro recurso para comenzar con Vue.js, no dudes en compartirlo en los comentarios, en la siguiente entrega, hablaremos un poco sobre flujos de trabajo y como mantener una estructura de proyecto enfocada a equipos de desarrollo.
