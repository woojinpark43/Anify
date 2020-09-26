/* Select all DOM form elements you'll need. */ 
'use strict';

//get canvas by Id name
snow.style = 'position: relative; width: 168px; height: 168px; left: 50%; transform: translate(-50%, 5%); margin: 0 auto; border-radius: 50%; background-color: #000000;'
rain.style = 'position: relative; width: 168px; height: 168px; left: 50%; transform: translate(-50%, 5%); margin: 0 auto; border-radius: 50%; background-color: #000000;'
heart.style = 'position: relative; width: 168px; height: 168px; left: 50%; transform: translate(-50%, 5%); margin: 0 auto; border-radius: 50%; background-color: #000000;'
diamond.style = 'position: relative; width: 168px; height: 168px; left: 50%; transform: translate(-50%, 5%); margin: 0 auto; border-radius: 50%; background-color: #000000;'
tetris.style = 'position:relative; width: 80%; height: 20%; background-color: black; left: 50%; transform: translate(-50%, 5%);'
bubble.style = 'position:relative; width: 100%; height: 100%; background-color: black;'
ghost.style = 'position: relative; width: 168px; height: 168px; left: 50%; transform: translate(-50%, 5%); margin: 0 auto; border-radius: 50%; background-color: #000000;'
pumpkin.style = 'position: relative; width: 168px; height: 168px; left: 50%; transform: translate(-50%, 5%); margin: 0 auto; border-radius: 50%; background-color: #000000;'
hunted_party.style = 'position:relative; width: 100%; height: 30%; background-color: black;'
redEye.style = 'position: relative; width: 168px; height: 168px; left: 50%; transform: translate(-50%, 5%); margin: 0 auto; border-radius: 50%; background-color: #000000;'
text1.style = 'position: relative; width: 168px; height: 168px; left: 50%; transform: translate(-50%, 5%); margin: 0 auto; border-radius: 50%; background-color: #000000;'
text2.style = 'position: relative; width: 168px; height: 168px; left: 50%; transform: translate(-50%, 5%); margin: 0 auto; border-radius: 50%; background-color: white;'
snow_trail.style = 'position: relative; width: 168px; height: 168px; left: 50%; transform: translate(-50%, 5%); margin: 0 auto; background-color: #000000;'
rain_trail.style = 'position: relative; width: 168px; height: 168px; left: 50%; transform: translate(-50%, 5%); margin: 0 auto; background-color: #000000;'
heart_trail.style = 'position: relative; width: 168px; height: 168px; left: 50%; transform: translate(-50%, 5%); margin: 0 auto; background-color: #000000;'
diamond_trail.style = 'position: relative; width: 168px; height: 168px; left: 50%; transform: translate(-50%, 5%); margin: 0 auto; background-color: #000000;'

snowWithPic.style = 'position: relative; width: 168px; height: 168px; left: 50%; transform: translate(-50%, 5%); margin: 0 auto; border-radius: 50%; background-color: #000000;'
rainWithPic.style = 'position: relative; width: 168px; height: 168px; left: 50%; transform: translate(-50%, 5%); margin: 0 auto; border-radius: 50%; background-color: #000000;'
heartWithPic.style = 'position: relative; width: 168px; height: 168px; left: 50%; transform: translate(-50%, 5%); margin: 0 auto; border-radius: 50%; background-color: #000000;'
diamondWithPic.style = 'position: relative; width: 168px; height: 168px; left: 50%; transform: translate(-50%, 5%); margin: 0 auto; border-radius: 50%; background-color: #000000;'

//set animations to each canvas

//images for animations
const snow_tree = document.createElement('img');
snow_tree.src = 'picture/snow_tree.jpg';

const rainy_window = document.createElement('img');
rainy_window.src = 'picture/rainy_window.jpg';

const sweet_chocolate = document.createElement('img');
sweet_chocolate.src = 'picture/sweet_chocolate.jpg';

const treasure = document.createElement('img');
treasure.src = 'picture/tresure.jpg';

const tetris_img = document.createElement('img');
tetris_img.src = 'picture/tetris.jpg';

const hunted_house = document.createElement('img');
hunted_house.src = 'halloween_Pic/hunted_house.jpg';

const birthday_pic = document.createElement('img');
birthday_pic.src = 'picture/happyBirthday.jpg';

const warning_pic = document.createElement('img');
warning_pic.src = 'picture/warning.png';

const neemo = document.createElement('img');
neemo.src = 'picture/neemo.jpg';

const fish1 = document.createElement('img');
fish1.src = 'picture/fish1.jpg';

const fish2 = document.createElement('img');
fish2.src = 'picture/fish2.jpg';

const fish3 = document.createElement('img');
fish3.src = 'picture/fish3.jpg';

const fish4 = document.createElement('img');
fish4.src = 'picture/fish4.jpg';

const sea_pic = document.createElement('img');
sea_pic.src = 'picture/deep_sea.jpg';

const profile1 = document.createElement('div');
profile1.id = "p1"

//snow animation
const snowGen = new BackGroundAnimations(snow);
snowGen.makeSnow()
const snowGenWithPic = new BackGroundAnimations(snowWithPic, snow_tree);
snowGenWithPic.makeSnow()

//rain animation
const rainGen = new BackGroundAnimations(rain);
rainGen.makeRain()
const rainGenWithPic = new BackGroundAnimations(rainWithPic, rainy_window);
rainGenWithPic.makeRain()

//leaf animation
const heartGen = new BackGroundAnimations(heart);
heartGen.makeHeart()
const heartGenWithPic = new BackGroundAnimations(heartWithPic, sweet_chocolate);
heartGenWithPic.makeHeart()

//diamond animation
const diamondGen = new BackGroundAnimations(diamond);
diamondGen.makediamond()
const diamondGenWithPic = new BackGroundAnimations(diamondWithPic, treasure);
diamondGenWithPic.makediamond()

//tetris animation
const tetrisGen = new TetrisGenerator(tetris, 3, tetris_img);
tetrisGen.update()

//Halloween animations
const ghostGen = new ghostGenerator(ghost)
ghostGen.update()
hunted_party.width = 1000
hunted_party.height = 500
const ghostGen2 = new ghostGenerator(hunted_party, 5, hunted_house)
ghostGen2.update()

//red eye
const redEyeGen = new RedEyeGenerator(redEye)
redEyeGen.update()

//pumpkin
const pumpkinGen = new PumpkinGenerator(pumpkin)
pumpkinGen.update()

//text animations
const birthday = new textGenerator(text1, "Happy Birthday", 'white', '30px Geneva', birthday_pic)
birthday.displayOneByOne()

const warning = new textGenerator(text2, "Warning", 'Red', '70px Roboto Mono', warning_pic)
warning.flashPop()

//trail animations
const snowtrail = new TrailAnimations(snow_trail, 168, 168, snow_tree)
snowtrail.makeSnow()

const raintrail = new TrailAnimations(rain_trail, 168, 168, rainy_window)
raintrail.makeRain()

const hearttrail = new TrailAnimations(heart_trail, 168, 168, sweet_chocolate)
hearttrail.makeHeart()

const diamondtrail = new TrailAnimations(diamond_trail, 168, 168, treasure)
diamondtrail.makeDiamond()

//bubble.width = 1000;
//bubble.height = 1000;
const bubble_animation = new BubbleGenerator(bubble, [neemo, fish1, fish2, fish3, fish4], 900, 1100, sea_pic)
bubble_animation.update()

//canvas animation profile picture
const profilePicGen1 = new canvasAnimationDecorationMaker("maker", 168, 168)
profilePicGen1.setEdgeColor("yellow")
