"""
Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
"""


def reverseString(s: list[str]) -> None:
    """
    Do not return anything, modify s in-place instead.
    """
    s = s[::-1]
    print(s)


s = ["h", "e", "l", "l", "o"]


reverseString(s)
