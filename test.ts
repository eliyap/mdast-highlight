import tape = require('tape');
import { fromMarkdown } from 'mdast-util-from-markdown';
import { toMarkdown } from 'mdast-util-to-markdown';

tape('example', (t) => {
    t.deepEqual(1, 1);
    t.end();
});