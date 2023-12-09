import re


def isPalindrome(s: str) -> bool:
    # Remove punctuation and whitespace
    new_string = re.sub(r'[^a-zA-Z0-9]', '', s)
    # change text to lower case
    new_string = new_string.lower()
    # remove underscores
    # new_string = new_string.replace('_', '')
    # check if reverse is equivalent
    print(new_string)
    if new_string == new_string[::-1]:
        return True
    return False


input_string = "ab_a"
print(isPalindrome(input_string))

input_string = "A man, a plan, a canal: Panama"
print(isPalindrome(input_string))
