import torch
import torch.nn as nn
from torch.nn import functional as F

text = """
hello world
how are you
hello transformer
"""

# Build the vocabulary
chars = sorted(set(text))
vocab_size = len(chars)
stoi = {ch: i for i, ch in enumerate(chars)}
itos = {i: ch for i, ch in enumerate(chars)}
print(f"Vocabulary: {chars}")
print(f"Vocabulary size: {vocab_size}")
print(f"stoi: {stoi}")
print(f"itos: {itos}")
