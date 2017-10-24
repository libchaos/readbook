def combination(n, lst, combos=[]):
    if combos is None:
        combos = []
    if len(lst) == n:
        if combos.count(lst) == 0:
            combos.append(lst)
            combos.sort()
        return combos

    else:
        for i in range(len(lst)):
            refined_list = lst[:i] + lst[i+1:]
            combos = combination(n, refined_list, combos)
        return combos



