1. When a need doesn't require save of resources(time, space, etc.), almost every languages behave Turing complete.
Choice of language usually depend on historical reasons, e.g. Language X is installed, Language Y has lib to do something.


2. When performance is in consideration, the 3 linear reduction makes run time quite reasonable if it's possible:

  1) To convert code in language X to this language need at most linear time;
  2) To compile the converted code need at most linear time to code length more than the original one;
  3) To run the converted code need at most linear time to code length more than the original one.
  
It's possible as concating compiler and source code makes 3 constants, but it's quite bad when expanding.

A best language must satisfy the 3 linear reduction. 
Besides, the converted code should be readable and language be expandable, but since it's objective ...
