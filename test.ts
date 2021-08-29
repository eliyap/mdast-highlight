import { fromMarkdown } from 'mdast-util-from-markdown';
import { toMarkdown } from 'mdast-util-to-markdown';
import { removePosition } from 'unist-util-remove-position';
import {
    pandocMarkFromMarkdown,
    pandocMarkToMarkdown,
} from './index.js';
import test from 'tape';

tape('example', (t) => {
    t.deepEqual({}, {
        fromMarkdown,
    });
    t.end();
});