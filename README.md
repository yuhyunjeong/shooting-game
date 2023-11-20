# 🚀 space shooting game 🚀

![shooting game recording](https://github.com/yuhyunjeong/shooting-game/assets/88241376/a9026a9a-c126-4a3e-9141-0f6de5011f4d)


## 💻 Process

### Controls 🎮

1. press keyboard arrows key
2. change the coordinate values of space ship
3. render again

### Bullet 🚀

1. pressing space bar fires bullets
2. y-coordinate value of bullet is decremented
3. store fired bullets in array
4. render with the bullet array

### Enemy 💣

1. randomized enemy location
2. descend
3. create one per second
4. if an enemy reaches the bottom, Game over

### Score 🏆

1. if bullets hit the enemies, they disappear
2. bullet.y >= enemy.x
3. bullet.x >= enemy.x and bullet.x <= enemy.x + enemy.width
4. get 1 point


<hr/>


## ✅ What I learned

### canvas and ctx

- drawImage

  - draws an image, canvas, or video onto the canvas.

- fillText

  - draws filled text on the canvas.

- fillStyle

  - sets or returns the color, gradient, or pattern used to fill the drawing.

- font

  - ets or returns the font properties for canvas text.

### requestAnimationFrame

- perform an animation and request that the browser call a specified function 
to update an animation before the next repaint.
