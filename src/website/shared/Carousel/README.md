# Carousel Component

## How to use

```html
<template>
  <Carousel>
    <template #carouselSlide="{slide}">
      <!-- Slide Component uses "slide" prop 👆-->
    </template>
    <template #carouselNavigationButtons="{goToPrev,goToNext}">
      <!-- Navigation Components uses "goToPrev" and "goToNext" props 👆-->
    </template>
  </Carousel>
</template>
```

## APIs

### _Carousel_

| Name              | Type    | Default | Description                                                  |
| ----------------- | ------- | ------- | ------------------------------------------------------------ |
| timeInMillisecond | Int     | 5000    | Show time of slide in milliseconds                           |
| slides            | Array   | []      | Slides to be displayed                                       |
| autoPlay          | Boolean | true    | Flag to start or stop auto playing slides                    |
| showBullets       | Boolean | true    | Flag to show bullets for number of slides and the active one |

### _Slide_

| Name  | Type   | Description                  |
| ----- | ------ | ---------------------------- |
| slide | Object | Data of slide to be rendered |

### Navigation Components

| Name     | Type     | Description          |
| -------- | -------- | -------------------- |
| goToPrev | Function | Go to previous slide |
| goToNext | Function | Go to next slide     |
