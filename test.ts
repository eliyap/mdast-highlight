import { fromMarkdown } from 'mdast-util-from-markdown';
import { toMarkdown } from 'mdast-util-to-markdown';
import { removePosition } from 'unist-util-remove-position';
import { pandocMark } from 'micromark-extension-mark/dev/index.js';
import {
    pandocMarkFromMarkdown,
    pandocMarkToMarkdown,
} from './index.js';
import test from 'tape';

test('markdown -> mdast', (t) => {
    t.deepEqual(
        removePosition(
            fromMarkdown('a ==b== c.', {
                extensions: [pandocMark()],
                mdastExtensions: [pandocMarkFromMarkdown],
            }),
            true
        ),
        {
            type: 'root',
            children: [
                {
                    type: 'paragraph',
                    children: [
                        { type: 'text', value: 'a ' },
                        { type: 'mark', children: [{ type: 'text', value: 'b' }] },
                        { type: 'text', value: ' c.' }
                    ]
                }
            ]
        },
        'should support highlight'
    )

    t.deepEqual(
        removePosition(
            fromMarkdown('a ==b\nc== d.', {
                extensions: [pandocMark()],
                mdastExtensions: [pandocMarkFromMarkdown],
            }),
            true
        ),
        {
            type: 'root',
            children: [
                {
                    type: 'paragraph',
                    children: [
                        { type: 'text', value: 'a ' },
                        { type: 'mark', children: [{ type: 'text', value: 'b\nc' }] },
                        { type: 'text', value: ' d.' }
                    ]
                }
            ]
        },
        'should support highlight w/ eols'
    )

    t.end()
})

test('mdast -> markdown', (t) => {
    t.deepEqual(
        toMarkdown(
            {
                type: 'paragraph',
                children: [
                    { type: 'text', value: 'a ' },
                    { type: 'mark', children: [{ type: 'text', value: 'b' }] },
                    { type: 'text', value: ' c.' }
                ]
            },
            { extensions: [pandocMarkToMarkdown] }
        ),
        'a ==b== c.\n',
        'should serialize highlight'
    )

    t.deepEqual(
        toMarkdown(
            {
                type: 'paragraph',
                children: [
                    { type: 'text', value: 'a ' },
                    { type: 'mark', children: [{ type: 'text', value: 'b\nc' }] },
                    { type: 'text', value: ' d.' }
                ]
            },
            { extensions: [pandocMarkToMarkdown] }
        ),
        'a ==b\nc== d.\n',
        'should serialize highlight w/ eols'
    )

    t.end()
});