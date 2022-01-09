# Single Wire Multi Source

When reading from a wire where multiple sources are avaliable, a random one is chosen.
This is usually bad, but if reading from wrong source doesn't matter much, then we can still make use of it.

Here, take the ￥4 **Passive Infrared Sensor** as example.

## Passive Infrared Sensor
> *    **time** is a simple input connected to a DT2415 clock providing the current time.
> *    **sensor** is a simple input connected to an infrared sensor.
> *    **alarm** is a simple output connected to a silent alarm.
> *    When the current **time** equals the on time, the device should be *armed*.
> *    When the current **time** equals the off time, the device should be *disarmed*.
> *    Whenever the device is *armed* and the **sensor** reads at or above a value of 20, the **alarm** output should be active.
> *    The on and off times are set by the operator using dials that can be read as XBus inputs and use numerical values compatible with the DT2415.

Extra info that may help:
* **time** increases by one modulo 96 every time step.
* Therefore, **time** equals the on time and the off time each only once.
* (Used) The on time and the off time are both not nop, making it possible to mistake on time between off time.
* The off time is never 0.

To solve this puzzle in ￥4, only one MC4000 and a ￥1 chip avaliable.
Since we need to read two simple pins, and output info even when both inputs are high,
DX300 is the only choice.

Now we have 3 XBUSs, the on time, the off time, and the DX300, each of which are readable
(Though we don't read info from DX300). To fit the limit of MC4000, we need to connect two onto one wire.
Here the on time and the off time are connected to x0. You can try to share any two or even all three, and their code fit in an MC6000 so easy to test.

Because of the randomness, we need to read x0 multiple times:

    1:teq x0 p1  # p1 is time
    + (switch state)
    - tgt acc 99
    - add 10
    - jmp 1      # retest

Here 10 times are tested if acc starts between 0 and 9, inclusive.
The least significant digit in acc can be used to store state.

To make switch state easy, we set the least significant digit 0 when *disarmed* and 5 when *armed*.
In this way, we can just do `add 5` to switch state.

Output is simple:

      tlt p0 20  # p0 is sensor
    - mov acc x1 # x1 is DX300 with p0 connected to alarm
      slp 1
    - mov 0 x1   # (1)

Yet we also need to reset the high part of acc to begin with next loop:

      dgt 0      # (2)

This seems to overflow line limit, but (1) and (2) can be merged:

      dgt x1

And this is the final code:

    1:teq x0 p1
    + add 5
    - tgt acc 99
    - add 10
    - jmp 1
      tlt p0 20
    - mov acc x1
      slp 1
      dgt x1
