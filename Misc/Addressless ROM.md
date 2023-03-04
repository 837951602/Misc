# Addressless ROM

A ROM usually provides value when given address. Yet without providing address, it can still repeatedly output a sequence.

Haulted Doll used this technic early, as the puzzle requires to output a sequence under the condition. 
This is also used in some other levels, typically when an alternative 0/1 value is needed, or 
less than 14 elements are needed.

# Addressing ROM using data line

Besides generating sequence, another usual usage is to search for given value. If no condition needed for other instructions,
then searching is only one line:

    teq <address> <searched value>

The searched value is usually PBus or DX300 input as it takes the value times.

Besides saving one Xbus, there's another good: this construction is stateful. It searches for next such item in the ROM.

Take Drinking Game Scorekeeper as example. It can be written as

      teq x0 0
    + slp 1
      teq x0 1
    + add 1
    + mov acc x3
    + slp 2
      teq x0 100
    + sub 2
    + sub 999
    + add 999
    + mov acc x3
    + slp 2

where extra `mov acc x3` and reading `x0` don't harm.

Write it into form with higher symmetry:

      teq x0 0
    + add 0
    + mov acc x3
    + slp 1
      teq x0 1
    + add 1
    + mov acc x3
    + slp 1
      teq x0 100
    + add -2
    + mov acc x3
    + slp 0
      teq x0 100
    + add -999
    + mov acc x3
    + slp 0
      teq x0 100
    + add 999
    + mov acc x3
    + slp 0

and get the pattern

      teq x0 x1
    + sub x1
    + mov acc x3
    + slp x1
    
with source

    0,0,1
    1,-1,2
    100,2,-1
    100,999,-1
    100,-999,2

Here `sub` is used to avoid confusion between `1` in `add 1` and `teq x0 1`, and `sleep -1` to avoid mistaken with `teq x0 0`.

The two `1`s happen to join, so 14-token ROM fits the table, and a 4-line DGS solution appears.
