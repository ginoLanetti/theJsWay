const aurora = {
    name: Aurora,
    health: 50,
    strength: 25,
    xp: 0,
    describe() {
        return `${this.name} has ${this.health} health points and ${this
  .strength} as strength and ${this.xp} XP`;
    }
}
// Aurora is harmed by an arrow
aurora.health -= 20;
// Aurora equips a strength necklace
aurora.strength += 10;
// Aurora learn a new skill
aurora.xp += 15;
console.log(aurora.describe());