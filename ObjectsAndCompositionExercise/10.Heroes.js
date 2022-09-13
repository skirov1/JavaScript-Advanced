function solve() {
    class Hero {
        mage(name) {
            class Mage {
                constructor(name) {
                    this.name = name;
                    this.health = 100;
                    this.mana = 100;
                }                
                cast(spellName) {
                    console.log(`${this.name} cast ${spellName}`);
                    this.mana--;
                }
            }
            let mage = new Mage(name);
            return mage;
        }
        fighter(name) {
            class Fighter {
                constructor(name) {
                    this.name = name;
                    this.health = 100;
                    this.stamina = 100;
                }                
                fight() {
                    console.log(`${this.name} slashes at the foe!`);
                    this.stamina--;
                }
            }
            let fighter = new Fighter(name);
            return fighter;
        }
    }
    let hero = new Hero;
    return hero;
}
