# 605. Can Place Flowers
# Easy

"""
You have a long flowerbed in which some of the plots are planted, and some are not.
However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty,
and an integer n, return true if n new flowers can be planted in the flowerbed without
violating the no-adjacent-flowers rule and false otherwise.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
"""


def canPlaceFlowers(flowerbed: list[int], n: int) -> bool:
    # create variable to track addable flower plots
    plantable = 0
    # initiate last flower for cases that begin with 0
    last_flower = -2
    # iterate through list
    for i in range(len(flowerbed)):
        # if item is a 1, note index in variable
        if flowerbed[i] == 1:
            # note the distance since the last 1
            distance = i - last_flower
            # divide by two and subtract one. This is the maximum flowers you can insert in this space.
            # add this number to a variable that tracks total addable flower plots
            plantable += distance // 2 - 1
            # update last_flower variable
            last_flower = i
        # test endcase
        if i == len(flowerbed) - 1:
            distance = i - last_flower
            plantable += distance // 2
    # compare n to see if it supercedes variable for addable flower plots
    if plantable >= n:
        return True
    else:
        return False


print(canPlaceFlowers([1, 0, 0, 0, 1], 1))  # expected True
print(canPlaceFlowers([1, 0, 0, 0, 1], 2))  # expected False
