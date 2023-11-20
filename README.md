# shooting-game

### Rendering : infinite loop

1. press keyboard
2. change the coordinate values of space ship
3. render again

### Bullet

1. pressing space bar fires bullets
2. y-coordinate value of bullet is decremented
3. store fired bullets in array
4. render with the bullet array

### Enemy

1. randomized enemy location
2. descend
3. create one per second
4. if an enemy reaches the bottom, Game over
5. if bullets hit the enemies, they disappear and get 1 point

### Killing Enemies

1. bullet.y >= enemy.x
2. bullet.x >= enemy.x and bullet.x <= enemy.x + enemy.width
3. when they hit, the bullet die and the enemy disappear
4. get 1 point
