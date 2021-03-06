# Copyright (c) Facebook, Inc. and its affiliates.
# All rights reserved.
#
# This source code is licensed under the license found in the
# LICENSE file in the root directory of this source tree.
#

from . import VizSeqScorerTestCase
from vizseq.scorers.gleu import GLEUScorer


class GLEUScorerTestCase(VizSeqScorerTestCase):
    def test(self):
        return self._test_n_grams_based(GLEUScorer, 0.9)
