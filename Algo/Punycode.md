# Encoding

* ASCII chars are first placed
* non-ASCII chars(charcode >= 128) are listed, sorted by pair (charcode, position)
* Each number claim which possible inserting way used
* * non-ASCII means that, at the beginning, first possibility is first position insert \x80.
* * Notice that sorted disable chars smaller than current or equal to and earlier than current, so first possibility is to place same char after current one.
  * E.g. if current string is ABⅠCD, then inserting result in ABⅠⅠCD, ABⅠCⅠD, ABⅠCDⅠ,ⅡABⅠCD,AⅡBⅠCD,ABⅡⅠCD,ABⅠⅡCD,ABⅠCⅡD,ABⅠCDⅡ,ⅢABⅠCD,...
  * This results in small number when chars have similar charcodes, which usually hold when the name is in same language.
* Each number is encoded into a string of /[a-z0-9]+/, with rule that the string ends at char k iff char k is less than f(k). Number is its order sorted by (length, reverse(string)).
* f(k) is generated per position based on historical encoding, and bounded in [1,26].
  * Technically 0<=f(k)<36, where 0 means string never end here. k=36 would force string to end here, disabling encoding any larger number.

This blog more focus on what it tries to do than what it does.

# TODO

Define f
