export interface IFlyBehavior {
  fly(): void
}

export interface IDuck {
  display(): void
  performFly(): void
  switchGear(newFlyBehavior: IFlyBehavior): void
  tired: boolean
}
