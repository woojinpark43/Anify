# About The Library #
Anify is a library where we help users to use animation on canvas

# Copy of Landing Page #
http://fathomless-beyond-49853.herokuapp.com/

# Copy of Documentation Page #
https://fathomless-beyond-49853.herokuapp.com/documentation.html

# How to get started #
copy and paste the code below to the header of your html page
It is in HTML format, here is an example:
```
{
    {
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script defer type="text/javascript" src='anify.js'></script>
    }
}
```

## Background Animation ##
### Constructor ###
new BackGroundAnimations(canvas, img = null)
Create a background animation object

### Parameters ###
| Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| canvas | canvas element |  | canvas to draw the background animation |
| img | img element | null | an image element that stores picture for the background in the animation |

### Methods ###

#### makeSnow() ####
make snow fall randomly on canvas

#### makeRain() ####
make rain droplets fall randomly on canvas

#### makeHeart() ####
make heart to float sideways randomly on canvas

#### makeDiamond() ####
make diamond to float sideways randomly on canvas

## Circular Decorate Canvas Animation Maker Animation ##
### Constructor ###
new canvasAnimationDecorationMaker(id, canvasWidth, canvasHeight)
Create a text canvas animation decoration maker object

### Parameters ###
| Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| id | string |  | user can set the id of the maker so they can specify where they want to use it in their DOM |
| canvasWidth | int	 |  | width of the canvas |
| canvasHeight | int |  | height of the canvas |

### Methods ###

#### setEdgeColor() ####
sets the edge color if the input color is a valid color

### Parameters ###
| Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| color | string |  | the color of the edge of the canvas |

## Trail Animation ##
### Constructor ###
new TrailAnimations(canvas, canvasW, canvasH, img = null)
Create a trail animation object

### Parameters ###
| Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| canvas | canvas element |  | canvas to draw the background animation |
| canvasW | int |  | width of the canvas to draw animation on |
| canvasH | int |  | height of the canvas to draw animation on |
| img | img element | null | an image element that stores picture for the background in the animation |

### Methods ###

#### makeSnow() ####
make snow trails that follow the cursor when hovering on canvas

#### makeRain() ####
make rain trails that follow the cursor when hovering on canvas

#### makeHeart() ####
make heart trails that follow the cursor when hovering on canvas

#### makeDiamond() ####
make diamond trails that follow the cursor when hovering on canvas

## Bubble Animation ##
### Constructor ###
new BubbleGenerator(canvas, pic_Arr, canvasWidth, canvasHeight, img = null)
Create a bubble animation object

### Parameters ###
| Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| canvas | canvas element |  | canvas to draw the background animation |
| pic_Arr | list of img elements |  | a list of images to make the bubble that randomly moves sideways and go up just like a bubble moving up the surface |
| canvasWidth | int |  | width of the canvas to draw animation on |
| canvasHeight | int |  | height of the canvas to draw animation on |
| img | img element | null | an image element that stores picture for the background in the animation |

### Methods ###

#### update() ####
activate the bubble animation where it creates bubble made by images that makes motions just like a bubble moving up the surface

## Text Animation ##
### Constructor ###
new textGenerator(canvas, text, color = "white", font = "30px Arial", img = null)
Create a text animation object

### Parameters ###
| Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| canvas | canvas element |  | canvas to draw the background animation |
| text | string |  | text that is going to be displayed on canvas with animations |
| color | string | white | The color of text that is going to be displayed on canvas |
| font | string | 30px Arial | the size and font of the text that is going to be displayed on canvas |
| img | img element | null | an image element that stores picture for the background in the animation |

### Methods ###

#### displayOneByOne() ####
make each letter of the text display one by one until the full text shows on the centre of the canvas repeatedly

#### flashPop() ####
repeatedly display letter and make it disappear in a flash

## Tetris Animation ##
### Constructor ###
new TetrisGenerator(canvas, width = 2, img = null)
Create a tetris animation object

### Parameters ###
| Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| canvas | canvas element |  | canvas to draw the background animation |
| width | int | 2 | the width of the tetris block |
| img | img element | null | an image element that stores picture for the background in the animation |

### Methods ###

#### update() ####
make various types of tetris to fall down randomly on canvas

## Halloween Animation ##
### Constructor ###
new ghostGenerator(canvas, ghost_num=1, img = null)
Create a ghost animation object

### Parameters ###
| Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| canvas | canvas element |  | canvas to draw the background animation |
| ghost | int | 1 | number of ghost in the canvas |
| img | img element | null | an image element that stores picture for the background in the animation |

### Methods ###

#### update() ####
display ghost animation on the canvas with the specified number of ghosts

### Constructor ###
new RedEyeGenerator(canvas)
Create a redEye animation object

### Parameters ###
| Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| canvas | canvas element |  | canvas to display redEye animation |

### Methods ###

#### update() ####
display redEye animation on the canvas specified

### Constructor ###
new PumpkinGenerator(canvas)
Create a pumpkin animation object

### Parameters ###
| Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| canvas | canvas element |  | canvas to display pumpkin animation |

### Methods ###

#### update() ####
display pumpkin animation on the canvas specified
