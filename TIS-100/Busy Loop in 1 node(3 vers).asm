   MOV 999,  ACC
2: SWP
1: ADD 1
   NOP
   NOP
   NOP
   NOP
   NOP
   NOP
   JLZ 1
   MOV -999, ACC
   SWP
   SUB 1
   JGZ 2
   MOV ANY,  ANY


   MOV 999,  ACC
2: SWP
1: NOP
   NOP
   NOP
   NOP
   NEG
   JGZ 1
   ADD 1
   JLZ 1
   MOV -999, ACC
   SWP
   SUB 1
   JGZ 2
   MOV ANY,  ANY


   MOV 999,  ACC
2: SWP
1: SWP
0: NEG
   JLZ 0
   SWP
   NEG
   JGZ 1
   ADD 1
   JLZ 1
   MOV -999, ACC
   SWP
   SUB 1
   JGZ 2
   MOV ANY,  ANY



