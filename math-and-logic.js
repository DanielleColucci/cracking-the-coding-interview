// 1. You have 20 bottles of pills. 19 bottles have 1.0 gram pills, but one has pills of weight 1.1 grams. Given a scale that provides an exact measurement, how would you find the heavy bottle? You can only use the scale once. 

  // we know we have to weigh pills from multiple bottles at the same time since we can only use the scale once. 
  // we can take advantage of grabbing different numbers of pills from each bottle. 
  // say you took 1 pill from bottle 1, 2 pills from bottle 2, 3 pills from bottle 3, ... , 19 pills from bottle 19, and 20 pills from bottle 20 
  // you would expect the result to be 1 + 2 + 3 + ... + 19 + 20 = 210 g 
  // Then anything over would be the result of 1.1 g pills. So if take the excess, (total weight - 210) and divide by 0.1, you have the number of 1.1 g pills that were added, and therefore the bottle that it came from 
    // i.e. say the total weight was 210.6, that is 0.6 g more than expected, so you know that bottle 6 has the 1.1 g pills

// 2. You have a basketball hoop and someone says that you can play one of two games. 
    // Game 1: You get one shot to make the hoop
    // Game 2: You get three shots and you have to make two of three shots
    // If p is the probability of making a particular shot, for which values of p should you pick one game or the other?

// 3. There is an 8x8 chessboard in which two diagonally opposite corners have been cut off. You are given 31 dominos, and a single domino can cover exactly two squares. Can you use the 31 dominos to cover the entire board? Provide your answer (by providing an example or showing why it is impossible)

  // Well first of all 8 x 8 - 2 (the area of the board) is 62 which is 2 * 31 (or the total area of all the dominos)
  // When you remove the opposite corners, you are either removing 2 white or 2 black squares (for the case of explanation, I'll say we're removing 2 white squares, but note that the logic also works in the other direction, thus covering each scenario). 
  // Removing 2 white squares leaves 30 white squares and 32 black squares.
  // A domino must cover exactly one white and exactly one black square (because it must cover 2 two adjacent squares which alternate colors)
  // Therefore, in order for the dominos to perfectly cover the board, they would need to cover the same number of white squares as black squares (1 and 1 per domino)
  // Since there are 2 more black squares than white squares, in any configuration, there will always be 2 non-adjacent black squares left uncovered.
  // So no, this is not possible

// 4. There are three ants on different vertices of a triangle. What is the probability of collision (between any two or all of them) if they start walking on the sides of the triangle? Assume that each ant randomly picks a direction, with either direction being equally likely to be chosen, and that they walk at the same speed 

// 5. You have a five quart jug, a three quart jug, and an unlimited supply of water (but no measuring cups). How would you come up with exactly four quarts of water? Note that the jugs are oddly shaped, such that filling up exactly "half" of the jug would be impossible

  // Fill the five quart jug. 
  // Use that to fill the three quart jug (5 holds 2 and 3 holds 3)
  // Empty the three quart jug (5 holds 2 and 3 holds 0)
  // Pour the contents of the five quart jug into the 3 quart jug (5 holds 0 and 3 holds 2)
  // Fill the five quart jug again (5 holds 5 and 3 holds 2)
  // Then use the five quart jug to top off the three quart jug (5 holds 4 and 3 holds 3)
  // Now you have 4 quarts in the five quart jug. 

// 6. A bunch of people are living on an island, when a visitor comes with  strange order: all blue-eyed people must leave the island as soon as possible. There will be flight out at 8:00pm every evening. Each person can see everyone else's eye color, but they do not know their own (nor is anyone allowed to tell them). Additionally, they do not know how many people have blue eyes, although they do know that at least one person does. How many days will it take the blue-eyed people to leave.

// 7. In the new post-apocalyptic world, the world queen is desperately concerned about the birth rate. Therefore, she decrees that all familiesd hosuld ensure that they have one girl or else they face massive fines. If all families abide by this policy -- that is, they have continued to have children until they have one girl, at which point they immediately stop -- what will the gender ratio of the new generation be? (Assume that the odds of someone having a boy or girl on any given pregnancy is equal). Solve this out logically and then write a computer simulation of it 

// 8. There is a building of 100 floors. If an egg drops from the Nth floor or above, it will break. If it is dropped from any floor below, it will not break. You're given two eggs. Find N, while minimizing the number of drops for the worst case.