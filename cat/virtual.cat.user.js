// ==UserScript==
// @name     Cats
// @version  1
// @grant    none
// @include  *
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

addGlobalStyle(`
cat 
{ 
  position: fixed;
	display: block;
	top: 0px;
  left: 0px;
  width: 80px;
	height: 60px;
	background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiQAAADIBAMAAAAqxOeTAAAAD1BMVEWPNKBfoDAcHBw4ODikdaD0mJJ+AAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfkAhoRETUc6znbAAAEHklEQVR42u3dW3abMBCAYW8hW/AWvP+9NY4OlYC56gJOzj8PbZwO0uhLDyEYTR6Pn3h9x8ONLSeSGx3zYwMSSCDpALGWuS2tZJVXcnaLEBvzY/EggQSSrlOrXlS7yDaszPiYPl58BZBAAsmdJO/Bvr70Qevnt8ySHcn0x/Twot8c4heQkEACyTqS/AnWKy6TaeHN/sEVEkggWXd35riA88dSrp0ZHdPHk0/Dx2MWXb1CAgkk3SjnWJupo2gXdP7ckEACyaeRXJ+p3ZDaLugu4IAEEkgmk9yVqZ1cL+KABBJIJqPcl6m9VXb7/xNIIIGkA0XKez6vyZRuC0ECCSSfT1ImfD7r1OXjc/nvz28ZZTHyeLlM7wR7vJFUR4cEEkg+laS88kjKK/1Rl55M/wb3VlU5ZjEKJJBAMgwikxyXqZ80ezM9kFLV9jckkEACiZRpvwFWKSrJhRdqkEACCUEQBEEQxK+KVT9AyRdesdw5FXWvDBJIIOk4LNKoxZ5E3hwgj6tBWZsL7M/rmfEKIIEEkjESr1FLpAmL1A4h19rFeljYW+b5AWJ7VPmNeEgggWSExGqGoD+Wa52o/XGlUTO5MWh9VEgggWQNSaati92ERW/GEFmmn9uDF8mFBBJIRknsFiwjk9itXeI1rKkAEkggmU2S2VCYmySzUbGnXYwHPbBVEhJIIJlKMsI3a9yrKoAEEkhWkaziG6thVQWQQALJKMl4sxbrMZrZuesqgAQSSK4jyU4Sz423gVlVASSQQDJGctyanJ/CmiTeLqZui2zrGcFr8yNrgwQSSEZJ9luT34d6fO0yvdGz7WJiePKvI7FItleQQALJKpL2ZKa3TajTl/z9STECYi20HcdqBtE2h9p/a4iBQAIJJGtI6hL3J1ztRLwnsTf8REnOs8rLPDaH2n9rgAQSSO4mIQiCIAiC+FvBZRAkkEAyA6T+SUACCSS9p8wsSfiJIEgggeSXkORaRM0EjI59OR8kkEAyESRLki87dkSOT2ui6T1cDAkkkIyQtC2XIi1nj60X9g/S5c5b1si5OjzASCOY//8KCSSQdJJYD+nrhWQ2J2pz+SPH69AB9192Nx8SSCDpILE3I58LOQ8dA/HbPukjS3xytg0YzYcEEkh6SHwYf2itOVMU8PXKjP0KRPYI47oSEkggCVafW+aM3NG2cOmveHYGSCCBJD1D/ad2O3SsPZN9i2ZO0d7tqFw7hv2vhlfyIYEEkk4SacOjtcS6hdl/I7udPtowZr8EPzsD0jaFMe98QwIJJCmS7ZDzEq23k63tytJRmfZT27bsmY2fpC3UkEACyXwSewgPMPL4S20/5ZP4zWLahcVza/UdjwNCAgkkt5EcG0pF8muuX3apMrtASCCB5DqSOZG9tOstdNVDyJBAAol7xD+vGDcdqYdCGAAAAABJRU5ErkJggg==');
	background-repeat: no-repeat;
  background-position: -80px 0px;
}

cat.right
{
  -moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
}

heart
{
  position: fixed;
	display: block;
	width: 24px;
	height: 24px;
	background-image: url(' data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOtwAADrcBHI9bQQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAG6SURBVGiB7ZixSgNBEIa/U4lgbRrR1iKYQtDeTh8gRR7ApxCrIIhYWFhHyQukVMFH0KSwsNAymsbKUiFZi+Pi7sjdxiTn7cr+MMV/82ezPzN37E5ENoZAZNEk+AQWx9R+AKUxtQqYS0umJnxBMFA0pIEecc8pQHUhUvqDjGjGPa0/amnrtvRcE0pp6/SBYy1O43dQl/SyDHiHYMAFjPprH5TSo1IZqjTU6wMl9VpUtXWrGTpbdEAda7EjXhvvKxAM5A0luDzXLGT+ulYz9ZFBM80/ZO9rbGwAtxrviLzzFXgUfF1w5w3YWsh5AzZkG2g04r5PogC8Cr4puPMVWBH8XXDnDdjwzw202+bJpFz+o219Y1nwVcGdr8CS4APBnTdgg/cG5Me9h9ZmXX5+d/OGAk403gfOTckLsJYQ7ysQDBQN2wHHmI0OyMfxGfGwFOJ34MBMh9mo0/DewG8P+aML0i5wM+GfXmHemS+A5wn35X0FgoGiMc1F9w7YSsg1sJcifAOaGn8CLk3JPbA9ySa8r0AwUDRmOewxjkpHwLyWODS1Qy09FbyvQDBQNPIceNoGyzOB9xUIBorGFyQVtngCRvTRAAAAAElFTkSuQmCC');
	background-repeat: no-repeat;
	background-size: 100% 100%;
}

`
);

const cat_w = 80;
const cat_h = 60;
const state = {
  "still" :  {x: 0*cat_w, y:0},
  "front" :  {x: -1*cat_w, y:0},
  "scare" :  {x: -2*cat_w, y:0},
  "rest" :   {x: -3*cat_w-8, y:0},
  "blow" :   {x: -4*cat_w, y:0},
  "walk_0" : {x:  0*cat_w-8, y:-1*cat_h-8},
  "walk_1" : {x: -1*cat_w-16, y:-1*cat_h-8},
  "jump_0" : {x:  0*cat_w-10, y:-2*cat_h-20},
  "jump_1" : {x: -1*cat_w-10*2, y:-2*cat_h-20},
  "jump_2" : {x: -2*cat_w-10*3, y:-2*cat_h-20},
  "jump_3" : {x: -3*cat_w-10*4, y:-2*cat_h-20},
  "jump_4" : {x: -4*cat_w-10*5, y:-2*cat_h-20},
}

const transition = {
  "still": {time:300 , actions:["still","front","scare","rest","blow","walk_0","jump_0","turn"], energy: 0},
  "front": {time:600 , actions:["still","front","scare","rest","blow","turn"], energy: -1},
  "scare": {time:300 , actions:["still","front","scare","rest","blow","walk_0","jump_0","turn"], energy: -1},
  "rest": {time:900 , actions:["rest","still"], energy: 2},
  "blow": {time:300 , actions:["still","front","scare","rest","blow","turn"], energy: -1},
  "walk_0": {time:200 , actions:["walk_1","walk_1","walk_1","still"], energy: -2},
  "walk_1": {time:200 , actions:["still","walk_0","walk_0","walk_0","jump_0","jump_0"], energy: -2},
  "jump_0": {time:0 , actions:["jump_1"], energy: -5},
  "jump_1": {time:0 , actions:["jump_2"], energy: 0},
  "jump_2": {time:0 , actions:["jump_3"], energy: 0},
  "jump_3": {time:0 , actions:["jump_4"], energy: 0},
  "jump_4": {time:0 , actions:["still","jump_1","walk_1"], energy: 0},  
}



const body = document.getElementsByTagName('body')[0];
const cat = document.createElement('cat');
// cat.style['top'] = (window.innerHeight-cat_h)+"px ";
body.appendChild(cat); 
let position = 0;
let position_y = window.innerHeight - cat_h - 10;
let speed = -10;
let action = "still";
let pause = 0;
let tick = 100;
let energy = 10;

cat.onclick = () =>
{
  const heart = document.createElement('heart');
  body.appendChild(heart); 
  heart.style['top']= (position_y - 24)+"px";
  heart.style['left']= (position + (cat_w/2 - 12))+"px";
  energy+= 50;
  setTimeout(() =>
  {
   	body.removeChild(heart); 
  }, 600);
}




function random_action(action)
{
 	const new_action = choose(transition[action].actions);
  
  if(new_action === 'turn')
  {
    cat.classList.toggle('right');
    speed = -speed;
    return action;
  }
  
  if(energy + transition[new_action].energy < 0)
    return random_action(action);
  
  energy+= transition[new_action].energy; 
  console.log('energy: ',energy);
  
  return new_action;
}

function move(action)
{
  switch(action)
  {
    case 'walk_0':
    case 'walk_1':
    case 'jump_0':
    case 'jump_1':
    case 'jump_2':
    case 'jump_3':
    case 'jump_4':
      position += speed;
      
      if(position < 0)
        position = 0;
      
      if(position + cat_w  > window.innerWidth)
        position = window.innerWidth - cat_w;
        
    	cat.style['left'] = position+"px ";  
    break;
  }
}

setInterval(() => 
{
  if(pause > 0)
  {
    pause-=tick;
    return;
  }
  
  action = random_action(action);
  pause = transition[action].time;
  move(action);
  
  if(position_y < (window.innerHeight-cat_h))
  {
    position_y+=10;
    cat.style['top']= (position_y)+"px";
  }
  
	cat.style['background-position'] = state[action].x+"px "+state[action].y+"px ";
}, tick);

setInterval(() => 
{
 
  if(position_y < (window.innerHeight - cat_h))
  {
    position_y+=10;
    
    if(position_y > (window.innerHeight - cat_h))
      position_y = window.innerHeight - cat_h;
    
    cat.style['top']= (position_y)+"px";
  }

}, 100);

