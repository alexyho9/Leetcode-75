"""
For two strings s and t, we say "t divides s" if and only if s = t + ... + t
(i.e., t is concatenated with itself one or more times).
Given two strings str1 and str2, return the largest string x such that
x divides both str1 and str2.

Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""
"""


def gcd(a, b):
    while b:
        a, b = b, a % b
    return a


def gcdOfStrings(str1: str, str2: str) -> str:
    len1 = len(str1)
    len2 = len(str2)
    min_len = min(len1, len2)
    divisor = gcd(len1, len2)
    result = ""
    i = 0
    while i < min_len and str1[i] == str2[i]:
        result += str1[i]
        if (
            result * (len1 // divisor) == str1
            and result * (len2 // divisor) == str2
        ):
            return result
        i += 1
    return ""


print(gcdOfStrings("ABC", "ABCABC"))
print(gcdOfStrings("ABABAB", "ABAB"))
print(gcdOfStrings("LEET", "CODE"))
print(gcdOfStrings("ABCDEF", "ABC"))
print(gcdOfStrings("ABABABAB", "ABAB"))
