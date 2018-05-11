## Dan - beginner - level 7

### _You feel a wall right in front of you and an opening behind you._

> **TIP:** You're not as effective at attacking backward. Use `warrior.feel().isWall()` and `warrior.pivot()` to turn around.


### Floor Map

```
╔══════╗
║>a S @║
╚══════╝

> = stairs
a = Archer (7 HP)
S = Thick Sludge (24 HP)
@ = Dan (20 HP)
```

### Abilities

#### Actions (only one per turn)

* `warrior.pivot()`: Rotate in the given direction (backward by default).
* `warrior.walk()`: Move one space in the given direction (forward by default).
* `warrior.attack()`: Attack a unit in the given direction (forward by default) dealing 5 HP of damage.
* `warrior.rest()`: Gain 10% of max health back, but do nothing more.
* `warrior.rescue()`: Rescue a captive from his chains (earning 20 points) in the given direction (forward by default).

#### Senses

* `warrior.feel()`: Return the adjacent space in the given direction (forward by default).
* `warrior.health()`: Return an integer representing your health.

### Next Steps

When you're done editing `Player.js`, run the `warriorjs` command again.
