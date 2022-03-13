from math import lcm

m, temp, res = int(input()), 0, 0
may_in = sorted([int(x) for x in input().split()])
res += may_in[0]
m -= 1
chu_ki = lcm(*may_in)
trang_ck = sum([chu_ki//i for i in may_in])
res += (m//trang_ck) * chu_ki
m %= trang_ck
trong_chu_ki = sorted([x for x in range(may_in[0],chu_ki + 1,may_in[0])] + [x for x in range(may_in[1],chu_ki + 1, may_in[1])])
print(trong_chu_ki)
res += trong_chu_ki[m - 1]
print(res)