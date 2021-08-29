import tape = require('tape');
import { fromMarkdown } from 'mdast-util-from-markdown';
import { toMarkdown } from 'mdast-util-to-markdown';
import { removePosition } from 'unist-util-remove-position';

tape('example', (t) => {
    t.deepEqual({}, {
        fromMarkdown,
    });
    t.end();
});