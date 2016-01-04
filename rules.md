# Big Game Catan variant

There are 3 different pre-generated game boards


* Board A

```
  .--.      .--.      .--.      .--.
 /    \    /    \    /    \    /    \
<  F4  >--<  F6  >--<  W9  >--<  O2  >--.
 \    /    \    /    \    /    \    /    \
  `--<  S12 >--<  D   >--<  F11 >--<  W8  >--.
      \    /    \    /    \    /    \    /    \
       >--<  O5  >--<  B10 >--<  S9  >--<  F3  >
      /    \    /    \    /    \    /    \    /
  .--<  B8  >--<  S3  >--<  D   >--<  B4  >--'
 /    \    /    \    /    \    /    \    /
<  W11 >--<  S10 >--<  W5  >--<  O6  >--'
 \    /    \    /    \    /    \    /
  `--'      `--'      `--'      `--'
```


* Board B

```
  .--.      .--.      .--.      .--.
 /    \    /    \    /    \    /    \
<      >--<      >--<      >--<      >--.
 \    /    \    /    \    /    \    /    \
  `--<      >--<      >--<      >--<      >--.
      \    /    \    /    \    /    \    /    \
       >--<      >--<      >--<      >--<      >
      /    \    /    \    /    \    /    \    /
  .--<      >--<      >--<      >--<      >--'
 /    \    /    \    /    \    /    \    /
<      >--<      >--<      >--<      >--'
 \    /    \    /    \    /    \    /
  `--'      `--'      `--'      `--'
```

* Board C

```
  .--.      .--.      .--.      .--.
 /    \    /    \    /    \    /    \
<      >--<      >--<      >--<      >--.
 \    /    \    /    \    /    \    /    \
  `--<      >--<      >--<      >--<      >--.
      \    /    \    /    \    /    \    /    \
       >--<      >--<      >--<      >--<      >
      /    \    /    \    /    \    /    \    /
  .--<      >--<      >--<      >--<      >--'
 /    \    /    \    /    \    /    \    /
<      >--<      >--<      >--<      >--'
 \    /    \    /    \    /    \    /
  `--'      `--'      `--'      `--'
```

On each board, the starting positions for 2 players are indicated in
predetermined player colours. These 2 players share the board and the
corresponding game components.

In each game round one of the 2 players at this board is the active player.

All players belong to one of two groups so it is always clear whose turn it is
* Group "Sun"
* Group "Moon"

Each side of the board is marked with a sun on one side and a moon on the other.

In addition the island is divided by a "Dividing line" for strating territories
* This can be seen here

```
                Dividing Line
                        |
  .--.      .--.      .-|-.      .--.
 /    \    /    \    S  |  \    /    \
<      >--<      >--X   |   >--<      >--.
 \    /    \    /    \  |  /    \    /    \
  `--<      >RRX      >-|-<      >--<      >--.
      \    /    \    /  |  \    /    \    /    \
       >--<      >--X   |   X--<      >--<      >
      /    \    /    \  |  /    \    /    \    /
  .--<      >--<      >-|-<      XRR<      >--'
 /    \    /    \    /  |  \    /    \    /
<      >--<      >--<   |   X--<      >--'
 \    /    \    /    \  |  S    \    /
  `--'      `--'      `-|-'      `--'
                        |
```

## Setup

* Place the resource cards face up on the designated spaces on both sides of the
  board
  * These cards should be distributed more or less evenly

* Development cards get shuffled
  * No Monopoly cards
  * These cards should be distributed more or less evenly

* Largest Army and Longest Road are both designated by a blue marker

* You start with 3 settlements on the indicated spaces on the game board

* Settlement starting resources
  * One settlement receives 1 ship
  * One settlement receives 1 road, as shown on the game board
  * The third settlement receives no additional game pieces

* Choose 1 of your starting settlements and take resources from surrounding hex
  tiles

* After taking your resources, replace 1 of your 3 settlements with a city

* Ensure that there is a robber present on each of the 2 desert hexes at game
  start

## Gameplay

* All players are divided into two groups
  * Sun
  * Moon
* All active players in the smae group (Either Sun or Moon) play in alternating
  rounds, the group will be announced before each round and indicated on screen

* The number of the terrain hex to produce resources will be displayed on screen
  * This number applies to all game boards

* All active players have a fixed amount of time available for their turn, which
  they must not exceed
  * Rounds will be 45 seconds in length

* A turn always consists of 2 phases:
  * Resource production:
    * The dice roll result is visable on screen
      * It applies to all players
      * Resources are distributed automatically
      * Logic checks ensure the resources are distributed correctly
  * Trading and Building:
    * You may not initiate trading until all resources are distributed.
      * Then you may trade and build, this phase ends when the timer expires

## Trading

* If you are the active player at your game board, you have 5 players you can
  trade with
  * The player across from you
  * The two players at the board to your left
  * The two players at the board to your right

```
 Inactive    Inactive    Inactive
.----------.----------.----------.
|        \ |     |    | /        |
|         \|     |    |/         |
|          \     |    /          |
|          |\    |   /|          |
`----------.----------.----------'
  Active <----  You ----> Active
```

* You may trade and build in any order, as many times as you wish

* If you are not the active player, you may only trade with the 3 active players
  across from you

* Maritime trade with the bank at the following rates
  * 4:1
  * Harbor for 3:1 or 2:1 according to normal base rules

## Building

* Building is simultaneous on all boards.
  * Only the active player(s) may build.
  * All active players are considered to be in the trading and building phase
    simultaneously

* You may build on your own board and also on the boards to your left and right

* Build and move ships according to the usual *Seafarers* rules
  * Moving 1 ship per turn, from an open shipping route

* All resources being paid to build will follow game logic checks

* Dividing lines cut each game board in half.
  * The area of the island containing your starting pieces is considered your
    starting territory
    * For the first settlement you build on another player's starting territory
      you earn an additional 2 victory points (ie that settlement is worth 3VP)
    * Further settlements you build in foreign starting territories od not earn
      you additional points
    * This applies to all game boards

## Development Cards

* Remove the *Monopoly* development cards from the deck, these progress cards
  are not used.

* Use all other cards as you do in a regular *CATAN* or *Seafarers* game
  * Use *Road Building* to build the following
    * 2 roads
    * 1 Road 1 Ship
    * 2 ships

* You can use a Knight card as follows:
  * If a robber stands on a hex adjacent to one of your settlements/cities
    * You can move him to your desert hex by playing a knight card
      * You receive 1 resource card of the type produced by the hex that the
        robber just left
    * If no robber stands next to your settlements/cities and you nevertheless
      play a knight card
        * You receive 1 resource card of your choice but do not move the robber.

## Robbers

* There is 1 robber in each starting territory, which he never leaves.

* For the first 15 turns of the game, the robbers do not move.
  * For each new player this begins and ends with their first 15 turns
  * If a *7* is rolled, each player checks his hand size
    * If you have 8 or more resources, discard half of your resource cards,
      rounding down

* Starting with turn 16, each time a *7* is rolled, the players check their hand
  sizes and discard cards as necessary.
  * Then the dice are rolled again, to determine the hexes on which the robbers
    are placed.
    * Each number except for *2* and *12* exist twice on each game board
      * Once in the *sun* player's territory and once in the *moon*
    * Each of the 2 hexes whose number was rolled is now blocked by 1 robber.
      * if the dice roll result for the robbers is a *2* or a *12*
        * One of the robbers blocks the corresponding hex on the game board
        * The other robber returns to the desert in which he was placed at the
          beginning of the game
      * If the robbers already occupy the hexes whose number is rolled they
        remain there.
      * If another *7* is rolled, the robbers go back to their deserts.

* After moving the robbers, you do not take a card from the other player
