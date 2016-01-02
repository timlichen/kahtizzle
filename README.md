# Kahtizzle

Based on the popular board game Catan

Intended to be device agnostic (Mobile, and Desktop)

## Game goals

* Tick based turns with players put into 6 tick groups
  * Each tick phase will:
      Generate a 2 six-sided dice roll.
      Assign correlating resources for all players.
      Start the turn for a specific group.
      Allow players within that group to build, settle, buy development cards, etc.

* Infinite board that grows as more players join
  * This allow us to generate more *islands* to keep the base game mechanics

* Robber mechanics will have to be slightly reworked for a large player group
  * Possibly make the robber controlled by chance/ai
    This can also work for villagers from Explorers & Pirates

* Server side move validation
  * Road placement
  * Settlement Placement

### Work in progress

Kahtizzle is only in it's initial planning phase, with no features currently
implemented. As development moves forward breaking changes are to be expected.

Contributions (Both issues and Pull Requests) are welcome.
