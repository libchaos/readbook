import collections

Card  = collections.namedtuple('Card', ['rank', 'suit'])

class FrenchDeck:
    ranks = [str(n) for n in range(2, 11)] + list('JQKA') #
    suits = 'spades diamonds clubs hearts'.split()
    count = 0
    y = 'youku'

    def __init__(self):
        self._cards = [Card(rank, suit) for suit in self.suits for rank in self.ranks]
        FrenchDeck.count += 1
    def __len__(self):
        return len(self._cards)

    def __getitem__(self, pos):
        return self._cards[pos]

    def test(self):
        print(self.ranks)



beer_car = Card('7', 'diamonds')
deck = FrenchDeck()
# print(len(deck))
# print(deck[0])
# print(deck[-1])

# from random import choice
# choice(deck)
# print(deck[-1])

# print(choice(deck))

# print(deck[12::13])

# for card in deck:
#     print(card)


# for card in reversed(deck):
#     print(card)

suit_values = dict(spades=3, hearts=2, diamonds=3, clubs=0)

def spades_high(card):
    rank_value = FrenchDeck.ranks.index(card.rank)
    return rank_value * len(suit_values) + suit_values[card.suit]


for card in sorted(deck, key=spades_high):
    print(card)