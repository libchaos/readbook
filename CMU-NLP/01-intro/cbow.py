from collections import defaultdict
import time
import random
import dynet as dy
import numpy as np


w2i = defaultdict(lambda: len(w2i))
t2i = defaultdict(lambda: len(t2i))
UNK = w2i['<unk>']


def read_dataset(filename):
    with open(filename, 'r') as f:
        for line in f:
            tag, words = line.lower().strip().split('|||')

            yield ([w2i[x] for x in words.split(' ')], t2i[tag])

train = list(read_dataset('../data/classes/train.txt'))
w2i = defaultdict(lambda: UNK, w2i)
dev = list(read_dataset('../data/classes/test.txt'))
nwords = len(w2i)
ntags = len(t2i)

model = dy.Model()
trainer = dy.AdamTrainer(model)

EMB_SIZE = 64
W_emb = model.add_lookup_parameters((nwords, EMB_SIZE))
W_sm = model.add_parameters((ntags, EMB_SIZE))
b_sm = model.add_parameters((ntags))


def calc_scores(words):
    dy.renew_cg()
    cbow = dy.esum([dy.lookup(W_emb, x) for x in words])
    


